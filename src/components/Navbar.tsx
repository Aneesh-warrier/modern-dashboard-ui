import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between">
      <h1 className="font-bold text-lg">Modern Dashboard</h1>

      <button
        onClick={toggleDark}
        className="bg-gray-700 px-3 py-1 rounded"
      >
        Toggle Dark
      </button>
    </nav>
  );
}