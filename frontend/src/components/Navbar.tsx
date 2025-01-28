import { Link } from 'react-router-dom';
import { Sun, Moon, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-rose-500" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Jarurat Care
            </span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              to="/campaigns"
              className="text-gray-700 dark:text-gray-200 hover:text-rose-500 dark:hover:text-rose-400"
            >
              Campaigns
            </Link>
            <Link
              to="/donations"
              className="text-gray-700 dark:text-gray-200 hover:text-rose-500 dark:hover:text-rose-400"
            >
              Donations
            </Link>
            <Link
              to="/locations"
              className="text-gray-700 dark:text-gray-200 hover:text-rose-500 dark:hover:text-rose-400"
            >
              Locations
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}