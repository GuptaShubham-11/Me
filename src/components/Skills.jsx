import { motion } from "framer-motion";
import {
    FaReact, FaNodeJs, FaGithub, FaGitAlt,
    FaHtml5, FaCss3Alt, FaJs
} from "react-icons/fa";
import {
    SiMongodb, SiRedux, SiExpress,
    SiTailwindcss, SiVite
} from "react-icons/si";

const skills = [
    { name: "React.js", icon: <FaReact />, gradient: "from-[#2563eb] to-[#1e40af]" },
    { name: "Redux", icon: <SiRedux />, gradient: "from-[#6b46c1] to-[#553c9a]" },
    { name: "HTML5", icon: <FaHtml5 />, gradient: "from-[#f97316] to-[#c2410c]" },
    { name: "CSS3", icon: <FaCss3Alt />, gradient: "from-[#1d4ed8] to-[#1e3a8a]" },
    { name: "JavaScript", icon: <FaJs />, gradient: "from-[#eab308] to-[#ca8a04]" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, gradient: "from-[#0ea5e9] to-[#0891b2]" },
    { name: "Vite", icon: <SiVite />, gradient: "from-[#7c3aed] to-[#6d28d9]" },
    { name: "Node.js", icon: <FaNodeJs />, gradient: "from-[#16a34a] to-[#15803d]" },
    { name: "Express.js", icon: <SiExpress />, gradient: "from-[#374151] to-[#1f2937]" },
    { name: "MongoDB", icon: <SiMongodb />, gradient: "from-[#10b981] to-[#059669]" },
    { name: "Git", icon: <FaGitAlt />, gradient: "from-[#dc2626] to-[#b91c1c]" },
    { name: "GitHub", icon: <FaGithub />, gradient: "from-[#18181b] to-[#3f3f46]" },
];

export default function Skills() {
    return (
        <section id="skill" className="py-16 px-6 md:px-16">
            <motion.h2
                className="text-4xl font-bold text-center mb-12 text-textLight dark:text-textDark"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                My Skills
            </motion.h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className={`p-4 rounded-xl shadow-lg text-white flex flex-col items-center justify-center bg-gradient-to-r ${skill.gradient} transition-transform duration-200 hover:scale-105`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.05 }}
                        aria-label={skill.name}
                    >
                        <motion.div
                            className="text-4xl mb-3"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                        >
                            {skill.icon}
                        </motion.div>
                        <h3 className="text-sm font-semibold">{skill.name}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
