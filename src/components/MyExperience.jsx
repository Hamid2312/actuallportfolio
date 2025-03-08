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
        staggerChildren: 0.3,
        duration: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
    id="my-experience-section"
    className="bg-black min-h-screen py-10 flex flex-col justify-center items-center"
    ref={ref}
  >
    <div className="container mx-auto px-4 sm:px-8">
      <div className="text-center mb-8">
        <motion.h1
          className="text-[#00FBF4] text-3xl sm:text-5xl font-bold mb-4 hover:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }}
          transition={{ duration: 1 }}
        >
          My Experience
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl text-white font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A brief look at my professional journey and impactful projects.
        </motion.p>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="bg-[#0f0f0f] p-4 sm:p-6 rounded-xl shadow-lg border border-[#00FBF4] hover:scale-105"
            variants={itemVariants}
          >
            <motion.h3 className="text-xl sm:text-2xl text-[#00FBF4] font-bold mb-2">
              {experience.title}
            </motion.h3>
            <p className="text-base sm:text-lg text-white font-semibold mb-1">
              {experience.company}
            </p>
            <p className="text-sm sm:text-md text-gray-300 mb-4">
              {experience.duration}
            </p>
            <p className="text-sm sm:text-md text-white font-light">
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
