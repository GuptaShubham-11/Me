import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiAppwrite, SiExpress } from "react-icons/si";
import Utube from "../assets/HomeDark.jpeg";
import Todo from "../assets/Todo.jpeg";
import Blogify from "../assets/Blogify.jpeg";

const projects = [
    {
        id: 1,
        title: "Utube",
        description:
            "A modern and interactive video streaming platform, built using MERN stack.",
        image: Utube,
        github: "https://github.com/GuptaShubham-11/utube",
        live: "https://utubevideos.vercel.app",
        technologies: [
            { name: "React", icon: <FaReact className="text-blue-400" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
            { name: "Express", icon: <SiExpress className="text-gray-400" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        ],
    },
    {
        id: 2,
        title: "Todo",
        description:
            "A feature-rich full-stack to-do application with an intuitive UI, built using the MERN stack.",
        image: Todo,
        github: "https://github.com/GuptaShubham-11/Todo",
        live: "https://todo-coral-psi.vercel.app",
        technologies: [
            { name: "React", icon: <FaReact className="text-blue-400" /> },
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
            { name: "Express", icon: <SiExpress className="text-gray-400" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        ],
    },
    {
        id: 3,
        title: "Blogify",
        description:
            "A dynamic blogging platform that allows users to create and share posts, powered by React and Appwrite.",
        image: Blogify,
        github: "https://github.com/GuptaShubham-11/Blogify",
        live: "https://blogify-zeta-mauve.vercel.app",
        technologies: [
            { name: "React", icon: <FaReact className="text-blue-400" /> },
            { name: "Appwrite", icon: <SiAppwrite className="text-red-500" /> },
        ],
    },
];

export default function Projects() {
    return (
        <section id="project" className="py-16 px-6 md:px-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-textLight dark:text-textDark">
                Projects
            </h2>

            {/* Project Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="relative bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
                        whileHover={{ scale: 1.05 }}
                    >
                        {/* Project Image */}
                        <div className="relative h-60 overflow-hidden rounded-t-xl">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 hover:opacity-50 transition-opacity duration-300" />
                        </div>

                        {/* Project Info */}
                        <div className="p-6 flex flex-col min-h-[200px]">
                            <h3 className="text-2xl font-semibold text-textLight dark:text-textDark mb-3">
                                {project.title}
                            </h3>
                            <p className="text-base text-secondaryLight dark:text-secondaryDark mb-6">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm font-medium"
                                    >
                                        {tech.icon} {tech.name}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4 mt-auto">
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2 rounded-lg bg-gradient-to-r from-green-500 to-green-400 text-white font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    Code
                                </motion.a>
                                <motion.a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 text-white font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    Live
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
