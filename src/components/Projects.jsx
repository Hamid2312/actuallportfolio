import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";

import Famefing from "../assets/famefing.png";
import pia from "../assets/mypia.png";
import newProjectImage from "../assets/index.png";
import aestheticCalculator from "../assets/noor-e-nisa.png";

const projectsData = [
  {
    title: "Famefing.com",
    description:
      "I created the company's website Famefing.com during my 3-month internship. Built with React.js, it’s a single-page, fully responsive website.",
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
    title: "Client's website",
    description:
      "A recently completed project leveraging React.js for the frontend and open APIs to create a dynamic AI-powered website with Tailwind CSS.",
    link: "https://hamid2312.github.io/AiResumeBuilder/",
    image: newProjectImage,
  },
  {
    title: "Noor e Nisa",
    description:
      "A full E-commerce Noor e Nisa project built with React.js, featuring a modern design and smooth user experience with Tailwind CSS.",
    link: "https://aesthetic-calculator-pink.vercel.app/",
    image: aestheticCalculator,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
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
      '<span class="font-bold text-pink-600 dark:text-pink-400">$1</span>'
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
    hover: { scale: 1.02, y: -2, boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.25)", transition: { duration: 0.3, ease: "easeOut" } }, 
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
    <section className="relative bg-pink-50 dark:bg-[#120312] py-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-3 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
          <span className="ml-2 text-pink-600 dark:text-pink-400">/</span>
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
        {projectsData.map((project, index) => (
          <CardWrapper key={project.title} isLargeScreen={isLargeScreen}>
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-pink-300/40 dark:hover:shadow-pink-900/40 border border-pink-100/30 hover:border-pink-300 dark:hover:border-pink-600 transition-all duration-300 flex flex-col"
            >
              {/* Image Container: Ensure aspect ratio for consistent height and use object-cover */}
              <div 
                onClick={() => setSelectedProject(project)} 
                // Adjusted aspect ratio to be more rectangular (16:9) to better fit common screen sizes
                // Removed bg-gray-100 as object-cover will fill it
                className="overflow-hidden rounded-t-2xl aspect-video flex items-center justify-center cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  // FIX: Use object-cover to make the image fill the container completely
                  // and remove padding as it's not needed with object-cover
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
                        className="flex-1 px-3 py-1.5 text-xs bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-200 rounded-full hover:bg-pink-200 dark:hover:bg-pink-800 transition-colors duration-200"
                    >
                        View Details
                    </button>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-3 py-1.5 text-xs bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-200"
                    >
                        Visit Live
                    </a>
                </div>
              </div>
            </motion.div>
          </CardWrapper>
        ))}
      </motion.div>

      {/* Modal component remains fully responsive */}
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
                className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 hover:text-pink-500 text-2xl sm:text-3xl z-10"
              >
                &times;
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                // FIX: Use object-cover for modal image as well
                className="w-full h-auto rounded-lg mb-4 border border-pink-200 dark:border-pink-600 object-cover bg-gray-100 dark:bg-gray-800 p-0" // Removed p-2
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
                  className="inline-block px-6 py-2 bg-pink-600 dark:bg-pink-400 text-white dark:text-gray-900 rounded-full hover:bg-pink-700 dark:hover:bg-pink-300 transition-all duration-300 font-semibold"
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