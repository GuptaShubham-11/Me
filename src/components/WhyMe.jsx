import { motion } from 'framer-motion';
import {
  FaCode,
  FaRocket,
  FaPalette,
  FaLightbulb,
  FaUsers,
  FaStar,
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

const benefits = [
  {
    id: 1,
    title: 'Clean Code',
    description: 'Efficient, scalable, and maintainable code.',
    icon: <FaCode />,
    gradient: 'from-[#2563eb] to-[#1e40af]',
    color: 'bg-blue-600',
  },
  {
    id: 2,
    title: 'Fast & Responsive',
    description: 'Seamless experience across all devices.',
    icon: <FaRocket />,
    gradient: 'from-[#7c3aed] to-[#6d28d9]',
    color: 'bg-purple-600',
  },
  {
    id: 3,
    title: 'Modern UI/UX',
    description: 'Elegant and intuitive user experiences.',
    icon: <FaPalette />,
    gradient: 'from-[#059669] to-[#047857]',
    color: 'bg-green-600',
  },
  {
    id: 4,
    title: 'Unique Ideas',
    description: 'Creative, standout project solutions.',
    icon: <FaLightbulb />,
    gradient: 'from-[#ea580c] to-[#c2410c]',
    color: 'bg-orange-600',
  },
  {
    id: 5,
    title: 'Collaborative',
    description: 'Transparent teamwork and communication.',
    icon: <FaUsers />,
    gradient: 'from-[#334155] to-[#1e293b]',
    color: 'bg-gray-700',
  },
];

export default function BenefitsStepper() {
  const [radius, setRadius] = useState(230);
  const [activeId, setActiveId] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 768;
      setIsMobile(isNowMobile);
      setRadius(window.innerWidth < 468 ? 110 : isNowMobile ? 180 : 230);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 bg-transparent overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-[#2e2e2e] dark:text-[#e8e6e3]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Work With Me?
        </motion.h2>

        <motion.p
          className="text-xl text-center mb-16 max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Combining technical expertise with creative solutions for exceptional
          results
        </motion.p>

        {/* Desktop Circular Layout */}
        <div
          className="hidden md:block relative h-[500px] group"
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => {
            setIsActive(false);
            setActiveId(null);
          }}
        >
          {/* Center Circle */}
          <motion.div
            className="absolute left-1/2 top-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-[#5eaaa8] to-[#f25c54] flex items-center justify-center shadow-2xl z-0 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-56 h-56 rounded-full bg-white dark:bg-[#1f1f1f] flex flex-col items-center justify-center text-center p-6">
              <FaStar className="text-4xl text-yellow-400 mb-3" />
              <h3 className="text-2xl font-bold text-[#2e2e2e] dark:text-[#e8e6e3]">
                Key Benefits
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Hover around the circle
              </p>
            </div>
          </motion.div>

          {benefits.map((benefit, index) => {
            const angle = index * (360 / benefits.length) * (Math.PI / 180);
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <motion.div
                key={benefit.id}
                className="absolute left-1/2 top-1/2 z-10"
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={
                  isActive
                    ? { x, y, opacity: 1, scale: 1 }
                    : { x: 0, y: 0, opacity: 0, scale: 0 }
                }
                transition={{
                  delay: index * 0.35,
                  duration: 0.5,
                  type: 'spring',
                }}
              >
                <div
                  onMouseEnter={() => setActiveId(benefit.id)}
                  onMouseLeave={() => setActiveId(null)}
                  className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${benefit.gradient} flex flex-col items-center justify-center p-4 text-white shadow-xl border-4 border-white/20 backdrop-blur-sm cursor-pointer`}
                >
                  <div className="text-3xl mb-2">{benefit.icon}</div>
                  <h3 className="font-bold text-sm text-center">
                    {benefit.title}
                  </h3>
                </div>

                {activeId === benefit.id && (
                  <motion.div
                    className="absolute left-full top-1/2 -translate-y-1/2 ml-4 w-64 p-4 rounded-xl bg-white dark:bg-[#2a2a2a] shadow-lg z-30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center">
                      <div
                        className={`w-10 h-10 rounded-full ${benefit.color} flex items-center justify-center text-white mx-auto mb-3`}
                      >
                        {benefit.icon}
                      </div>
                      <h4 className="font-bold text-lg text-[#2e2e2e] dark:text-[#e8e6e3]">
                        {benefit.title}
                      </h4>
                      <p className="mt-2 text-gray-600 dark:text-gray-300">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Circular Layout */}
        <div className="md:hidden relative h-[480px] max-w-full overflow-visible px-2">
          <div
            className="absolute left-1/2 top-1/2 w-48 h-48 rounded-full bg-gradient-to-r from-[#5eaaa8] to-[#f25c54] flex items-center justify-center shadow-2xl z-0 transform -translate-x-1/2 -translate-y-1/2"
            onClick={() => setIsActive((prev) => !prev)}
          >
            <div className="w-40 h-40 rounded-full bg-white dark:bg-[#1f1f1f] flex flex-col items-center justify-center text-center p-4">
              <FaStar className="text-3xl text-yellow-400 mb-2" />
              <h3 className="text-xl font-bold text-[#2e2e2e] dark:text-[#e8e6e3]">
                Tap Me
              </h3>
            </div>
          </div>

          {benefits.map((benefit, index) => {
            const angle = index * (360 / benefits.length) * (Math.PI / 180);
            const x = -radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <motion.div
                key={benefit.id}
                className="mr-5 absolute left-1/2 top-1/2 z-10"
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={
                  isActive
                    ? { x, y, opacity: 1, scale: 1 }
                    : { x: 0, y: 0, opacity: 0, scale: 0 }
                }
                transition={{
                  delay: index * 0.35,
                  duration: 0.5,
                  type: 'spring',
                }}
              >
                <div
                  className={`w-20 h-20  sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-r ${benefit.gradient} flex flex-col items-center justify-center p-3 text-white shadow-xl border-4 border-white/20 backdrop-blur-sm`}
                >
                  <div className="text-2xl sm:text-3xl mb-1">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-xs sm:text-sm text-center">
                    {benefit.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-10 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-[#5eaaa8]/10 to-[#5eaaa8]/5 p-6 rounded-2xl border border-[#5eaaa8]/20 text-center">
            <div className="text-4xl font-bold text-[#5eaaa8]">15+</div>
            <div className="mt-2 text-gray-600 dark:text-gray-300">
              Projects
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#f25c54]/10 to-[#f25c54]/5 p-6 rounded-2xl border border-[#f25c54]/20 text-center">
            <div className="text-4xl font-bold text-[#f25c54]">99%</div>
            <div className="mt-2 text-gray-600 dark:text-gray-300">
              Satisfaction
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#2563eb]/10 to-[#2563eb]/5 p-6 rounded-2xl border border-[#2563eb]/20 text-center">
            <div className="text-4xl font-bold text-[#2563eb]">1+</div>
            <div className="mt-2 text-gray-600 dark:text-gray-300">
              Years Experience
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#059669]/10 to-[#059669]/5 p-6 rounded-2xl border border-[#059669]/20 text-center">
            <div className="text-4xl font-bold text-[#059669]">12/6</div>
            <div className="mt-2 text-gray-600 dark:text-gray-300">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
