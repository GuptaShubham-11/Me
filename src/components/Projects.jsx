import { motion } from "framer-motion";
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
    },
    {
        id: 2,
        title: "Todo",
        description:
            "A feature-rich full-stack to-do application with an intuitive UI, built using the MERN stack.",
        image: Todo,
        github: "https://github.com/GuptaShubham-11/Todo",
        live: "https://todo-coral-psi.vercel.app",
    },
    {
        id: 3,
        title: "Blogify",
        description:
            "A dynamic blogging platform that allows users to create and share posts, powered by React and Appwrite.",
        image: Blogify,
        github: "https://github.com/GuptaShubham-11/Blogify",
        live: "https://blogify-zeta-mauve.vercel.app",
    },
];

export default function Projects() {
    return (
        <section id="project" className="py-16 px-6 md:px-16 bg-backgroundLight-500 dark:bg-backgroundDark-500">
            <h2 className="text-4xl font-bold text-center mb-12 text-textLight dark:text-textDark">
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="relative bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        {/* Project Image */}
                        <div className="relative h-56 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        {/* Project Info */}
                        <div className="p-6 flex flex-col">
                            <h3 className="text-2xl font-semibold text-textLight dark:text-textDark mb-3">
                                {project.title}
                            </h3>
                            <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
                                {project.description}
                            </p>

                            {/* Buttons */}
                            <div className="flex justify-between items-center">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2 rounded-lg bg-primaryLight-500 text-white font-medium shadow-md hover:bg-primaryDark-500 transition-all"
                                >
                                    Code
                                </a>
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-2 rounded-lg bg-accentLight-500 dark:bg-secondaryDark-500 text-white font-medium shadow-md hover:bg-accentDark-500 transition-all"
                                >
                                    Live
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}