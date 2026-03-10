export default function Sidebar() {
 return (
    <aside
      className="w-64 bg-gray-800 text-white min-h-screen p-4"
      aria-label="Sidebar"
    >
      <ul className="space-y-4">
        <li>
          <button className="hover:text-blue-400">Dashboard</button>
        </li>

        <li>
          <button className="hover:text-blue-400">Analytics</button>
        </li>

        <li>
          <button className="hover:text-blue-400">Settings</button>
        </li>
      </ul>
    </aside>
  );
}