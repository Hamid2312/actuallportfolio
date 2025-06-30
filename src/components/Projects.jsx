import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.4, delayChildren: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 10 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: "easeOut", type: "spring", bounce: 0.3 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 25px rgba(0, 183, 180, 0.6)",
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hover: { scale: 1.1, transition: { duration: 0.5, ease: "easeInOut" } }, // Removed rotate for cleaner look
  };

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3, ease: "easeOut" } },
  };

  // Function to highlight technologies in description
  const highlightTechnologies = (text) => {
    return text.replace(
      /\b(React\.js|React|Tailwind CSS)\b/g,
      '<span class="font-bold text-cyan-600 dark:text-[#00FBF4]">$1</span>'
    );
  };

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
            duration: 10,
            ease: "linear",
          },
        },
      });
    } else {
      controls.start({ opacity: 0, x: 0 });
    }
  }, [inView, controls]);

  return (
    <div
      className="bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 py-12 sm:py-16 relative overflow-x-hidden"
      ref={ref}
    >
      <div className="overlay" />
      <div className="container mx-auto px-2 sm:px-4 overflow-x-hidden">
        <motion.div
          className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto"
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <motion.h1
            className="gradient-text text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 relative"
            variants={headingVariants}
            whileHover={{ scale: 1.05 }}
          >
            My Projects
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-600 dark:bg-[#00FBF4] rounded-full" />
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-white font-light max-w-xl mx-auto"
            variants={subheadingVariants}
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
              <motion.div
                key={`${project.title}-${index}`}
                className="card p-4 relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 min-w-[200px] max-w-[280px]"
                variants={cardVariants}
                initial="hidden"
                animate="show"
                whileHover="hover"
              >
                <div className="absolute inset-0 bg-cyan-100/10 dark:bg-[#00FBF4]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="overflow-hidden rounded-md mb-4 aspect-[4/3]">
                  <motion.img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-contain relative z-10 p-2 border-2 border-blue-500 dark:border-blue-400 rounded"
                    variants={imageVariants}
                    whileHover="hover"
                  />
                </div>
                <motion.h3
                  className="gradient-text text-base sm:text-lg font-bold mb-2 relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    aria-label={`View ${project.title} project`}
                  >
                    {project.title}
                  </a>
                </motion.h3>
                <p
                  className="text-xs sm:text-sm text-gray-700 dark:text-white font-light mb-4 relative z-10 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: highlightTechnologies(project.description) }}
                  aria-describedby={`desc-${project.title}-${index}`}
                />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-sm text-black dark:text-white font-semibold hover:underline relative z-20"
                  aria-label={`Visit ${project.title} live site`}
                >
                  View Project
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;