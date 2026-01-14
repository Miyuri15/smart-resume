export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="p-4 bg-white dark:bg-zinc-900 rounded shadow max-w-md">
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input className="w-full p-2 border rounded bg-zinc-100 dark:bg-zinc-800" value="John Doe" readOnly />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input className="w-full p-2 border rounded bg-zinc-100 dark:bg-zinc-800" value="john.doe@gmail.com" readOnly />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Update Profile</button>
      </div>
    </div>
  );
}
