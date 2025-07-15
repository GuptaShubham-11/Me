import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/themeSlice.js';
import { useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    document.documentElement.className = theme;
    document.body.className = theme;
  }, [theme]);

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full
        bg-accentLight text-textLight dark:text-textDark
        transition-all duration-300 hover:scale-105 shadow-sm"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
