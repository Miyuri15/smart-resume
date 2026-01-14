"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ResumesPage() {
  const [resumes, setResumes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResumes() {
      setLoading(true);
      const res = await fetch("/api/resumes");
      if (res.ok) {
        setResumes(await res.json());
      }
      setLoading(false);
    }
    fetchResumes();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("Delete this resume?")) return;
    const res = await fetch(`/api/resumes/${id}`, { method: "DELETE" });
    if (res.ok) {
      setResumes(resumes.filter((r) => r._id !== id));
    } else {
      alert("Failed to delete resume");
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Resumes</h1>
      {loading ? (
        <div>Loading...</div>
      ) : resumes.length === 0 ? (
        <div className="text-zinc-500">
          You haven’t created any resumes yet.
          <br />
          <Link
            href="/ai-resume"
            className="text-blue-600 hover:underline"
          >
            Create Your First Resume
          </Link>
        </div>
      ) : (
        <table className="w-full bg-white dark:bg-zinc-900 rounded shadow">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <th className="p-2 text-left">Title</th>
              <th className="p-2 text-left">Role</th>
              <th className="p-2 text-left">Last Updated</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {resumes.map((resume) => (
              <tr
                key={resume._id}
                className="border-b border-zinc-100 dark:border-zinc-800"
              >
                <td className="p-2">{resume.title}</td>
                <td className="p-2">{resume.role}</td>
                <td className="p-2">
                  {new Date(resume.updatedAt).toLocaleDateString()}
                </td>
                <td className="p-2">
                  <Link
                    href={`/ai-resume?id=${resume._id}`}
                    className="text-blue-600 hover:underline mr-2"
                  >
                    Edit
                  </Link>
                  <Link
                    href={`/resumes/${resume._id}`}
                    className="text-green-600 hover:underline mr-2"
                  >
                    View
                  </Link>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => handleDelete(resume._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
