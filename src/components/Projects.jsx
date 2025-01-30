import { motion } from "framer-motion";
import Portfolio from "../assets/portfolio.jpeg";
import Todo from "../assets/Todo.jpeg";
import Blogify from "../assets/Blogify.jpeg";

const projects = [
    {
        id: 2,
        title: "Portfolio",
        description:
            "A sleek and modern personal portfolio built with React, Tailwind CSS 4.0, and Framer Motion for animation.",
        image: Portfolio,
        github: "https://github.com/GuptaShubham-11/Me",
        live: "https://gupta-shubham-11.vercel.app",
    },
    {
        id: 2,
        title: "Todo",
        description:
            "A full-stack todo app built with the MERN stack. A good UI and responsive design.",
        image: Todo,
        github: "https://github.com/GuptaShubham-11/Todo",
        live: "https://todo-coral-psi.vercel.app",
    },
    {
        id: 3,
        title: "Blogify",
        description:
            "An interactive blog app where users can share their thoughts built with React & Appwrite[Backend-as-service].",
        image: Blogify,
        github: "https://github.com/GuptaShubham-11/Blogify",
        live: "https://blogify-zeta-mauve.vercel.app",
    },
];

export default function Projects() {
    return (
        <section id="project" className="py-16 px-4 sm:px-8 md:px-16 bg-backgroundLight-500 dark:bg-backgroundDark-500">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-textLight-500 dark:text-textDark-500">
                My Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg sm:shadow-2xl overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105"
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        {/* Project Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 sm:h-56 md:h-64 object-cover"
                        />

                        {/* Project Info */}
                        <div className="p-4 sm:p-6">
                            <h3 className="text-xl sm:text-2xl font-extrabold mb-2 sm:mb-3 dark:text-textDark-500 text-textLight-500">
                                {project.title}
                            </h3>
                            <p className="text-sm sm:text-base font-medium text-textLight-500 dark:text-textDark-500 mb-4 sm:mb-6">
                                {project.description}
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                <a
                                    href={project.github}
                                    className="w-full sm:w-auto text-center px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-primaryLight-500 text-backgroundLight-500 font-semibold shadow-md hover:bg-primaryDark-500 hover:shadow-lg transition-all"
                                >
                                    Code
                                </a>
                                <a
                                    href={project.live}
                                    className="w-full sm:w-auto text-center px-4 py-2 sm:px-6 sm:py-3 rounded-lg bg-accentLight-500 dark:bg-secondaryDark-500 text-backgroundLight-500 font-semibold shadow-md hover:bg-accentDark-500 hover:shadow-lg transition-all"
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
