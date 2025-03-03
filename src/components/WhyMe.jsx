import { motion } from "framer-motion";
import { FaCode, FaRocket, FaPalette, FaLightbulb, FaUsers } from "react-icons/fa";

const benefits = [
    {
        id: 1,
        title: "Clean & Optimized Code",
        description: "I write efficient, scalable, and maintainable code that ensures high performance.",
        icon: <FaCode className="text-4xl text-white" />,
        gradient: "from-blue-400 to-blue-800"
    },
    {
        id: 2,
        title: "Fast & Responsive Designs",
        description: "Websites that load quickly and work seamlessly across all devices.",
        icon: <FaRocket className="text-4xl text-white" />,
        gradient: "from-purple-400 to-indigo-400"
    },
    {
        id: 3,
        title: "Modern UI/UX",
        description: "Elegant and user-friendly interfaces tailored to create a great user experience.",
        icon: <FaPalette className="text-4xl text-white" />,
        gradient: "from-teal-400 to-teal-700"
    },
    {
        id: 4,
        title: "Creative & Unique Solutions",
        description: "Innovative ideas and solutions that make your project stand out.",
        icon: <FaLightbulb className="text-4xl text-white" />,
        gradient: "from-orange-400 to-red-400"
    },
    {
        id: 5,
        title: "Collaborative & Transparent",
        description: "Strong communication and teamwork to bring your vision to life.",
        icon: <FaUsers className="text-4xl text-white" />,
        gradient: "from-gray-600 to-gray-900"
    }
];

export default function Benefits() {
    return (
        <section id="benefits" className="py-16 px-6 sm:px-10 md:px-16 bg-backgroundLight-500 dark:bg-backgroundDark-500">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-textLight-500 dark:text-textDark-500">
                Why Work With Me?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit) => (
                    <motion.div
                        key={benefit.id}
                        className={`relative p-6 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-r ${benefit.gradient} text-white flex flex-col items-center text-center backdrop-blur-md bg-opacity-90`}
                        whileHover={{ scale: 1.05, rotate: 2, boxShadow: "0px 4px 20px rgba(0,0,0,0.2)" }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 200, delay: benefit.id * 0.1 }}
                        aria-label={benefit.title}
                    >
                        <div className="mb-4">{benefit.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-base opacity-90">{benefit.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
