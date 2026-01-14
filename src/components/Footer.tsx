export default function Footer() {
  return (
    <footer className="w-full h-14 flex items-center justify-center bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 text-zinc-500 text-sm">
      <span>&copy; {new Date().getFullYear()} SmartResume. All rights reserved.</span>
    </footer>
  );
}
