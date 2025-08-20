import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaCrown,
  FaChartLine,
  FaLightbulb,
  FaRocket,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiRedux,
  SiExpress,
  SiTailwindcss,
  SiVite,
  SiNetlify,
  SiVercel,
  SiRender,
  SiPostman,
  SiMongoose,
  SiJsonwebtokens,
  SiZod,
  SiPostgresql,
  SiDrizzle,
  SiNextdotjs,
} from 'react-icons/si';
import { RiBearSmileLine } from 'react-icons/ri';

const categories = [
  {
    title: 'Frontend',
    colorScheme: 'from-blue-600 to-blue-400',
    icon: <FaCrown className="text-yellow-400" />,
    skills: [
      {
        name: 'React.js',
        icon: <FaReact />,
        gradient: 'from-[#61DAFB] to-[#2B9EB3]',
        textColor: 'text-[#2B3A4A]',
      },
      {
        name: 'Redux',
        icon: <SiRedux />,
        gradient: 'from-[#764ABC] to-[#5B34A1]',
        textColor: 'text-white',
      },
      {
        name: 'Zustand',
        icon: <RiBearSmileLine />,
        gradient: 'from-[#F79AD3] to-[#C86FC9]',
        textColor: 'text-white',
      },
      {
        name: 'HTML5',
        icon: <FaHtml5 />,
        gradient: 'from-[#E34F26] to-[#D04015]',
        textColor: 'text-white',
      },
      {
        name: 'CSS3',
        icon: <FaCss3Alt />,
        gradient: 'from-[#1572B6] to-[#0F5A8C]',
        textColor: 'text-white',
      },
      {
        name: 'JavaScript',
        icon: <FaJs />,
        gradient: 'from-[#F7DF1E] to-[#D8C117]',
        textColor: 'text-[#2B3A4A]',
      },
      {
        name: 'Zod',
        icon: <SiZod />,
        gradient: 'from-teal-500 to-cyan-400',
        textColor: 'text-white',
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss />,
        gradient: 'from-[#38B2AC] to-[#2C8C87]',
        textColor: 'text-white',
      },
      {
        name: 'Vite',
        icon: <SiVite />,
        gradient: 'from-[#646CFF] to-[#4A52CC]',
        textColor: 'text-white',
      },
    ],
  },
  {
    title: 'Backend',
    colorScheme: 'from-green-600 to-green-400',
    icon: <FaChartLine className="text-green-400" />,
    skills: [
      {
        name: 'Node.js',
        icon: <FaNodeJs />,
        gradient: 'from-[#83CD29] to-[#6BA821]',
        textColor: 'text-[#2B3A4A]',
      },
      {
        name: 'Express.js',
        icon: <SiExpress />,
        gradient: 'from-[#3A3A3A] to-[#2B2B2B]',
        textColor: 'text-white',
      },
      {
        name: 'MongoDB',
        icon: <SiMongodb />,
        gradient: 'from-[#77DD77] to-[#5CB85C]',
        textColor: 'text-[#2B3A4A]',
      },
      {
        name: 'PostgreSQL',
        icon: <SiPostgresql />,
        gradient: 'from-[#4169E1] to-[#483D8B]',
        textColor: 'text-white',
      },
      {
        name: 'DrizzleORM',
        icon: <SiDrizzle />,
        gradient: 'from-[#2563eb] to-[#1e40af]',
        textColor: 'text-white',
      },
      {
        name: 'JWT',
        icon: <SiJsonwebtokens />,
        gradient: 'from-[#F09433] via-[#E6683C] to-[#DC2743]',
        textColor: 'text-white',
      },
      {
        name: 'Mongoose',
        icon: <SiMongoose />,
        gradient: 'from-[#880000] to-[#A6192E]',
        textColor: 'text-white',
      },
      {
        name: 'Postman',
        icon: <SiPostman />,
        gradient: 'from-[#FF6C37] to-[#FF4F1F]',
        textColor: 'text-white',
      },
    ],
  },
  {
    title: 'Tools',
    colorScheme: 'from-purple-600 to-purple-400',
    icon: <FaLightbulb className="text-yellow-300" />,
    skills: [
      {
        name: 'Git',
        icon: <FaGitAlt />,
        gradient: 'from-[#F14E32] to-[#D83B1F]',
        textColor: 'text-white',
      },
      {
        name: 'GitHub',
        icon: <FaGithub />,
        gradient: 'from-[#181717] to-[#2B2B2B]',
        textColor: 'text-white',
      },
      {
        name: 'Next.js',
        icon: <SiNextdotjs />,
        gradient: 'from-[#000000] to-[#111111]',
        textColor: 'text-white',
      }
    ],
  },
  {
    title: 'Deployment',
    colorScheme: 'from-purple-600 to-pink-500',
    icon: <FaRocket className="text-pink-400" />,
    skills: [
      {
        name: 'Netlify',
        icon: <SiNetlify />,
        gradient: 'from-[#00C7B7] to-[#00A79D]',
        textColor: 'text-white',
      },
      {
        name: 'Vercel',
        icon: <SiVercel />,
        gradient: 'from-[#000000] to-[#333333]',
        textColor: 'text-white',
      },
      {
        name: 'Render',
        icon: <SiRender />,
        gradient: 'from-[#3B82F6] to-[#60A5FA]',
        textColor: 'text-white',
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-[#2e2e2e] dark:text-[#e8e6e3]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Technical Expertise
        </motion.h2>

        <motion.p
          className="text-xl text-center mb-16 max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Technologies I've mastered through real-world projects and continuous
          learning
        </motion.p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-[#1f1f1f] rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
            >
              {/* Category Header */}
              <div
                className={`bg-gradient-to-r ${category.colorScheme} p-5 flex items-center gap-4`}
              >
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-2xl">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`p-4 rounded-xl shadow-md flex flex-col items-center justify-center bg-gradient-to-r ${skill.gradient} ${skill.textColor} backdrop-blur-sm bg-opacity-90 border border-white/20 transition-all duration-300`}
                    >
                      <motion.div
                        className="text-3xl mb-3"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <h3 className="text-sm font-semibold text-center">
                        {skill.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
