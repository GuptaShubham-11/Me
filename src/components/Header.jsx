import { ThemeToggle } from '.';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

export default function Header() {
  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 px-4 py-3 sm:px-6 sm:py-4
        flex justify-between items-center backdrop-blur-lg shadow-md bg-background text-text bg-opacity-90"
      >
        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl leading-tight flex items-center"
        >
          <span className="text-primaryLight font-bold">G</span>{' '}
          <span className=" text-accentLight font-bold">S</span>
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
            className="text-text hover:text-accentLight dark:hover:text-accentDark transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/guptashubham11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accentLight dark:hover:text-accentDark transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://leetcode.com/GuptaShubham-11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accentLight dark:hover:text-accentDark transition-colors"
          >
            <SiLeetcode size={20} />
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />
        </motion.div>
      </header>
    </>
  );
}
