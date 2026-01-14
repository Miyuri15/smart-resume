export default function Header() {
  return (
    <header className="w-full h-16 flex items-center justify-between px-6 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl text-blue-600">SmartResume</span>
      </div>
      <nav className="flex gap-4">
        <a href="/" className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 transition">Home</a>
        <a href="/dashboard" className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 transition">Dashboard</a>
        <a href="/about" className="text-zinc-700 dark:text-zinc-200 hover:text-blue-600 transition">About</a>
      </nav>
    </header>
  );
}
