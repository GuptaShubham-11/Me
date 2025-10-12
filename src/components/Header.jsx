import { ThemeToggle } from '.';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg shadow-md bg-background text-textLight dark:text-textDark bg-opacity-90">
      <div className="max-w-7xl mx-auto flex justify-between items-center W  px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300">
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl leading-tight flex items-center"
        >
          <span className="text-primaryLight font-bold">G</span>{' '}
          <span className="text-accentLight font-bold">S</span>
        </motion.h1>

        {/* Right section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center space-x-4"
        >
          {/* Social Icons */}
          <a
            href="https://github.com/GuptaShubham-11"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-accentLight dark:hover:text-primaryLight transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/guptashubham11"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-accentLight dark:hover:text-primaryLight transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://leetcode.com/u/GuptaShubham-11/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="hover:text-accentLight dark:hover:text-primaryLight transition-colors duration-300"
          >
            <SiLeetcode size={24} />
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </motion.div>
      </div>
    </header>
  );
}
