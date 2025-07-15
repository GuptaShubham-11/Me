import { motion } from 'framer-motion';
import profilePic from '../assets/ShubhamGupta.jpeg';

// Emoji component with animation
const HiEmoji = () => (
  <motion.div
    animate={{
      rotate: [0, 10, 0, -10, 0],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'reverse',
    }}
    className="text-4xl"
  >
    👋
  </motion.div>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4 mt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#5eaaa8]/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-[#f25c54]/10 blur-3xl animate-pulse"></div>

        <motion.div
          className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full bg-[#5eaaa8]"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-[#f25c54]"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full bg-white/80 dark:bg-[#1f1f1f]/80 backdrop-blur-sm shadow-sm">
            <HiEmoji />
            <span className="text-sm font-medium text-[#5eaaa8]">
              Welcome to my portfolio!
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          >
            <span className="block text-textLight dark:text-textDark">
              I'm Shubham Gupta,
            </span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#5eaaa8] to-[#f25c54]">
              Full Stack Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8"
          >
            I specialize in creating clean, modern, and scalable web
            applications.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={() =>
                document
                  .getElementById('project')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3 rounded cursor-pointer bg-gradient-to-r from-[#5eaaa8] to-[#5eaaa8] text-textLight dark:text-textDark font-semibold shadow-lg hover:shadow-xl transition-all"
              whileHover={{
                scale: 1.03,
                background: 'linear-gradient(to right, #5eaaa8, #4c9e9c)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              View My Projects
            </motion.button>

            <motion.button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-8 py-3 rounded cursor-pointer bg-accentLight dark:bg-[#1f1f1f] dark:border-[#5eaaa8] text-textLight dark:text-textDark font-semibold shadow-sm hover:shadow-md transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right column - Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#5eaaa8]/20 blur-xl z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-[#f25c54]/20 blur-xl z-0"></div>

            {/* Profile image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-white shadow-2xl z-10">
              <motion.img
                src={profilePic}
                alt="Shubham Gupta - Full Stack Developer"
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.7 }}
                whileHover={{ scale: 1.03 }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute top-0 -right-4 bg-gradient-to-r from-[#5eaaa8] to-[#f25c54] text-white px-5 py-2 rounded-full font-bold shadow-lg z-20"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <span className="block text-sm">6+ Projects</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <span className="text-sm text-gray-600 mb-2">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#5eaaa8]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
