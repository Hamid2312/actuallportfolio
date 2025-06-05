import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Famefing from "../assets/Famefing_project_image.jpg";
import pia from "../assets/Pia_Project.jpg";
import newProjectImage from "../assets/Ai_resume_project.jpg";
import ecommerce from "../assets/new-e-commerce.jpg";

// Renamed Projects array to avoid conflict with component name
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
      "A professional dummy project website. Each component was crafted using best practices and modern web development techniques.",
    link: "https://mypia-hamid2312s-projects.vercel.app/",
    image: pia,
  },
  {
    title: "AI Resume Builder",
    description:
      "A recently completed project leveraging React.js for the frontend and open APIs to create a dynamic AI-powered resume builder.",
    link: "https://hamid2312.github.io/AiResumeBuilder/",
    image: newProjectImage,
  },
  {
    title: "E-Commerce Platform",
    description:
      "A dynamic e-commerce platform built with React.js, featuring a responsive design and integration with modern APIs.",
    link: "https://hamid2312.github.io/AiResumeBuilder/",
    image: ecommerce,
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
    hover: { scale: 1.15, rotate: 5, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.3, ease: "easeOut" } },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const carouselRef = useRef(null);

  useEffect(() => {
    const animationDuration = 10; // 10s for all screens

    if (inView) {
      controls.start({
        opacity: 1,
        x: "-50%", // Move from right to left
        transition: {
          opacity: { duration: 0.8 },
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: animationDuration,
            ease: "linear",
          },
        },
      });
    } else {
      controls.start({ opacity: 0, x: 0 });
    }
  }, [inView, controls]);

  // Handle hover to pause animation instantly
  const handleButtonHover = () => {
    controls.stop(); // Stop animation immediately
  };

  // Handle hover end to resume animation at original speed
  const handleButtonLeave = () => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: "-50%", // Resume right-to-left movement
        transition: {
          opacity: { duration: 0.8 },
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10, // Match original duration
            ease: "linear",
          },
        },
      });
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 py-12 sm:py-16 relative overflow-x-hidden" ref={ref}>
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
            className="flex gap-4 lg:gap-16" // Small gap (16px) on small screens, larger gap (64px) on large screens to show ~3 cards
            ref={carouselRef}
            animate={controls}
            style={{ width: "max-content" }} // Ensure carousel width is content-based to prevent scrollbar
          >
            {[...projectsData, ...projectsData].map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                className="card p-3 sm:p-4 relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg"
                variants={cardVariants}
                initial="hidden"
                animate="show"
                whileHover="hover"
                style={{ minWidth: "200px", maxWidth: "250px", flex: "0 0 auto" }} // Smaller card size on mobile
                className="card p-3 sm:p-4 relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-lg sm:min-w-[250px] sm:max-w-[300px]" // Responsive card width
              >
                <div className="absolute inset-0 bg-cyan-100/10 dark:bg-[#00FBF4]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="overflow-hidden rounded-md mb-3">
                  <motion.img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="w-full h-32 sm:h-40 md:h-48 object-cover object-center relative z-10" // Responsive image height
                    variants={imageVariants}
                    whileHover="hover"
                  />
                </div>
                <motion.h3
                  className="gradient-text text-base sm:text-lg font-bold mb-2 relative z-10"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline" aria-label={`View ${project.title} project`}>
                    {project.title}
                  </a>
                </motion.h3>
                <p className="text-xs sm:text-sm text-gray-700 dark:text-white font-light mb-3 relative z-10 line-clamp-3">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn text-sm text-black font-semibold hover:underline relative z-20"
                  aria-label={`Visit ${project.title} live site`}
                  onMouseEnter={handleButtonHover} // Pause animation instantly
                  onMouseLeave={handleButtonLeave} // Resume animation at original speed
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