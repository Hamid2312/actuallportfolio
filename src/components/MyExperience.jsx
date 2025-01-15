import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MyExperience = () => {
  const experiences = [
    {
      title: "Learning",
      company: "Zaff institue",
      duration: "December 2023 to February",
      description:
        "I learned web development from this institue and recieved certification from there. I learned lot of things and explor many things as a good leaner and start intership there.",
    },
    {
      title: "Frontend Developer",
      company: "Famefing Technologies",
      duration: "Oct-2024 to present",
      description:
        "Leading the development of modern web applications with React and TypeScript, focusing on performance optimization and user-friendly interfaces.",
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
      className="bg-black min-h-screen py-16 flex flex-col justify-center items-center"
      ref={ref}
    >
      <div className="container mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <motion.h1
            className="text-[#00FBF4] text-4xl sm:text-5xl font-bold mb-4 hover:text-white hover:shadow-lg hover:shadow-[#00FBF4] transition duration-300"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
            transition={{ duration: 1 }}
          >
            My Experience
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-white font-light mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            A brief look at my professional journey and the impactful projects I’ve worked on.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className={`bg-[#0f0f0f] p-6 rounded-xl shadow-lg border border-[#00FBF4] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,251,244,0.6)] ${
                index === 3 ? "mx-auto" : ""
              }`}
              variants={itemVariants}
            >
              <motion.h3
                className="text-2xl text-[#00FBF4] font-bold mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {experience.title}
              </motion.h3>
              <p className="text-xl text-white font-semibold mb-2">
                {experience.company}
              </p>
              <p className="text-md text-gray-300 mb-4">{experience.duration}</p>
              <p className="text-md text-white font-light">
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
