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
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        bounce: 0.4,
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 0 25px rgba(0, 251, 244, 0.6)",
      transition: {
        duration: 0.3,
      },
    },
  };

  const imageVariants = {
    hover: {
      rotate: 360,
      scale: 1.2,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
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
      className="bg-gradient-to-br from-black to-gray-900 py-16 sm:py-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00FBF4]/10 to-transparent opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.h1
            className="text-[#00FBF4] text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 relative"
            variants={headingVariants}
            whileHover={{ scale: 1.05, textShadow: "0 0 15px rgba(0, 251, 244, 0.7)" }}
          >
            My Skills
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#00FBF4] rounded-full" />
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-white font-light max-w-2xl mx-auto"
            variants={subheadingVariants}
          >
            These are the technologies and tools I’m proficient in.
          </motion.p>
        </motion.div>

        {/* Skills List */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-black/50 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-[#00FBF4]/50 shadow-lg relative overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Subtle Card Glow Effect */}
              <div className="absolute inset-0 bg-[#00FBF4]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div
                className="flex justify-center items-center w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 bg-[#000000]/80 rounded-full shadow-inner"
                whileHover="hover"
              >
                <motion.img
                  src={skill.logo}
                  alt={`${skill.name} Logo`}
                  className="w-12 h-12 sm:w-16 sm:h-16 relative z-10"
                  variants={imageVariants}
                />
              </motion.div>

              <h3 className="text-lg sm:text-xl lg:text-2xl text-[#00FBF4] font-bold text-center relative z-10">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;