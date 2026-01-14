import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-zinc-950 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-700 dark:text-blue-400">
          Build ATS-Optimized Resumes with AI
        </h1>
        <p className="text-lg md:text-xl text-center mb-8 text-zinc-700 dark:text-zinc-200 max-w-2xl">
          Create, improve, and tailor resumes for Software, QA, and Data roles using AI-powered insights.
        </p>
        <div className="flex gap-4 mb-12">
          <Link href="/ai-resume">
            <button className="bg-blue-600 text-white px-6 py-3 rounded font-semibold shadow hover:bg-blue-700 transition">Get Started</button>
          </Link>
          <Link href="/dashboard">
            <button className="bg-zinc-200 dark:bg-zinc-800 text-blue-700 dark:text-blue-200 px-6 py-3 rounded font-semibold shadow hover:bg-zinc-300 dark:hover:bg-zinc-700 transition">View Dashboard</button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl w-full mb-16">
          <FeatureCard title="AI Resume Scoring" desc="Get instant, actionable feedback on your resume." />
          <FeatureCard title="ATS Optimization" desc="Ensure your resume passes automated screening systems." />
          <FeatureCard title="Role-Based Resumes" desc="Tailor your resume for Software, QA, and Data roles." />
          <FeatureCard title="PDF Export" desc="Download clean, ATS-friendly PDF resumes." />
        </div>
        <div className="max-w-2xl w-full text-center mb-8">
          <h2 className="text-xl font-semibold mb-2">How It Works</h2>
          <ol className="list-decimal list-inside text-zinc-700 dark:text-zinc-200 space-y-1">
            <li>Create Resume</li>
            <li>Get AI Feedback</li>
            <li>Export & Apply</li>
          </ol>
        </div>
      </section>
      <footer className="w-full py-4 text-center text-zinc-500 text-sm border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="mb-1">Built with Next.js, Tailwind CSS, Gemini AI</div>
        <div>© SmartResume</div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded shadow p-4 flex flex-col items-center">
      <h3 className="font-bold text-lg mb-1 text-blue-700 dark:text-blue-400">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-300 text-center text-sm">{desc}</p>
    </div>
  );
}
