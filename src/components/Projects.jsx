import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaReact,
  FaCouch,
  FaDatabase,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiAppwrite,
  SiThreedotjs,
} from 'react-icons/si';
import Utube from '../assets/HomeDark.jpeg';
import Todo from '../assets/Todo.jpeg';
import Blogify from '../assets/Blogify.jpeg';
import ShopEasy from '../assets/ShopEasy.jpeg';
import KanbanBoard from '../assets/kanban-board.jpeg';
import StayFinder from '../assets/StayFinder.png';
import SolarSystem from '../assets/SolorSystem.jpeg';

const projects = [
  {
    id: 0,
    title: 'SmartTodo',
    status: 'In Progress',
    description:
      'A modern collaborative Kanban-based task management app with group boards, member permissions, and activity logs.',
    image: KanbanBoard,
    github: 'https://github.com/GuptaShubham-11/SmartTodo',
    live: 'https://kanban-smart-todo.vercel.app',
    technologies: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-400" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="text-sky-400" />,
      },
    ],
  },
  {
    id: -1,
    title: 'StayFinder',
    status: 'Done',
    description:
      'A full-featured stay booking platform with listing, filtering, wishlisting, and booking flow built using MERN stack.',
    image: StayFinder,
    github: 'https://github.com/GuptaShubham-11/StayFinder',
    live: 'https://stay-finder-xi.vercel.app',
    technologies: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-400" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="text-sky-400" />,
      },
    ],
  },
  {
    id: 1,
    title: 'Utube',
    status: 'Done',
    description:
      'A modern and interactive video streaming platform built using the MERN stack.',
    image: Utube,
    github: 'https://github.com/GuptaShubham-11/utube',
    live: 'https://utubevideos.vercel.app',
    technologies: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-400" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    ],
  },
  {
    id: 2,
    title: 'Todo',
    status: 'Done',
    description:
      'A full-stack to-do app with JWT authentication and a modern UI.',
    image: Todo,
    github: 'https://github.com/GuptaShubham-11/Todo',
    live: 'https://todo-coral-psi.vercel.app',
    technologies: [
      { name: 'React', icon: <FaReact className="text-blue-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-400" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
    ],
  },
  {
    id: 3,
    title: 'ShopEasy',
    status: 'Done',
    description:
      'A dynamic e-commerce platform powered by React with Fake Store Api.',
    image: ShopEasy,
    github: 'https://github.com/GuptaShubham-11/ShopEasy',
    live: 'https://shop-easy-alpha.vercel.app',
    technologies: [
      { name: 'React', icon: <FaReact className="text-blue" /> },
      { name: 'CSS', icon: <SiTailwindcss className="text-sky-400" /> },
      { name: 'Context Api', icon: <FaCouch className="text-green-400" /> },
      {
        name: 'Fake Store Api',
        icon: <FaDatabase className="text-gray-400" />,
      },
    ],
  },
  {
    id: 4,
    title: '3D SolorSystem',
    status: 'Done',
    description: 'A 3D solar system built using Three.js and React.',
    image: SolarSystem,
    github: 'https://github.com/GuptaShubham-11/SolarSystem',
    live: 'https://solar-system-liart-rho.vercel.app',
    technologies: [
      { name: 'React', icon: <FaReact className="text-blue" /> },
      { name: 'Three.js', icon: <SiThreedotjs className="text-gray-400" /> },
    ],
  },
  {
    id: 5,
    title: 'Blogify',
    status: 'Issue',
    description: 'A dynamic blogging platform powered by React and Appwrite.',
    image: Blogify,
    github: 'https://github.com/GuptaShubham-11/Blogify',
    live: 'https://blogify-zeta-mauve.vercel.app',
    technologies: [
      { name: 'React', icon: <FaReact className="text-blue" /> },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      { name: 'Appwrite', icon: <SiAppwrite className="text-red-500" /> },
    ],
  },
];

const Card = ({ title, status, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.98 }}
      className="relative cursor-pointer group"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5eaaa8] to-[#f25c54] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />

      <div className="relative bg-white dark:bg-[#1f1f1f] rounded-2xl p-6 h-full border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-[#2e2e2e] dark:text-[#e8e6e3]">
            {title}
          </h3>
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              status === 'Done'
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
            }`}
          >
            {status}
          </span>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-[#5eaaa8] font-medium">
            View Project
          </span>
          <div className="w-8 h-8 rounded-full bg-[#5eaaa8] flex items-center justify-center">
            <motion.div
              className="text-white"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              &rarr;
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5eaaa8] to-[#f25c54] opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          className="relative bg-white dark:bg-[#151515] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-6 right-6 z-20 text-gray-500 hover:text-[#f25c54] transition-colors"
          >
            <FaTimes className="text-2xl" />
          </button>

          <div className="relative h-72 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#151515] via-transparent to-transparent" />
          </div>

          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold text-[#2e2e2e] dark:text-[#e8e6e3]">
                  {project.title}
                </h2>
                <div className="flex items-center gap-4 mt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#5eaaa8] hover:text-[#f25c54] transition-colors"
                  >
                    <FaGithub /> Source Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#5eaaa8] hover:text-[#f25c54] transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
              <span
                className={`text-sm px-3 py-1.5 rounded-full ${
                  project.status === 'Done'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {project.description}
            </p>

            <div>
              <h3 className="text-xl font-semibold text-[#2e2e2e] dark:text-[#e8e6e3] mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-[#2a2a2a] text-gray-800 dark:text-gray-200"
                  >
                    {tech.icon}
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="project" className="px-4 mt-20 max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#2e2e2e] dark:text-[#e8e6e3] mb-4"
        >
          Project Showcase
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            status={project.status}
            onClick={() => setActiveProject(project)}
          />
        ))}
      </div>

      <Modal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};

export default Projects;
