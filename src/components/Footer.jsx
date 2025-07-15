import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark transition-all duration-300 px-6 md:px-12 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        {/* Footer Text */}
        <p className="text-center md:text-left text-base sm:text-lg font-medium">
          Designed with{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          by Shubham Dev
        </p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-end gap-6">
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
            href="https://x.com/GuptaShubham91"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter (X)"
            className="hover:text-accentLight dark:hover:text-primaryLight transition-colors duration-300"
          >
            <FaTwitter size={24} />
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
        </div>
      </div>
    </footer>
  );
}
