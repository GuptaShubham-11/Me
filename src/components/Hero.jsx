import { motion } from "framer-motion";
import profilePic from "../assets/ShubhamGupta.jpeg";
import { BackgroundAnimation } from ".";

export default function Hero() {
    return (
        <section id="home" className="relative w-full flex items-center justify-center px-6 md:px-16 pb-20 bg-backgroundLight-500 dark:bg-backgroundDark-500 overflow-hidden">
            <BackgroundAnimation />

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center flex flex-col items-center"
            >
                {/* Profile Image */}
                <motion.div
                    className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accentLight dark:border-accentDark shadow-xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <motion.img
                        src={profilePic}
                        alt="Shubham Dev"
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                    />
                </motion.div>

                {/* Hero Title */}
                <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-6 text-textLight dark:text-textDark leading-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <span role="img" aria-label="wave" className={`text-6xl mr-2`}>
                        👋
                    </span>

                    Hello, I'm
                    <span className="text-primaryLight-500"> Shubham </span>
                    <span className="text-accentLight-500 dark:text-secondaryDark-500"> Dev </span>
                </motion.h1>

                <motion.p
                    className="text-lg sm:text-xl lg:text-2xl mt-4 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    Simple & Clean Code is my thing. <br />
                    <span className="text-accentLight-500 dark:text-secondaryDark-500 font-bold">Let me prove it to you.</span>
                </motion.p>

                <motion.div
                    className="mt-8 flex justify-center sm:mt-6 md:mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    <motion.button
                        onClick={() => (document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }))}
                        className="relative px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 
                                    rounded bg-accentLight-500 font-bold text-lg sm:text-lg md:text-xl 
                                    dark:bg-secondaryDark-500 text-textDark-500 shadow-md"
                        whileHover={{ scale: 1.1 }} // Simplified hover scale
                        whileTap={{ scale: 0.9 }}
                    >
                        <span className="absolute inset-0 bg-accentLight-500 dark:bg-secondaryDark-500  blur-lg opacity-50 rounded"></span>
                        <span className="relative">View Projects</span>
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
}
