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
  FaChartLine,
  FaBusinessTime,
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
import { BsBack, BsCode, BsFront } from 'react-icons/bs';

const projects = [
  {
    id: 0,
    title: 'SmartTodo',
    type: 'Full Stack',
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
    type: 'Full Stack',
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
    type: 'Full Stack',
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
    type: 'Backend',
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
    type: 'Frontend',
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
    type: 'Frontend',
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
    type: 'Frontend',
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

const Card = ({ title, type, onClick, description, technologies }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="relative cursor-pointer group bg-white dark:bg-[#1f1f1f] rounded-xl p-5 h-full border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-[#2e2e2e] dark:text-[#e8e6e3]">
          {title}
        </h3>
        <div className="flex flex-col items-end gap-2">
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              type === 'Backend'
                ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                : type === 'Frontend'
                  ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                  : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
            }`}
          >
            {type}
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.slice(0, 3).map((tech, idx) => (
          <div
            key={idx}
            className="text-xs flex items-center gap-1 px-2 py-1 rounded-md bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300"
          >
            {tech.icon}
            {tech.name}
          </div>
        ))}
        {technologies.length > 3 && (
          <div className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300">
            +{technologies.length - 3}
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-[#5eaaa8] font-medium">View details</span>
        <motion.div
          className="w-6 h-6 rounded-full bg-[#5eaaa8] flex items-center justify-center text-white text-xs"
          animate={{ x: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          →
        </motion.div>
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
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white dark:bg-[#151515] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 text-gray-500 hover:text-[#f25c54] transition-colors cursor-pointer"
          >
            <FaTimes className="text-xl" />
          </button>

          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#151515] via-transparent to-transparent" />
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-[#2e2e2e] dark:text-[#e8e6e3]">
                  {project.title}
                </h2>
                <div className="flex items-center gap-4 mt-2">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      project.type === 'Business'
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                        : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                    }`}
                  >
                    {project.type}
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#5eaaa8] hover:text-[#f25c54] transition-colors"
                  >
                    <FaGithub /> Code
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
                className={`text-xs px-2 py-1 rounded-full ${
                  project.status === 'Done'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                    : project.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                }`}
              >
                {project.status}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {project.description}
            </p>

            <div>
              <h3 className="text-lg font-semibold text-[#2e2e2e] dark:text-[#e8e6e3] mb-3">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-100 dark:bg-[#2a2a2a] text-gray-800 dark:text-gray-200 text-sm"
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
  const [typeFilter, setTypeFilter] = useState('Full Stack');

  const filteredProjects = projects.filter((project) => {
    return project.type === typeFilter;
  });

  return (
    <section
      id="project"
      className="px-4 sm:px-6 lg:px-8 py-20 max-w-5xl xl:max-w-7xl mx-auto"
    >
      <div className="text-center mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#2e2e2e] dark:text-[#e8e6e3] mb-2"
        >
          My Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg"
        >
          Here are some of the projects I've worked on.
        </motion.p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-col gap-6 mb-8">
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mr-4 text-sm font-medium text-gray-700 dark:text-gray-300">
            <FaChartLine className="text-orange-500" />
            <span>Project Type:</span>
          </div>
          {['Frontend', 'Backend', 'Full Stack'].map((type) => (
            <button
              key={type}
              onClick={() => setTypeFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                typeFilter === type
                  ? type === 'Backend'
                    ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                    : type === 'Frontend'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                      : 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
                  : 'bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#333]'
              }`}
            >
              {type === 'Frontend' ? (
                <BsFront />
              ) : type === 'Backend' ? (
                <BsBack />
              ) : (
                <BsCode />
              )}
              {type}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                title={project.title}
                type={project.type}
                description={project.description}
                technologies={project.technologies}
                onClick={() => setActiveProject(project)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-gray-500 dark:text-gray-400 w-full"
        >
          No projects found with the selected filters.
        </motion.div>
      )}

      <Modal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
};

export default Projects;
