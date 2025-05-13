import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MyExperience = () => {
  const experiences = [
    {
      title: "Learning",
      company: "Zaff institue",
      duration: "December 2023 - February 2024",
      description:
        "I learned web development from this institue and recieved certification from there. I learned lot of things and explor many things as a good leaner and start internship there.",
    },
    {
      title: "Frontend Developer",
      company: "Zaff Institute in Arfa Tower",
      duration: "February 2024 - September 2024",
      description:
        "Developed responsive, interactive websites using React, HTML, CSS, and JavaScript. I worked on different projects there.",
    },
    {
      title: "Freelancer - Frontend Developer",
      company: "Self-employed",
      duration: "July 2024 - September 2024",
      description:
        "Worked as a freelancer, building custom websites for clients using React, HTML, CSS, and JavaScript. Focused on providing high-quality, user-friendly interfaces for small businesses.",
    },
    {
      title: "Frontend Developer",
      company: "Famefing Technologies",
      duration: "October 2024 - present",
      description:
        "Leading the development of modern web applications with React and TypeScript, focusing on performance optimization and user-friendly interfaces.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 10 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(0, 251, 244, 0.5)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div
      id="my-experience-section"
      className="bg-gradient-to-br from-black to-gray-900 min-h-screen py-12 sm:py-16 flex flex-col justify-center items-center relative overflow-hidden"
      ref={ref}
    >
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00FBF4]/10 to-transparent opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <motion.h1
            className="text-[#00FBF4] text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 relative"
            variants={headingVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            whileHover={{ scale: 1.05, textShadow: "0 0 15px rgba(0, 251, 244, 0.7)" }}
          >
            My Experience
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#00FBF4] rounded-full" />
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-white font-light max-w-2xl mx-auto"
            variants={subheadingVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            A brief look at my professional journey and impactful projects.
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="bg-black/50 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-[#00FBF4]/50 shadow-lg relative overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              whileHover="hover"
            >
              {/* Subtle Card Glow Effect */}
              <div className="absolute inset-0 bg-[#00FBF4]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              
              <motion.h3
                className="text-lg sm:text-xl lg:text-2xl text-[#00FBF4] font-bold mb-2 relative z-10"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                {experience.title}
              </motion.h3>
              <p className="text-base sm:text-lg text-white font-semibold mb-1 relative z-10">
                {experience.company}
              </p>
              <p className="text-sm sm:text-base text-gray-300 mb-4 relative z-10">
                {experience.duration}
              </p>
              <p className="text-sm sm:text-base text-white font-light relative z-10">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MyExperience;