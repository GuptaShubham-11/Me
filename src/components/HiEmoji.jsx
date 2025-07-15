import { motion } from 'framer-motion';

const HiEmoji = () => {
  return (
    <motion.span
      role="img"
      aria-label="Waving hand"
      className="inline-block"
      animate={{ rotate: [0, 20, -10, 0], scale: [1, 1.1, 1] }}
      transition={{ repeat: 2, duration: 0.6, ease: 'easeInOut' }}
    >
      👋
    </motion.span>
  );
};

export default HiEmoji;
