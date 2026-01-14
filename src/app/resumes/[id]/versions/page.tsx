const versions = [
  {
    id: 'v1',
    date: '2026-01-10',
    score: 85,
    summary: 'Initial version',
  },
  {
    id: 'v2',
    date: '2026-01-14',
    score: 90,
    summary: 'Added new experience section',
  },
];

export default function ResumeVersionsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Resume Versions</h1>
      <table className="w-full bg-white dark:bg-zinc-900 rounded shadow">
        <thead>
          <tr className="border-b border-zinc-200 dark:border-zinc-800">
            <th className="p-2 text-left">Version</th>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">AI Score</th>
            <th className="p-2 text-left">Summary</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {versions.map((v) => (
            <tr key={v.id} className="border-b border-zinc-100 dark:border-zinc-800">
              <td className="p-2">{v.id}</td>
              <td className="p-2">{v.date}</td>
              <td className="p-2">{v.score}</td>
              <td className="p-2">{v.summary}</td>
              <td className="p-2">
                <button className="text-blue-600 hover:underline mr-2">View</button>
                <button className="text-green-600 hover:underline mr-2">Restore</button>
                <button className="text-zinc-500 hover:underline">Compare</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
