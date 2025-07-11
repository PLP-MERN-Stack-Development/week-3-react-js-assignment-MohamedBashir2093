import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-600 text-white px-8 py-4 flex items-center justify-between">
      {/* Left: Project title */}
      <div className="text-xl font-bold">PLP Project</div>

      {/* Center: Navigation links */}
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/tasks" className="hover:underline">
            Tasks
          </Link>
        </li>
        <li>
          <Link to="/posts" className="hover:underline">
            Posts
          </Link>
        </li>
      </ul>

      {/* Right: Emoji toggle button */}
      <button onClick={toggleTheme} className="text-xl hover:scale-110 transition-transform">
        {darkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  );
}
