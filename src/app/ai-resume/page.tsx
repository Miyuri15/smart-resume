"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const initialData = {
  name: "",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  github: "",
  role: "Software Engineer",
  education: [{ degree: "", institution: "", startYear: "", endYear: "", gpa: "" }],
  experience: [{ jobTitle: "", company: "", location: "", startDate: "", endDate: "", responsibilities: [""] }],
  skills: [""]
};

export default function AIResumePage() {
  const [form, setForm] = useState(initialData);
  const [aiFeedback, setAIFeedback] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [resumeId, setResumeId] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      setResumeId(id);
      fetchResume(id);
    }
  }, [searchParams]);

  async function fetchResume(id: string) {
    setLoading(true);
    const res = await fetch(`/api/resumes/${id}`);
    if (res.ok) {
      const resume = await res.json();
      setForm(resume.currentVersion?.data || resume.data);
    }
    setLoading(false);
  }

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleArrayChange(section: string, idx: number, field: string, value: string) {
    setForm({
      ...form,
      [section]: (form[section] as any[]).map((item: any, i: number) => i === idx ? { ...item, [field]: value } : item)
    });
  }

  function handleSkillChange(idx: number, value: string) {
    setForm({
      ...form,
      skills: form.skills.map((s, i) => i === idx ? value : s)
    });
  }

  function addSectionItem(section: string, item: any) {
    setForm({ ...form, [section]: [...(form[section] as any[]), item] });
  }

  async function handleAIFeedback() {
    setLoading(true);
    setTimeout(() => {
      setAIFeedback("Your resume is clear and well-structured. Consider adding more quantifiable achievements for greater impact.");
      setLoading(false);
    }, 1500);
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    try {
      const method = resumeId ? "PUT" : "POST";
      const url = resumeId ? `/api/resumes/${resumeId}` : "/api/resumes";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: `${form.role} Resume`,
          role: form.role,
          data: form,
        }),
      });
      if (res.ok) {
        router.push("/resumes");
      } else {
        alert(resumeId ? "Failed to update resume" : "Failed to create resume");
      }
    } catch (err) {
      alert(resumeId ? "Error updating resume" : "Error creating resume");
    }
    setLoading(false);
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400">AI Resume Builder</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <form className="space-y-6 bg-white dark:bg-zinc-900 p-6 rounded shadow" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="p-2 border rounded bg-zinc-100 dark:bg-zinc-800" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="p-2 border rounded bg-zinc-100 dark:bg-zinc-800" />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="p-2 border rounded bg-zinc-100 dark:bg-zinc-800" />
            <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="p-2 border rounded bg-zinc-100 dark:bg-zinc-800" />
            <input name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="LinkedIn" className="p-2 border rounded bg-zinc-100 dark:bg-zinc-800 col-span-2" />
            <input name="github" value={form.github} onChange={handleChange} placeholder="GitHub" className="p-2 border rounded bg-zinc-100 dark:bg-zinc-800 col-span-2" />
          </div>
          <div>
            <label className="block font-medium mb-1">Role</label>
            <select name="role" value={form.role} onChange={handleChange} className="w-full p-2 border rounded bg-zinc-100 dark:bg-zinc-800">
              <option>Software Engineer</option>
              <option>QA Engineer</option>
              <option>Data Analyst</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Education</label>
            {form.education.map((edu, i) => (
              <div key={i} className="grid grid-cols-2 gap-2 mb-2">
                <input value={edu.degree} onChange={e => handleArrayChange("education", i, "degree", e.target.value)} placeholder="Degree" className="p-2 border rounded bg-zinc-100 dark:bg-zinc-800" />
                <input value={edu.institution} onChange={e => handleArrayChange("education", i, "institution", e.target.value)} placeholder="Institution" className="p-2 border rounded bg-zinc-100 dark:bg-zinc-800" />
                <input value={edu.startYear} onChange={e => handleArrayChange("education", i, "startYear", e.target.value)} placeholder="Start Year" className="p-2 border rounded bg-zinc-100 dark:bg-zinc-800" />
                <input value={edu.endYear} onChange={e => handleArrayChange("education", i, "endYear", e.target.value)} placeholder="End Year" className="p-2 border rounded bg-zinc-100 dark:bg-zinc-800" />
                <input value={edu.gpa} onChange={e => handleArrayChange("education", i, "gpa", e.target.value)} placeholder="GPA" className="p-2 border rounded bg-zinc-100 dark:bg-zinc-800 col-span-2" />
              </div>
            ))}
            <button type="button" className="text-blue-600 hover:underline text-sm" onClick={() => addSectionItem("education", { degree: "", institution: "", startYear: "", endYear: "", gpa: "" })}>+ Add Education</button>
          </div>
          <div>
            <label className="block font-medium mb-1">Experience</label>
            {form.experience.map((exp, i) => (
              <div key={i} className="mb-2">
                <input value={exp.jobTitle} onChange={e => handleArrayChange("experience", i, "jobTitle", e.target.value)} placeholder="Job Title" className="p-2 border rounded bg-zinc-100 dark:bg-zinc-800 mr-2" />
                <input value={exp.company} onChange={e => handleArrayChange("experience", i, "company", e.target.value)} placeholder="Company" className="p-2 border rounded bg-zinc-100 dark:bg-zinc-800 mr-2" />
                <input value={exp.location} onChange={e => handleArrayChange("experience", i, "location", e.target.value)} placeholder="Location" className="p-2 border rounded bg-zinc-100 dark:bg-zinc-800 mr-2" />
                <input value={exp.startDate} onChange={e => handleArrayChange("experience", i, "startDate", e.target.value)} placeholder="Start Date" className="p-2 border rounded bg-zinc-100 dark:bg-zinc-800 mr-2" />
                <input value={exp.endDate} onChange={e => handleArrayChange("experience", i, "endDate", e.target.value)} placeholder="End Date" className="p-2 border rounded bg-zinc-100 dark:bg-zinc-800" />
                <textarea value={exp.responsibilities.join("\n")} onChange={e => handleArrayChange("experience", i, "responsibilities", e.target.value.split("\n"))} placeholder="Responsibilities (one per line)" className="w-full p-2 border rounded bg-zinc-100 dark:bg-zinc-800 mt-2" />
              </div>
            ))}
            <button type="button" className="text-blue-600 hover:underline text-sm" onClick={() => addSectionItem("experience", { jobTitle: "", company: "", location: "", startDate: "", endDate: "", responsibilities: [""] })}>+ Add Experience</button>
          </div>
          <div>
            <label className="block font-medium mb-1">Skills</label>
            {form.skills.map((skill, i) => (
              <input key={i} value={skill} onChange={e => handleSkillChange(i, e.target.value)} placeholder="Skill" className="p-2 border rounded bg-zinc-100 dark:bg-zinc-800 mb-2 w-full" />
            ))}
            <button type="button" className="text-blue-600 hover:underline text-sm" onClick={() => addSectionItem("skills", "")}>+ Add Skill</button>
          </div>
          <div className="flex gap-2">
            <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleAIFeedback} disabled={loading}>{loading ? "Analyzing..." : "Get AI Feedback"}</button>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded" disabled={loading}>{loading ? (resumeId ? "Updating..." : "Saving...") : (resumeId ? "Update Resume" : "Save Resume")}</button>
          </div>
        </form>
        <div className="bg-zinc-50 dark:bg-zinc-950 p-6 rounded shadow min-h-[400px]">
          <h2 className="font-semibold text-lg mb-2">Live Preview</h2>
          <div className="border p-4 rounded bg-white dark:bg-zinc-900">
            <div className="font-bold text-xl mb-1">{form.name}</div>
            <div className="text-zinc-600 dark:text-zinc-300 mb-2">{form.role}</div>
            <div className="text-sm mb-2">{form.email} | {form.phone}</div>
            <div className="text-sm mb-2">{form.location}</div>
            <div className="text-sm mb-2">
              <a href={form.linkedin} className="text-blue-600 hover:underline mr-2">LinkedIn</a>
              <a href={form.github} className="text-blue-600 hover:underline">GitHub</a>
            </div>
            <div className="mt-4">
              <div className="font-semibold">Education</div>
              {form.education.map((edu, i) => (
                <div key={i} className="text-sm mb-1">
                  {edu.degree}, {edu.institution} ({edu.startYear}–{edu.endYear}) — GPA: {edu.gpa}
                </div>
              ))}
            </div>
            <div className="mt-4">
              <div className="font-semibold">Experience</div>
              {form.experience.map((exp, i) => (
                <div key={i} className="text-sm mb-2">
                  <div className="font-medium">{exp.jobTitle} @ {exp.company}</div>
                  <div className="text-xs text-zinc-500">{exp.startDate} – {exp.endDate} | {exp.location}</div>
                  <ul className="list-disc ml-5">
                    {exp.responsibilities.map((r, j) => (
                      <li key={j}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <div className="font-semibold">Skills</div>
              <div className="text-sm mb-1">{form.skills.join(", ")}</div>
            </div>
          </div>
          {aiFeedback && (
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-600 dark:border-blue-400 text-blue-900 dark:text-blue-200 rounded">
              <b>AI Feedback:</b> {aiFeedback}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
