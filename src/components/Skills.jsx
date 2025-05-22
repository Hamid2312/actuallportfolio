import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/javaScript.png";
import tailwindLogo from "../assets/tailwind.png";
import gitLogo from "../assets/git.png";
import reactLogo from "../assets/react.png";
import git from "../assets/git1.png";
import vite from "../assets/vite.png";
import parcel from "../assets/parcel.png";
import vercel from "../assets/VercelLogo.png";
import api from "../assets/ApiLogo.png";
import Testing from "../assets/TestingLogo.png";

const Skills = () => {
  const skills = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "Tailwind CSS", logo: tailwindLogo },
    { name: "GitHub", logo: gitLogo },
    { name: "React JS", logo: reactLogo },
    { name: "Git", logo: git },
    { name: "Vite", logo: vite },
    { name: "Parcel", logo: parcel },
    {name: "Vercel", logo: vercel},
    {name: "Api Integration", logo: api},
    {name: "Testing", logo: Testing},
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", type: "spring", bounce: 0.3 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 15px rgba(0, 183, 180, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
    hover: { scale: 1.15, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } },
  };

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 py-12 sm:py-16 relative overflow-hidden" ref={ref}>
      <div className="overlay" />
      <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
        <motion.div className="text-center mb-10 sm:mb-12" initial="hidden" animate={inView ? "show" : "hidden"}>
          <motion.h1
            className="gradient-text text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 relative"
            variants={headingVariants}
            whileHover={{ scale: 1.05 }}
          >
            My Skills
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-cyan-600 dark:bg-[#00FBF4] rounded-full" />
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-gray-700 dark:text-white font-light max-w-2xl mx-auto"
            variants={subheadingVariants}
          >
            Technologies and tools I’m proficient in, showcased with clarity.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-transparent border border-gray-200 dark:border-[#00FBF4]/30 rounded-xl p-3 sm:p-4 flex flex-col items-center relative overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-cyan-100/10 dark:bg-[#00FBF4]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <motion.img
                src={skill.logo}
                alt={`${skill.name} Logo`}
                className="w-10 h-10 sm:w-12 sm:h-12 mb-3 relative z-10 object-contain"
                variants={imageVariants}
                initial="hidden"
                animate="show"
                whileHover="hover"
              />
              <h3 className="gradient-text text-base sm:text-lg font-semibold text-center relative z-10">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;