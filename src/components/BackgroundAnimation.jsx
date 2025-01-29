import { motion } from "framer-motion";

const BackgroundAnimation = () => {
    return (
        <motion.div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(9)].map((_, index) => (
                <motion.div
                    key={index}
                    className="absolute w-6 h-6 bg-accentLight-500 dark:bg-secondaryDark-500 rounded-full opacity-50 shadow-lg"
                    initial={{
                        x: `${Math.random() * 100}vw`,
                        y: `${Math.random() * 80}vh`, // Stays in the upper half
                        scale: Math.random() * 0.6 + 0.4,
                    }}
                    animate={{
                        x: [`${Math.random() * 90}vw`, `${Math.random() * 90}vw`],
                        y: [`${Math.random() * 90}vh`, `${Math.random() * 90}vh`], // Keeps floating within the top area
                        opacity: [0.4, 1, 0.4],
                        scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 8 + Math.random() * 5,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </motion.div>
    );
};

export default BackgroundAnimation;
