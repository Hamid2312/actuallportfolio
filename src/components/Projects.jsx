import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Famefing from "../assets/Famefing_project_image.jpg";
import pia from "../assets/Pia_Project.jpg";
import newProjectImage from "../assets/Ai_resume_project.jpg";

const Projects = () => {
  const projects = [
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
  ];

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

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 py-16 sm:py-20 relative overflow-hidden" ref={ref}>
      <div className="overlay" />
      <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
        <motion.div className="text-center mb-12 sm:mb-16" initial="hidden" animate={inView ? "show" : "hidden"}>
          <motion.h1
            className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 relative"
            variants={headingVariants}
            whileHover={{ scale: 1.05 }}
          >
            My Projects
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-cyan-600 dark:bg-[#00FBF4] rounded-full" />
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-white font-light max-w-2xl mx-auto"
            variants={subheadingVariants}
          >
            Here are a few professional projects showcasing my skills in web development.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card p-4 sm:p-6 relative overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-cyan-100/10 dark:bg-[#00FBF4]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="overflow-hidden rounded-md mb-4">
                <motion.img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className="w-full h-48 sm:h-60 object-cover relative z-10"
                  variants={imageVariants}
                  whileHover="hover"
                />
              </div>
              <motion.h3
                className="gradient-text text-lg sm:text-xl lg:text-2xl font-bold mb-2 relative z-10"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline" aria-label={`View ${project.title} project`}>
                  {project.title}
                </a>
              </motion.h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white font-light mb-4 relative z-10">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn relative z-10"
                aria-label={`Visit ${project.title} live site`}
              >
                View Project
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;