import { motion } from 'framer-motion';
import {
  FaCode,
  FaRocket,
  FaPalette,
  FaLightbulb,
  FaUsers,
} from 'react-icons/fa';

const benefits = [
  {
    id: 1,
    title: 'Clean Code',
    description: 'Efficient, scalable, and maintainable code.',
    icon: <FaCode />,
    gradient: 'from-[#2563eb] to-[#1e40af]',
  },
  {
    id: 2,
    title: 'Fast & Responsive',
    description: 'Seamless experience across all devices.',
    icon: <FaRocket />,
    gradient: 'from-[#7c3aed] to-[#6d28d9]',
  },
  {
    id: 3,
    title: 'Modern UI/UX',
    description: 'Elegant and intuitive user experiences.',
    icon: <FaPalette />,
    gradient: 'from-[#059669] to-[#047857]',
  },
  {
    id: 4,
    title: 'Unique Ideas',
    description: 'Creative, standout project solutions.',
    icon: <FaLightbulb />,
    gradient: 'from-[#ea580c] to-[#c2410c]',
  },
  {
    id: 5,
    title: 'Collaborative',
    description: 'Transparent teamwork and communication.',
    icon: <FaUsers />,
    gradient: 'from-[#334155] to-[#1e293b]',
  },
];

export default function BenefitsStepper() {
  return (
    <section className="py-16 px-6">
      <motion.h2
        className="text-3xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Why Work With Me?
      </motion.h2>

      {/* Desktop Horizontal Stepper */}
      <div className="hidden sm:flex gap-12 items-center justify-start w-[1200px] mx-auto relative">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            className="flex flex-col items-center relative group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            aria-label={benefit.title}
            aria-describedby={`benefit-description-${benefit.id}`}
          >
            <motion.div
              className={`w-24 h-24 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center text-4xl text-white shadow-lg border-4 border-white/20 dark:bg-gradient-to-r dark:${benefit.gradient} focus:ring-4 focus:ring-${benefit.gradient.split(' ')[0]} focus:ring-opacity-50`}
              whileHover={{ scale: 1.2 }}
            >
              {benefit.icon}
            </motion.div>

            <motion.h3
              id={`benefit-description-${benefit.id}`}
              className="text-lg font-semibold mt-4 text-center"
              style={{ textShadow: '0 0 5px rgba(255,255,255,0.8)' }}
            >
              {benefit.title}
            </motion.h3>

            <motion.p
              className="text-sm opacity-70 text-center max-w-[180px] mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {benefit.description}
            </motion.p>

            {index !== benefits.length - 1 && (
              <motion.div
                className="absolute z-[-1] top-12 left-[115px] h-1 w-24 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full"
                animate={{
                  opacity: [0.3, 0.9, 0.3],
                  scaleY: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile Vertical Timeline */}
      <div className="flex flex-col sm:hidden gap-12 items-start relative mt-12">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.id}
            className="flex items-center gap-4 relative group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Connector Line */}
            {index !== benefits.length - 1 && (
              <div className="absolute top-14 left-6 h-12 z-[-30] w-1 bg-gradient-to-b from-slate-400 to-slate-600 rounded-full" />
            )}

            {/* Icon */}
            <motion.div
              className={`w-16 h-16 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center text-2xl text-white shadow-lg border-4 border-white/20 sm:w-24 sm:h-24 sm:text-4xl`}
              whileHover={{ scale: 1.1 }}
            >
              {benefit.icon}
            </motion.div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold">{benefit.title}</h3>
              <p className="text-sm opacity-70 max-w-xs">
                {benefit.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
