import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Famefing from "../assets/famefing.png";
import pia from "../assets/mypia.png";
import personalGrowthImage from "../assets/Personal_Growth.png";
import aestheticCalculator from "../assets/noor-e-nisa.png";
import Tilt from "react-parallax-tilt";

const projectsData = [
  {
    title: "Famefing.com",
    description:
      "I created the company's website Famefing.com during my 3-month internship. Built with React.js, it's a single-page, fully responsive website.",
    link: "https://Hamid2312.github.io/myfamefing/",
    image: Famefing,
  },
  {
    title: "Piac.com.pk",
    description:
      "A professional dummy project website. Each component was crafted using best practices and modern web development techniques with React.js and Tailwind CSS.",
    link: "https://mypia-hamid2312s-projects.vercel.app/",
    image: pia,
  },
  {
    title: "Personal Growth OS",
    description:
      "A comprehensive SaaS lifestyle and productivity platform. Features a unified dashboard, habit tracking, and custom analytics. Built with React.js, Tailwind CSS, Supabase, and Recharts.",
    link: "https://day-stack-nine.vercel.app/",
    image: personalGrowthImage,
  },
  {
    title: "Noor e Nisa",
    description:
      "A full E-commerce Noor e Nisa project built with React.js, featuring a modern design and smooth user experience with Tailwind CSS.",
    link: "https://noor-e-nisa.vercel.app/",
    image: aestheticCalculator,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 640);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const highlightTechnologies = (text) => {
    return text.replace(
      /\b(React\.js|React|Tailwind CSS)\b/g,
      '<span class="font-bold text-primary-600 dark:text-primary-400">$1</span>'
    );
  };

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.02, y: -2, boxShadow: "0 25px 50px -12px rgba(8, 145, 178, 0.25)", transition: { duration: 0.3, ease: "easeOut" } },
  };

  const CardWrapper = ({ children, isLargeScreen }) => {
    if (isLargeScreen) {
      return (
        <Tilt glareEnable={true} glareMaxOpacity={0.2} tiltMaxAngleX={10} tiltMaxAngleY={10}>
          {children}
        </Tilt>
      );
    }
    return <>{children}</>;
  };

  return (
    <section className="relative bg-primary-50 dark:bg-[#120312] py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
          <span className="ml-2 text-primary-600 dark:text-primary-400">/</span>
        </motion.h2>
        <motion.p
          className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A showcase of my professional projects built with modern web technologies.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {projectsData.map((project) => (
          <CardWrapper key={project.title} isLargeScreen={isLargeScreen}>
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-primary-300/40 dark:hover:shadow-primary-900/40 border border-primary-100/30 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 flex flex-col"
            >
              <div
                onClick={() => setSelectedProject(project)}
                className="overflow-hidden rounded-t-2xl aspect-video flex items-center justify-center cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p
                  className="text-gray-700 dark:text-gray-300 text-sm line-clamp-4 flex-grow mb-4"
                  dangerouslySetInnerHTML={{ __html: highlightTechnologies(project.description) }}
                />

                <div className="mt-auto flex justify-between gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 px-3 py-1.5 text-xs bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-200 rounded-full hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors duration-200"
                  >
                    View Details
                  </button>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-1.5 text-xs bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-200"
                  >
                    Visit Live
                  </a>
                </div>
              </div>
            </motion.div>
          </CardWrapper>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-3xl overflow-y-auto max-h-[90vh] p-6 relative shadow-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 hover:text-primary-500 text-2xl sm:text-3xl z-10"
              >
                &times;
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto rounded-lg mb-4 border border-primary-200 dark:border-primary-600 object-cover bg-gray-100 dark:bg-gray-800 p-0"
              />
              <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{selectedProject.title}</h2>
              <p
                className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-6"
                dangerouslySetInnerHTML={{ __html: highlightTechnologies(selectedProject.description) }}
              />
              <div className="flex justify-center gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-primary-600 dark:bg-primary-400 text-white dark:text-gray-900 rounded-full hover:bg-primary-700 dark:hover:bg-primary-300 transition-all duration-300 font-semibold"
                >
                  Visit Project
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="inline-block px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;