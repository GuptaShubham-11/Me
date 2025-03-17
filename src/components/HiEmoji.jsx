import { motion } from "framer-motion";

const HiEmoji = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold flex items-center gap-2"
        >
            <motion.span
                animate={{ rotate: [0, 20, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: 2, duration: 0.4, ease: "easeInOut" }}
                aria-label="Waving hand"
            >
                👋
            </motion.span>
        </motion.div>
    );
};

export default HiEmoji;
