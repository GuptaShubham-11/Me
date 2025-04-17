import { motion } from "framer-motion";
import {
    FaReact, FaNodeJs, FaGithub, FaGitAlt,
    FaHtml5, FaCss3Alt, FaJs
} from "react-icons/fa";
import {
    SiMongodb, SiRedux, SiExpress,
    SiTailwindcss, SiVite,
    SiNetlify, SiVercel, SiRender,
    SiPostman, SiMongoose, SiJsonwebtokens, SiZod
} from "react-icons/si";

const categories = [
    {
        title: "Frontend",
        colorScheme: "from-blue-600 to-blue-400",
        skills: [
            { name: "React.js", icon: <FaReact />, gradient: "from-[#61DAFB] to-[#2B9EB3]", textColor: "text-[#2B3A4A]" },
            { name: "Redux", icon: <SiRedux />, gradient: "from-[#764ABC] to-[#5B34A1]", textColor: "text-white" },
            { name: "HTML5", icon: <FaHtml5 />, gradient: "from-[#E34F26] to-[#D04015]", textColor: "text-white" },
            { name: "CSS3", icon: <FaCss3Alt />, gradient: "from-[#1572B6] to-[#0F5A8C]", textColor: "text-white" },
            { name: "JavaScript", icon: <FaJs />, gradient: "from-[#F7DF1E] to-[#D8C117]", textColor: "text-[#2B3A4A]" },
            { name: "Zod", icon: <SiZod />, gradient: "from-teal-500 to-cyan-400", textColor: "text-white" },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, gradient: "from-[#38B2AC] to-[#2C8C87]", textColor: "text-white" },
            { name: "Vite", icon: <SiVite />, gradient: "from-[#646CFF] to-[#4A52CC]", textColor: "text-white" },
        ],
    },
    {
        title: "Backend",
        colorScheme: "from-green-600 to-green-400",
        skills: [
            { name: "Node.js", icon: <FaNodeJs />, gradient: "from-[#83CD29] to-[#6BA821]", textColor: "text-[#2B3A4A]" },
            { name: "Express.js", icon: <SiExpress />, gradient: "from-[#3A3A3A] to-[#2B2B2B]", textColor: "text-white" },
            { name: "MongoDB", icon: <SiMongodb />, gradient: "from-[#77DD77] to-[#5CB85C]", textColor: "text-[#2B3A4A]" },
            { name: "Zod", icon: <SiZod />, gradient: "from-[#3F8CFF] to-[#5EEAD4]", textColor: "text-white" },
            { name: "JWT", icon: <SiJsonwebtokens />, gradient: "from-[#F09433] via-[#E6683C] to-[#DC2743]", textColor: "text-white" },
            { name: "Mongoose", icon: <SiMongoose />, gradient: "from-[#880000] to-[#A6192E]", textColor: "text-white" },
            { name: "Postman", icon: <SiPostman />, gradient: "from-[#FF6C37] to-[#FF4F1F]", textColor: "text-white" },
        ],
    },
    {
        title: "Tools",
        colorScheme: "from-purple-600 to-purple-400",
        skills: [
            { name: "Git", icon: <FaGitAlt />, gradient: "from-[#F14E32] to-[#D83B1F]", textColor: "text-white" },
            { name: "GitHub", icon: <FaGithub />, gradient: "from-[#181717] to-[#2B2B2B]", textColor: "text-white" },
        ],
    },
    {
        title: "Deployment",
        colorScheme: "from-purple-600 to-pink-500",
        skills: [
            { name: "Netlify", icon: <SiNetlify />, gradient: "from-[#00C7B7] to-[#00A79D]", textColor: "text-white" },
            { name: "Vercel", icon: <SiVercel />, gradient: "from-[#000000] to-[#333333]", textColor: "text-white" },
            { name: "Render", icon: <SiRender />, gradient: "from-[#3B82F6] to-[#60A5FA]", textColor: "text-white" },
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-16 px-6 bg-light dark:bg-dark">
            <motion.h2
                className="text-4xl font-bold text-center mb-12 text-textLight dark:text-textDark"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                My Skills
            </motion.h2>

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
                                    className={`p-5 rounded-2xl shadow-lg flex flex-col items-center justify-center bg-gradient-to-r ${skill.gradient} ${skill.textColor} backdrop-blur-md bg-opacity-90 border border-white/20 transition-transform duration-300 hover:scale-105 hover:border-white/50`}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.05 }}
                                    whileHover={{ y: -5 }}
                                    aria-label={skill.name}
                                >
                                    <motion.div
                                        className="text-4xl mb-3"
                                        style={{
                                            textShadow: "0 0 6px rgba(255,255,255,0.8)",
                                            filter: "drop-shadow(0 0 10px rgba(255,255,255,0.6))",
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
