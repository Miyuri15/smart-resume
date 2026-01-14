export default function AboutPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">About SmartResume</h1>
      <div className="p-4 bg-white dark:bg-zinc-900 rounded shadow max-w-2xl">
        <p className="mb-2">SmartResume is an AI-powered resume builder designed for the Sri Lankan job market and global ATS systems.</p>
        <ul className="list-disc ml-5 text-zinc-600 dark:text-zinc-300">
          <li>AI resume rewriting and feedback</li>
          <li>Role-based resume templates</li>
          <li>PDF export and version history</li>
          <li>Modern, user-friendly interface</li>
        </ul>
      </div>
    </div>
  );
}
