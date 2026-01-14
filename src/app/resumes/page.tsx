const resumes = [
  {
    id: '1',
    title: 'Software Engineer Resume',
    role: 'Software Engineer',
    updatedAt: '2026-01-14',
  },
  {
    id: '2',
    title: 'QA Engineer Resume',
    role: 'QA Engineer',
    updatedAt: '2026-01-10',
  },
];

export default function ResumesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Resumes</h1>
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
            <tr key={resume.id} className="border-b border-zinc-100 dark:border-zinc-800">
              <td className="p-2">{resume.title}</td>
              <td className="p-2">{resume.role}</td>
              <td className="p-2">{resume.updatedAt}</td>
              <td className="p-2">
                <button className="text-blue-600 hover:underline mr-2">Edit</button>
                <button className="text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
