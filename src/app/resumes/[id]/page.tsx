"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ResumeViewPage() {
  const { id } = useParams();
  const [resume, setResume] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResume() {
      setLoading(true);
      const res = await fetch(`/api/resumes/${id}`);
      if (res.ok) {
        setResume(await res.json());
      }
      setLoading(false);
    }
    fetchResume();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!resume) return <div>Resume not found.</div>;

  const data = resume.currentVersion?.data || resume.data;

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 dark:text-blue-400">{resume.title}</h1>
      <div className="bg-white dark:bg-zinc-900 p-6 rounded shadow">
        <div className="font-bold text-xl mb-1">{data?.name}</div>
        <div className="text-zinc-600 dark:text-zinc-300 mb-2">{resume.role}</div>
        <div className="text-sm mb-2">{data?.email} | {data?.phone}</div>
        <div className="text-sm mb-2">{data?.location}</div>
        <div className="text-sm mb-2">
          {data?.linkedin && <a href={data.linkedin} className="text-blue-600 hover:underline mr-2">LinkedIn</a>}
          {data?.github && <a href={data.github} className="text-blue-600 hover:underline">GitHub</a>}
        </div>
        <div className="mt-4">
          <div className="font-semibold">Education</div>
          {data?.education?.map((edu: any, i: number) => (
            <div key={i} className="text-sm mb-1">
              {edu.degree}, {edu.institution} ({edu.startYear}–{edu.endYear}) — GPA: {edu.gpa}
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="font-semibold">Experience</div>
          {data?.experience?.map((exp: any, i: number) => (
            <div key={i} className="text-sm mb-2">
              <div className="font-medium">{exp.jobTitle} @ {exp.company}</div>
              <div className="text-xs text-zinc-500">{exp.startDate} – {exp.endDate} | {exp.location}</div>
              <ul className="list-disc ml-5">
                {exp.responsibilities?.map((r: string, j: number) => (
                  <li key={j}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <div className="font-semibold">Skills</div>
          <div className="text-sm mb-1">{data?.skills?.join(", ")}</div>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <Link href={`/resumes/${resume.id}/versions`} className="text-blue-600 hover:underline">View Versions</Link>
        <Link href={`/resumes/${resume.id}/export`} className="text-blue-600 hover:underline">Export PDF</Link>
      </div>
    </div>
  );
}
