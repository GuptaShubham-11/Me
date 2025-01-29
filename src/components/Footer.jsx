import { FaGithub, FaLinkedin, FaTwitter, } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

export default function Footer() {
    return (
        <footer className="p-8 bg-backgroundLight-500 dark:bg-backgroundDark-500 text-textLight-500 dark:text-textDark-500 transition-all duration-300 ease-in-out">
            <div className="container mx-auto flex flex-col items-center justify-between md:flex-row text-center md:text-left">

                <div className="text-center text-lg font-medium text-textLight-500 dark:text-textDark-500">
                    <p>Designed with ❤️ by Shubham Dev</p>
                </div>

                {/* Social Media Icons */}
                <div className="flex space-x-6 mb-6 md:mb-0">
                    <a
                        href="https://github.com/GuptaShubham-11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textLight-500 dark:text-textDark-500 hover:text-accentLight-500 dark:hover:text-secondaryDark-500 transition-colors duration-300"
                    >
                        <FaGithub size={28} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/guptashubham11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textLight-500 dark:text-textDark-500 hover:text-accentLight-500 dark:hover:text-secondaryDark-500 transition-colors duration-300"
                    >
                        <FaLinkedin size={28} />
                    </a>
                    <a
                        href="https://x.com/GuptaShubham91"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textLight-500 dark:text-textDark-500 hover:text-accentLight-500 dark:hover:text-secondaryDark-500 transition-colors duration-300"
                    >
                        <FaTwitter size={28} />
                    </a>
                    <a
                        href="https://leetcode.com/u/GuptaShubham-11/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-textLight-500 dark:text-textDark-500 hover:text-accentLight-500 dark:hover:text-secondaryDark-500 transition-colors duration-300"
                    >
                        <SiLeetcode size={28} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
