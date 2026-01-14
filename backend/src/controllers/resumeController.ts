import { Request, Response } from 'express';
import Resume from '../models/Resume';
import ResumeVersion from '../models/ResumeVersion';

// Create a new resume
export const createResume = async (req: Request, res: Response) => {
  try {
    const { title, role, data } = req.body;
    const userId = (req as any).userId;
    if (!title || !role || !data) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    // Create resume (without currentVersion)
    const resume = await Resume.create({
      user: userId,
      title,
      role
    });
    // Create initial version, now with resume id
    const version = await ResumeVersion.create({ resume: resume._id, data });
    // Update resume with currentVersion
    resume.currentVersion = version._id;
    await resume.save();
    return res.status(201).json(resume);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err });
  }
};

// Get all resumes for user
export const getResumes = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const resumes = await Resume.find({ user: userId }).populate('currentVersion');
    return res.status(200).json(resumes);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err });
  }
};

// Get single resume by id
export const getResume = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const { id } = req.params;
    const resume = await Resume.findOne({ _id: id, user: userId }).populate('currentVersion');
    if (!resume) return res.status(404).json({ message: 'Resume not found' });
    return res.status(200).json(resume);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err });
  }
};

// Update resume (creates new version)
export const updateResume = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const { id } = req.params;
    const { data, title, role } = req.body;
    const resume = await Resume.findOne({ _id: id, user: userId });
    if (!resume) return res.status(404).json({ message: 'Resume not found' });
    // Update title/role if provided
    if (title) resume.title = title;
    if (role) resume.role = role;
    // Create new version if data provided
    if (data) {
      const version = await ResumeVersion.create({ resume: resume._id, data });
      resume.currentVersion = version._id;
    }
    await resume.save();
    return res.status(200).json(resume);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err });
  }
};

// Delete resume
export const deleteResume = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const { id } = req.params;
    const resume = await Resume.findOneAndDelete({ _id: id, user: userId });
    if (!resume) return res.status(404).json({ message: 'Resume not found' });
    // Optionally delete versions
    await ResumeVersion.deleteMany({ resume: id });
    return res.status(200).json({ message: 'Resume deleted' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err });
  }
};
