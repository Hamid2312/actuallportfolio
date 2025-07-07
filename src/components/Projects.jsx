import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tilt from "react-parallax-tilt";

import Famefing from "../assets/Famefing_project_image.jpg";
import pia from "../assets/Pia_Project.jpg";
import newProjectImage from "../assets/Ai_resume_project.jpg";
import aestheticCalculator from "../assets/calculator.jpg";

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
    title: "AI Resume Builder",
    description:
      "A recently completed project leveraging React.js for the frontend and open APIs to create a dynamic AI-powered resume builder with Tailwind CSS.",
    link: "https://hamid2312.github.io/AiResumeBuilder/",
    image: newProjectImage,
  },
  {
    title: "Aesthetic Calculator",
    description:
      "A sleek and interactive calculator app built with React.js, featuring a modern design and smooth user experience with Tailwind CSS.",
    link: "https://aesthetic-calculator-pink.vercel.app/",
    image: aestheticCalculator,
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const carouselRef = useRef(null);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: "-50%",
        transition: {
          opacity: { duration: 0.8 },
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 6, // Faster scroll
            ease: "linear",
          },
        },
      });
    } else {
      controls.start({ opacity: 0, x: 0 });
    }
  }, [inView, controls]);

  const highlightTechnologies = (text) => {
    return text.replace(
      /\b(React\.js|React|Tailwind CSS)\b/g,
      '<span class="font-bold text-cyan-600 dark:text-[#00FBF4]">$1</span>'
    );
  };

  return (
    <div
      className="bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 py-12 sm:py-16 relative overflow-x-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-2 sm:px-4">
        <motion.div
          className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto"
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.h1
            className="gradient-text text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            My Projects
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-600 dark:bg-[#00FBF4] rounded-full" />
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-white font-light max-w-xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A showcase of my professional projects built with modern web technologies.
          </motion.p>
        </motion.div>

        <div className="relative overflow-x-hidden">
          <motion.div
            className="flex gap-4 sm:gap-8 lg:gap-12"
            ref={carouselRef}
            animate={controls}
            style={{ width: "max-content" }}
          >
            {[...projectsData, ...projectsData].map((project, index) => (
              <Tilt key={`${project.title}-${index}`} glareEnable={true} glareMaxOpacity={0.2}>
                <motion.div
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer p-4 relative bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 min-w-[220px] max-w-[280px] hover:scale-105 transition-transform"
                >
                  <div className="overflow-hidden rounded mb-4 aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={`${project.title} Preview`}
                      className="w-full h-full object-contain border border-blue-400 p-2 rounded"
                    />
                  </div>
                  <h3 className="gradient-text text-base font-bold mb-2">
                    {project.title}
                  </h3>
                  <p
                    className="text-sm text-gray-700 dark:text-white font-light line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: highlightTechnologies(project.description) }}
                  />
                </motion.div>
              </Tilt>
            ))}
          </motion.div>
        </div>

        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4 py-6 sm:px-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full overflow-y-auto max-h-[90vh] relative p-4 shadow-xl">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 hover:text-red-500 text-xl sm:text-2xl"
                aria-label="Close modal"
              >
                &times;
              </button>

              <img
                src={selectedProject.image}
                alt={`${selectedProject.title} Preview`}
                className="w-full h-auto rounded mb-4"
              />
              <h2 className="text-lg sm:text-xl font-bold mb-2 gradient-text">
                {selectedProject.title}
              </h2>
              <p
                className="text-sm sm:text-base text-gray-800 dark:text-gray-100 mb-4"
                dangerouslySetInnerHTML={{
                  __html: highlightTechnologies(selectedProject.description),
                }}
              />
              <div className="text-center">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 mt-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition"
                >
                  Visit Project
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;