import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCouch } from "react-icons/fa";
import { SiMongodb, SiAppwrite, SiExpress, SiTailwindcss } from "react-icons/si";
import Utube from "../assets/HomeDark.jpeg";
import Todo from "../assets/Todo.jpeg";
import Blogify from "../assets/Blogify.jpeg";
import ShopEasy from "../assets/ShopEasy.jpeg";

const projects = [
    {
        id: 1,
        title: "Utube",
        description: "A modern and interactive video streaming platform built using the MERN stack.",
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
        description: "A full-stack to-do app with JWT authentication and a modern UI.",
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
        title: "ShopEasy",
        description: "A dynamic e-commerce platform powered by React with Fake Store Api.",
        image: ShopEasy,
        github: "https://github.com/GuptaShubham-11/ShopEasy",
        live: "https://shop-easy-alpha.vercel.app",
        technologies: [
            { name: "React", icon: <FaReact className="text-blue-500" /> },
            { name: "CSS", icon: <SiTailwindcss className="text-sky-400" /> },
            { name: "Context Api", icon: <FaCouch className="text-green-400" /> },
            { name: "Fake Store Api", icon: <FaDatabase className="text-gray-400" /> }
        ],
    },
    {
        id: 4,
        title: "Blogify",
        description: "A dynamic blogging platform powered by React and Appwrite.",
        image: Blogify,
        github: "https://github.com/GuptaShubham-11/Blogify",
        live: "https://blogify-zeta-mauve.vercel.app",
        technologies: [
            { name: "React", icon: <FaReact className="text-blue-500" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
            { name: "Appwrite", icon: <SiAppwrite className="text-red-500" /> },
        ],
    },
];

export default function Projects() {
    return (
        <section id="project" className="py-16 px-4 md:px-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-textLight dark:text-textDark">
                Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl flex flex-col"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition duration-500 transform hover:scale-110"
                            />
                        </div>

                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-xl sm:text-2xl font-semibold text-textLight dark:text-textDark mb-2">
                                {project.title}
                            </h3>
                            <p className="text-sm sm:text-base text-secondaryLight dark:text-secondaryDark mb-4">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-xs sm:text-sm font-medium"
                                    >
                                        {tech.icon} {tech.name}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-3 mt-auto">
                                <motion.a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 px-4 py-2 rounded-lg bg-green-500 text-white text-center font-medium shadow-md hover:scale-105 hover:shadow-lg"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Code
                                </motion.a>
                                <motion.a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 px-4 py-2 rounded-lg bg-blue-500 text-white text-center font-medium shadow-md hover:scale-105 hover:shadow-lg"
                                    whileHover={{ scale: 1.05 }}
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
