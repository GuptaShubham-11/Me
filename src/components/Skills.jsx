import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiMongodb, SiRedux, SiExpress, SiTailwindcss, SiVite } from "react-icons/si";

const skills = [
    { name: "React.js", icon: <FaReact />, color: "bg-primaryLight-500 dark:bg-primaryDark-500" },
    { name: "Redux", icon: <SiRedux />, color: "bg-accentLight-500 dark:bg-accentDark-500" },
    { name: "HTML5", icon: <FaHtml5 />, color: "bg-primaryLight-500 dark:bg-primaryDark-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "bg-secondaryDark-500 dark:bg-secondaryDark-500" },
    { name: "JavaScript", icon: <FaJs />, color: "bg-accentLight-500 dark:bg-accentDark-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "bg-primaryLight-500 dark:bg-primaryDark-500" },
    { name: "Vite", icon: <SiVite />, color: "bg-secondaryDark-500 dark:bg-secondaryDark-500" },
    { name: "Node.js", icon: <FaNodeJs />, color: "bg-accentLight-500 dark:bg-accentDark-500" },
    { name: "Express.js", icon: <SiExpress />, color: "bg-primaryLight-500 dark:bg-primaryDark-500" },
    { name: "MongoDB", icon: <SiMongodb />, color: "bg-accentLight-500 dark:bg-accentDark-500" },
    { name: "Git", icon: <FaGitAlt />, color: "bg-primaryLight-500 dark:bg-primaryDark-500" },
    { name: "GitHub", icon: <FaGithub />, color: "bg-secondaryDark-500 dark:bg-secondaryDark-500" },
];

export default function Skills() {
    return (
        <section id="skill" className="py-16 px-4 sm:px-8 md:px-16 bg-backgroundLight-500 dark:bg-backgroundDark-500">
            <motion.h2
                className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-textLight-500 dark:text-textDark-500"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            >
                My Skills
            </motion.h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className={`${skill.color} p-4 sm:p-6 rounded-xl shadow-md sm:shadow-lg text-textLight-500 dark:text-textDark-500 flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 sm:hover:scale-110 sm:hover:rotate-5 hover:bg-opacity-90`}
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeInOut" }}
                    >
                        <motion.div
                            className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4"
                            whileHover={{
                                rotate: 360,
                                scale: 1.2,
                                transition: { duration: 1.2, type: "spring", stiffness: 200 },
                            }}
                        >
                            {skill.icon}
                        </motion.div>
                        <h3 className="text-sm sm:text-lg font-semibold">{skill.name}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
