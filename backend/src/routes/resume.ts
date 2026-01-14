import { Router } from 'express';
import { authenticate } from '../utils/authMiddleware';
import { createResume, getResumes, getResume, updateResume, deleteResume } from '../controllers/resumeController';

const router = Router();

router.use(authenticate);

router.post('/', createResume);
router.get('/', getResumes);
router.get('/:id', getResume);
router.put('/:id', updateResume);
router.delete('/:id', deleteResume);

export default router;
