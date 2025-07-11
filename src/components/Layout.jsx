import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';

export default function Layout() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col transition-all ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
