export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white dark:bg-zinc-900 rounded shadow">
          <h2 className="font-semibold text-lg mb-2">Welcome, John Doe!</h2>
          <p className="text-zinc-600 dark:text-zinc-300">You have <b>2</b> resumes and <b>5</b> AI feedback reports.</p>
        </div>
        <div className="p-4 bg-white dark:bg-zinc-900 rounded shadow">
          <h2 className="font-semibold text-lg mb-2">Quick Actions</h2>
          <ul className="list-disc ml-5 text-zinc-600 dark:text-zinc-300">
            <li>Create a new resume</li>
            <li>View AI suggestions</li>
            <li>Export PDF</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
