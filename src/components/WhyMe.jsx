import { motion } from "framer-motion";
import { FaCode, FaRocket, FaPalette, FaLightbulb, FaUsers } from "react-icons/fa";

const benefits = [
    {
        id: 1,
        title: "Clean & Optimized Code",
        description: "I write efficient, scalable, and maintainable code that ensures high performance.",
        icon: <FaCode className="text-4xl text-white" />,
        gradient: "from-[#2563eb] to-[#1e40af]" // Deep Blue
    },
    {
        id: 2,
        title: "Fast & Responsive Designs",
        description: "Websites that load quickly and work seamlessly across all devices.",
        icon: <FaRocket className="text-4xl text-white" />,
        gradient: "from-[#7c3aed] to-[#6d28d9]" // Dark Violet
    },
    {
        id: 3,
        title: "Modern UI/UX",
        description: "Elegant and user-friendly interfaces tailored to create a great user experience.",
        icon: <FaPalette className="text-4xl text-white" />,
        gradient: "from-[#059669] to-[#047857]" // Deep Teal
    },
    {
        id: 4,
        title: "Creative & Unique Solutions",
        description: "Innovative ideas and solutions that make your project stand out.",
        icon: <FaLightbulb className="text-4xl text-white" />,
        gradient: "from-[#ea580c] to-[#c2410c]" // Dark Orange
    },
    {
        id: 5,
        title: "Collaborative & Transparent",
        description: "Strong communication and teamwork to bring your vision to life.",
        icon: <FaUsers className="text-4xl text-white" />,
        gradient: "from-[#334155] to-[#1e293b]" // Dark Navy Gray
    }
];


export default function Benefits() {
    return (
        <section id="benefits" className="py-16 px-6 sm:px-10 md:px-16 bg-backgroundLight-500 dark:bg-backgroundDark-500">
            <motion.h2
                className="text-3xl sm:text-4xl font-bold text-center mb-12 text-textLight-500 dark:text-textDark-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Why Work With Me?
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit) => (
                    <motion.div
                        key={benefit.id}
                        className="relative group h-full"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            delay: benefit.id * 0.1
                        }}
                    >
                        {/* Animated overlay */}
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                        <div className={`relative p-8 rounded-2xl overflow-hidden bg-gradient-to-r ${benefit.gradient} text-white flex flex-col items-center text-center 
                            backdrop-blur-lg border border-white/10 shadow-2xl h-full
                            transition-transform duration-300 group-hover:-translate-y-2`}>

                            {/* Animated icon container */}
                            <motion.div
                                className="mb-6 p-4 rounded-full bg-white/10 backdrop-blur-sm"
                                whileHover={{ scale: 1.1 }}
                            >
                                {benefit.icon}
                            </motion.div>

                            <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                            <p className="text-base opacity-90 leading-relaxed">{benefit.description}</p>

                            {/* Subtle gradient border animation */}
                            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                                <motion.div
                                    className="absolute w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                    animate={{ x: ["-100%", "100%"] }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}