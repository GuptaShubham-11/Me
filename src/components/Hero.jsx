import { motion } from "framer-motion";
import profilePic from "../assets/ShubhamGupta.jpeg";
import BackgroundAnimation from "./BackgroundAnimation.jsx";
import HiEmoji from "./HiEmoji.jsx";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative w-full flex items-center justify-center px-6 pb-20 bg-backgroundLight-500 dark:bg-backgroundDark-500 overflow-hidden"
        >
            <BackgroundAnimation />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col items-center text-center"
            >
                {/* Profile Image */}
                <div className="relative top-5 w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56">
                    {/* Waving Border */}
                    <motion.div
                        className="absolute inset-0 w-full h-full rounded-full border-4 border-primaryLight-500 dark:border-primaryDark-500 animate-[wave_2s_infinite]"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    {/* Image */}
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-backgroundLight-500 dark:border-backgroundDark-500 shadow-xl">
                        <motion.img
                            src={profilePic}
                            alt="Shubham Gupta"
                            className="w-full h-full object-cover rounded-full"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.5, ease: "backOut" }}
                            whileHover={{ scale: 1.05 }}
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="mt-10 sm:mt-14 max-w-2xl mx-auto px-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-primaryLight-500 dark:text-primaryDark-500 leading-snug flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
                        <HiEmoji />
                        <span>Hey, I'm</span>
                        <span className="text-accentLight-500 dark:text-accentDark-500">Shubham</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-x dark:text-secondaryDark-500 sm:mt-6 max-w-xl">
                        A Web Developer crafting modern & interactive web experiences.
                    </p>
                </div>

                {/* Button & Scroll */}
                <motion.div
                    className="mt-8 flex flex-col items-center sm:flex-row sm:justify-start gap-4 sm:gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    {/* Button */}
                    <motion.button
                        onClick={() =>
                            document.getElementById("project")?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="px-6 py-3 rounded-lg bg-primaryLight-500 dark:bg-primaryDark-500 text-white text-lg font-semibold shadow-md transition-all hover:brightness-110"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View My Work
                    </motion.button>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="flex flex-col items-center gap-2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="w-px h-8 bg-gradient-to-b from-textLight-500 to-transparent dark:from-textDark-500" />
                        <span className="text-sm text-textLight-500 dark:text-textDark-500">Scroll Down</span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
