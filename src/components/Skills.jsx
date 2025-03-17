import { motion } from "framer-motion";
import {
    FaReact, FaNodeJs, FaGithub, FaGitAlt,
    FaHtml5, FaCss3Alt, FaJs
} from "react-icons/fa";
import {
    SiMongodb, SiRedux, SiExpress,
    SiTailwindcss, SiVite
} from "react-icons/si";

const categories = [
    {
        title: "Frontend",
        colorScheme: "from-blue-600 to-blue-400", // Unified category gradient
        skills: [
            {
                name: "React.js",
                icon: <FaReact />,
                gradient: "from-[#61DAFB] to-[#2B9EB3]", // React's brand blue
                textColor: "text-[#2B3A4A]" // Dark blue for contrast
            },
            {
                name: "Redux",
                icon: <SiRedux />,
                gradient: "from-[#764ABC] to-[#5B34A1]", // Purple gradient
                textColor: "text-white"
            },
            {
                name: "HTML5",
                icon: <FaHtml5 />,
                gradient: "from-[#E34F26] to-[#D04015]", // Orange gradient
                textColor: "text-white"
            },
            {
                name: "CSS3",
                icon: <FaCss3Alt />,
                gradient: "from-[#1572B6] to-[#0F5A8C]", // Blue gradient
                textColor: "text-white"
            },
            {
                name: "JavaScript",
                icon: <FaJs />,
                gradient: "from-[#F7DF1E] to-[#D8C117]", // Yellow gradient
                textColor: "text-[#2B3A4A]"
            },
            {
                name: "Tailwind CSS",
                icon: <SiTailwindcss />,
                gradient: "from-[#38B2AC] to-[#2C8C87]", // Teal gradient
                textColor: "text-white"
            },
            {
                name: "Vite",
                icon: <SiVite />,
                gradient: "from-[#646CFF] to-[#4A52CC]", // Purple-blue gradient
                textColor: "text-white"
            },
        ],
    },
    {
        title: "Backend",
        colorScheme: "from-green-600 to-green-400",
        skills: [
            {
                name: "Node.js",
                icon: <FaNodeJs />,
                gradient: "from-[#83CD29] to-[#6BA821]", // Node green
                textColor: "text-[#2B3A4A]"
            },
            {
                name: "Express.js",
                icon: <SiExpress />,
                gradient: "from-[#3A3A3A] to-[#2B2B2B]", // Dark gray
                textColor: "text-white"
            },
            {
                name: "MongoDB",
                icon: <SiMongodb />,
                gradient: "from-[#77DD77] to-[#5CB85C]", // Mongo green
                textColor: "text-[#2B3A4A]"
            },
        ],
    },
    {
        title: "Tools",
        colorScheme: "from-purple-600 to-purple-400",
        skills: [
            {
                name: "Git",
                icon: <FaGitAlt />,
                gradient: "from-[#F14E32] to-[#D83B1F]", // Git orange
                textColor: "text-white"
            },
            {
                name: "GitHub",
                icon: <FaGithub />,
                gradient: "from-[#181717] to-[#2B2B2B]", // GitHub black
                textColor: "text-white"
            },
        ],
    },
];




export default function Skills() {
    return (
        <section id="skills" className="py-16 px-6 md:px-16">
            <motion.h2
                className="text-4xl font-bold text-center mb-12 text-textLight dark:text-textDark"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                My Skills
            </motion.h2>

            {/* Skills Categories */}
            <div className="space-y-12">
                {categories.map((category, idx) => (
                    <div key={idx}>
                        <h3 className="text-2xl font-semibold text-center text-primaryLight dark:text-primaryDark mb-6">
                            {category.title}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                            {category.skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className={`p-5 rounded-2xl shadow-lg text-white flex flex-col items-center justify-center bg-gradient-to-r ${skill.gradient} backdrop-blur-md bg-opacity-90 border border-white/20 transition-transform duration-300 hover:scale-105 hover:border-white/50`}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.05 }}
                                    whileHover={{ y: -5 }}
                                    aria-label={skill.name}
                                >
                                    <motion.div
                                        className="text-4xl mb-3"
                                        style={{
                                            color: skill.color,
                                            textShadow: "0px 0px 6px rgba(255,255,255,0.8)",
                                            filter: "drop-shadow(0px 0px 10px rgba(255,255,255,0.6))",
                                        }}
                                        whileHover={{ scale: 1.2 }}
                                        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                                    >
                                        {skill.icon}
                                    </motion.div>
                                    <h3 className="text-sm font-semibold">{skill.name}</h3>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
