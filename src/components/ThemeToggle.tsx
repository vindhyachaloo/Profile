import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="p-3 rounded-full bg-white dark:bg-dark-700 shadow-lg text-dark-800 dark:text-light-100 focus:outline-none focus:ring-2 focus:ring-primary-600"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;