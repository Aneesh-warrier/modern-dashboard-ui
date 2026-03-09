export default function Sidebar() {
  return (
    <div className="hidden md:block w-64 bg-gray-800 text-white min-h-screen p-4">
      <ul className="space-y-4">
        <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-400 cursor-pointer">Analytics</li>
        <li className="hover:text-blue-400 cursor-pointer">Settings</li>
      </ul>
    </div>
  )
}