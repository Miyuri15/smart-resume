export default function Sidebar() {
  return (
    <aside className="h-full w-64 bg-zinc-50 dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col p-4">
      <nav className="flex flex-col gap-4 mt-8">
        <a href="/dashboard" className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 font-medium transition">Dashboard</a>
        <a href="/resumes" className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 font-medium transition">My Resumes</a>
        <a href="/ai-tools" className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 font-medium transition">AI Tools</a>
        <a href="/settings" className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 font-medium transition">Settings</a>
      </nav>
      <div className="mt-auto pt-8">
        <a href="/logout" className="text-red-500 hover:underline font-medium">Logout</a>
      </div>
    </aside>
  );
}
