import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaGitAlt, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiMongodb, SiRedux, SiExpress, SiTailwindcss, SiVite } from "react-icons/si";

const skills = [
    { name: "React.js", icon: <FaReact />, gradient: "from-[#2563eb] to-[#1e40af]" },         // Deep Blue → Darker Blue
    { name: "Redux", icon: <SiRedux />, gradient: "from-[#6b46c1] to-[#553c9a]" },            // Rich Purple → Deep Purple
    { name: "HTML5", icon: <FaHtml5 />, gradient: "from-[#f97316] to-[#c2410c]" },            // Vibrant Orange → Burnt Orange
    { name: "CSS3", icon: <FaCss3Alt />, gradient: "from-[#1d4ed8] to-[#1e3a8a]" },           // Navy Blue → Royal Blue
    { name: "JavaScript", icon: <FaJs />, gradient: "from-[#eab308] to-[#ca8a04]" },          // Golden Yellow → Amber
    { name: "Tailwind CSS", icon: <SiTailwindcss />, gradient: "from-[#0ea5e9] to-[#0891b2]" },// Deep Cyan → Teal
    { name: "Vite", icon: <SiVite />, gradient: "from-[#7c3aed] to-[#6d28d9]" },              // Electric Violet → Royal Purple
    { name: "Node.js", icon: <FaNodeJs />, gradient: "from-[#16a34a] to-[#15803d]" },         // Forest Green → Deep Green
    { name: "Express.js", icon: <SiExpress />, gradient: "from-[#374151] to-[#1f2937]" },    // Charcoal → Dark Slate
    { name: "MongoDB", icon: <SiMongodb />, gradient: "from-[#10b981] to-[#059669]" },        // Emerald Green → Deep Emerald
    { name: "Git", icon: <FaGitAlt />, gradient: "from-[#dc2626] to-[#b91c1c]" },             // Crimson → Dark Red
    { name: "GitHub", icon: <FaGithub />, gradient: "from-[#18181b] to-[#3f3f46]" },          // Onyx → Dark Graphite
];


export default function Skills() {
    return (
        <section id="skill" className="py-16 px-4 sm:px-8 md:px-16">
            <motion.h2
                className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-[#1f2937] dark:text-[#e2e8f0]"
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
                        className={`p-4 sm:p-6 rounded-xl shadow-md sm:shadow-lg text-white flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 sm:hover:scale-110 sm:hover:rotate-3 hover:bg-opacity-90 bg-gradient-to-r ${skill.gradient}`}
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
