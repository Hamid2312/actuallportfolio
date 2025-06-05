import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
    { name: "Vercel", logo: vercel },
    { name: "Api Integration", logo: api },
    { name: "Testing", logo: Testing },
  ];

  // Split skills into two rows (6 skills each)
  const upperRowSkills = skills.slice(0, 6);
  const lowerRowSkills = skills.slice(6, 12);

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

  const upperControls = useAnimation();
  const lowerControls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const upperCarouselRef = useRef(null);
  const lowerCarouselRef = useRef(null);

  useEffect(() => {
    const animationDuration = 8; // 8s for both rows, slightly slower than Projects.jsx

    if (inView) {
      // Both rows: right to left
      upperControls.start({
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
      lowerControls.start({
        opacity: 1,
        x: "-50%", // Move from right to left, same direction as upper row
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
      upperControls.start({ opacity: 0, x: 0 });
      lowerControls.start({ opacity: 0, x: 0 });
    }
  }, [inView, upperControls, lowerControls]);

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

        <div className="relative overflow-x-hidden">
          {/* Upper Row Carousel */}
          <motion.div
            className="flex gap-4 lg:gap-16 mb-4" // Small gap (16px) on small screens, larger gap (64px) on large screens
            ref={upperCarouselRef}
            animate={upperControls}
            style={{ width: "max-content" }} // Prevent scrollbar
          >
            {[...upperRowSkills, ...upperRowSkills].map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className="bg-transparent border border-gray-200 dark:border-[#00FBF4]/30 rounded-xl p-3 sm:p-4 flex flex-col items-center relative overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                animate="show"
                whileHover="hover"
                style={{ minWidth: "150px", maxWidth: "200px", flex: "0 0 auto" }}
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

          {/* Lower Row Carousel */}
          <motion.div
            className="flex gap-4 lg:gap-16" // Small gap (16px) on small screens, larger gap (64px) on large screens
            ref={lowerCarouselRef}
            animate={lowerControls}
            style={{ width: "max-content" }} // Prevent scrollbar
          >
            {[...lowerRowSkills, ...lowerRowSkills].map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                className="bg-transparent border border-gray-200 dark:border-[#00FBF4]/30 rounded-xl p-3 sm:p-4 flex flex-col items-center relative overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                animate="show"
                whileHover="hover"
                style={{ minWidth: "150px", maxWidth: "200px", flex: "0 0 auto" }}
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
    </div>
  );
};

export default Skills;