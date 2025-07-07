import React, { useEffect } from "react";
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
    { name: "API Integration", logo: api },
    { name: "Testing", logo: Testing },
  ];

  const firstRow = skills.slice(0, 6);
  const secondRow = skills.slice(6, 12);

  const upperControls = useAnimation();
  const lowerControls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    const speed = 10; // Slower speed for smoother scroll
    if (inView) {
      upperControls.start({
        opacity: 1,
        x: "-50%",
        transition: {
          x: {
            duration: speed,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
          opacity: { duration: 0.5 },
        },
      });
      lowerControls.start({
        opacity: 1,
        x: "-50%",
        transition: {
          x: {
            duration: speed,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
          opacity: { duration: 0.5 },
        },
      });
    } else {
      upperControls.start({ opacity: 0, x: 0 });
      lowerControls.start({ opacity: 0, x: 0 });
    }
  }, [inView, upperControls, lowerControls]);

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: 10 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.7, ease: "easeOut", type: "spring", bounce: 0.3 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 8px 30px rgba(0, 183, 180, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 0 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      boxShadow: "0 0 15px rgba(0, 251, 244, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      className="relative bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden"
      ref={ref}
    >
      <style>
        {`
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 15px rgba(0, 183, 180, 0.6); }
            50% { box-shadow: 0 0 25px rgba(0, 251, 244, 0.8); }
          }
          .dark @keyframes glow {
            0%, 100% { box-shadow: 0 0 15px rgba(0, 251, 244, 0.6); }
            50% { box-shadow: 0 0 25px rgba(0, 251, 244, 0.8); }
          }
          @keyframes float {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-10px) scale(1.05); }
            100% { transform: translateY(0) scale(1); }
          }
          .gradient-text {
            background: linear-gradient(to right, #00B7B4, #7C3AED);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
          }
          .dark .gradient-text {
            background: linear-gradient(to right, #00FBF4, #A78BFA);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
          }
          .noise-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.05;
            z-index: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          }
          .gradient-sphere {
            position: absolute;
            border-radius: 50%;
            filter: blur(50px);
            opacity: 0.3;
          }
          .sphere-1 {
            width: 30vw;
            max-width: 300px;
            height: 30vw;
            max-height: 300px;
            background: linear-gradient(45deg, rgba(0, 183, 180, 0.4), rgba(124, 58, 237, 0.3));
            top: -5%;
            left: -5%;
            animation: float 12s ease-in-out infinite alternate;
          }
          .sphere-2 {
            width: 25vw;
            max-width: 250px;
            height: 25vw;
            max-height: 250px;
            background: linear-gradient(135deg, rgba(255, 58, 130, 0.4), rgba(0, 251, 244, 0.3));
            bottom: -10%;
            right: -5%;
            animation: float 15s ease-in-out infinite alternate;
            animation-delay: 2s;
          }
        `}
      </style>

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="noise-overlay" />
        <div className="gradient-sphere sphere-1" />
        <div className="gradient-sphere sphere-2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={headingVariants}
        >
          <motion.h2
            className="gradient-text text-3xl sm:text-4xl lg:text-5xl font-extrabold relative mb-4"
            whileHover={{ scale: 1.05, textShadow: "0 0 15px rgba(0, 251, 244, 0.5)" }}
            transition={{ duration: 0.3 }}
          >
            My Skills
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-cyan-600 dark:bg-[#00FBF4] rounded-full" />
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-white/80 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Tools & technologies I work with every day.
          </motion.p>
        </motion.div>

        {/* Upper Row */}
        <div className="relative overflow-x-hidden mb-8">
          <motion.div
            className="flex gap-6 sm:gap-8"
            animate={upperControls}
            style={{ width: "max-content" }}
          >
            {[...firstRow, ...firstRow].map((skill, i) => (
              <motion.div
                key={`${skill.name}-${i}`}
                className="relative bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-[#00FBF4]/20 rounded-xl backdrop-blur-md shadow-xl p-5 sm:p-6 min-w-[140px] max-w-[160px] text-center group"
                variants={cardVariants}
                initial="hidden"
                animate="show"
                whileHover="hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/10 to-purple-100/10 dark:from-[#00FBF4]/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 object-contain border-2 border-cyan-600 dark:border-[#00FBF4] rounded-full"
                  variants={logoVariants}
                  initial="hidden"
                  animate="show"
                  whileHover="hover"
                  loading="lazy"
                />
                <motion.h3
                  className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {skill.name}
                </motion.h3>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Lower Row */}
        <div className="relative overflow-x-hidden">
          <motion.div
            className="flex gap-6 sm:gap-8"
            animate={lowerControls}
            style={{ width: "max-content" }}
          >
            {[...secondRow, ...secondRow].map((skill, i) => (
              <motion.div
                key={`${skill.name}-${i}`}
                className="relative bg-white/90 dark:bg-gray-800/90 border border-gray-200/50 dark:border-[#00FBF4]/20 rounded-xl backdrop-blur-md shadow-xl p-5 sm:p-6 min-w-[140px] max-w-[160px] text-center group"
                variants={cardVariants}
                initial="hidden"
                animate="show"
                whileHover="hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/10 to-purple-100/10 dark:from-[#00FBF4]/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 object-contain border-2 border-cyan-600 dark:border-[#00FBF4] rounded-full"
                  variants={logoVariants}
                  initial="hidden"
                  animate="show"
                  whileHover="hover"
                  loading="lazy"
                />
                <motion.h3
                  className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {skill.name}
                </motion.h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;