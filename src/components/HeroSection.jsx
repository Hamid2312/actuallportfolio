import React, { useEffect, useState, useContext } from "react";
import Particles from "react-tsparticles";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext.jsx";
import profileImage from "../assets/profile2.jpg";
import cv from "../assets/updated_cv.pdf";

const HeroSection = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [displayText, setDisplayText] = useState("");
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [hasImageLoaded, setHasImageLoaded] = useState(false);

  // Typewriter effect for paragraph
  useEffect(() => {
    let currentIndex = 0;
    const typeWriter = () => {
      if (currentIndex < paragraph.length) {
        setDisplayText(paragraph.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, 40);
      }
    };
    typeWriter();
  }, []);

  // Time-based animation update
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(new Date().getSeconds());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const paragraph =
    "I’m a dedicated Frontend Developer skilled in cutting-edge web technologies, including HTML, CSS, JavaScript, and React.js. I’m here to transform your ideas into reality with innovation and creative solutions.";

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.9,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 1.2,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: theme === 'light' 
        ? "0 0 20px rgba(0, 183, 180, 0.7)" 
        : "0 0 20px rgba(0, 251, 244, 0.7)",
      transition: {
        duration: 0.3,
      },
    },
    pulse: {
      scale: [1, 1.07, 1],
      boxShadow: theme === 'light' 
        ? [
            "0 0 0 rgba(0, 183, 180, 0)",
            "0 0 20px rgba(0, 183, 180, 0.5)",
            "0 0 0 rgba(0, 183, 180, 0)",
          ] 
        : [
            "0 0 0 rgba(0, 251, 244, 0)",
            "0 0 20px rgba(0, 251, 244, 0.5)",
            "0 0 0 rgba(0, 251, 244, 0)",
          ],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const rightOrbitVariants = {
    animate: {
      rotate: [0, 360],
      opacity: [0.4, 1, 0.4],
      transition: {
        duration: 24,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const leftOrbitVariants = {
    animate: {
      scale: [1, 1.15, 1],
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 36,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const haloParticleVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 24,
        ease: "linear",
        repeat: Infinity,
      },
    },
    hover: {
      rotate: [0, 360],
      transition: {
        duration: 6,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const loaderVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 2,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="relative bg-gradient-to-br from-white to-gray-100 dark:bg-gradient-to-br dark:from-black dark:to-gray-900 mt-16 min-h-screen">
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 15px rgba(0, 183, 180, 0.6); }
            50% { box-shadow: 0 0 25px rgba(0, 183, 180, 0.8); }
          }
          .dark @keyframes glow {
            0%, 100% { box-shadow: 0 0 15px rgba(0, 251, 244, 0.6); }
            50% { box-shadow: 0 0 25px rgba(0, 251, 244, 0.8); }
          }
          .animate-blink {
            animation: blink 1s step-end infinite;
          }
          .gradient-text {
            background: linear-gradient(to right, #00B7B4, #7C3AED);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent; /* Ensure compatibility */
          }
          .dark .gradient-text {
            background: linear-gradient(to right, #00FBF4, #A78BFA);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent; /* Ensure compatibility */
          }
          .sky-border {
            position: relative;
            border: 4px solid #00B7B4;
            border-radius: 9999px;
            animation: glow 3s ease-in-out infinite;
          }
          .dark .sky-border {
            border: 4px solid #00FBF4;
          }
          .loader-ring {
            position: absolute;
            top: -8px;
            left: -8px;
            right: -8px;
            bottom: -8px;
            border: 6px solid transparent;
            border-top: 6px solid #00B7B4;
            border-radius: 50%;
            z-index: 15;
          }
          .dark .loader-ring {
            border-top: 6px solid #00FBF4;
          }
        `}
      </style>

      {/* Theme Toggle Button */}
      {/* <div className="absolute top-4 right-4 z-30">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600"
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          )}
        </button>
      </div> */}

      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${theme === 'light' ? '#F3F4F6 10%, white 100%' : '#1A1A1A 10%, black 100%'})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/40 dark:bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-100/10 to-transparent opacity-30 dark:bg-gradient-to-t dark:from-[#00FBF4]/10 dark:to-transparent" />
      </div>

      <div className="absolute inset-0 z-6">
        <Particles
          id="sunlight-particles"
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 25, density: { enable: true, value_area: 800 } },
              color: { value: theme === 'light' ? ["#E0F2FE", "#BAE6FD", "#00B7B4"] : ["#FFF9E6", "#E0FBFC", "#00FBF4"] },
              shape: { type: "circle" },
              opacity: {
                value: 0.5,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
              },
              size: {
                value: 2,
                random: { enable: true, minimumValue: 1 },
                anim: { enable: false },
              },
              move: {
                enable: true,
                speed: 3,
                direction: "bottom",
                random: true,
                straight: false,
                out_mode: "out",
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onHover: { enable: false },
                onClick: { enable: false },
              },
            },
            retina_detect: true,
          }}
        />
      </div>

      <div className="absolute inset-0 z-5">
        <Particles
          id="star-particles"
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 30, density: { enable: true, value_area: 1200 } },
              color: { value: theme === 'light' ? ["#00B7B4", "#4B5563", "#7C3AED"] : ["#00FBF4", "#FFFFFF", "#A78BFA"] },
              shape: { type: "star", polygon: { nb_sides: 5 } },
              opacity: {
                value: 0.6,
                random: true,
                anim: { enable: true, speed: 0.3, opacity_min: 0.2 },
              },
              size: {
                value: 5,
                random: { enable: true, minimumValue: 2 },
                anim: { enable: true, speed: 0.5, size_min: 2 },
              },
              move: {
                enable: true,
                speed: 1.5,
                direction: "none",
                random: true,
                out_mode: "out",
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onHover: { enable: true, mode: "bubble" },
                onClick: { enable: false },
              },
              modes: {
                bubble: { distance: 200, size: 7, duration: 2, opacity: 0.8 },
              },
            },
            retina_detect: true,
          }}
        />
      </div>

      <motion.div
        className="absolute -top-8 left-1/2 -translate-x-1/2 lg:top-1/3 lg:right-12 lg:left-auto lg:translate-x-0 transform -translate-y-1/2 z-8 w-40 h-40"
        animate={{ rotate: seconds * 15 }}
        transition={{ duration: 1, ease: "linear" }}
      >
        <div className="relative w-full h-full">
          <div
            className="absolute top-1/2 left-1/2 w-5 h-5 bg-cyan-600 dark:bg-[#00FBF4] rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{ boxShadow: theme === 'light' ? "0 0 20px rgba(0, 183, 180, 0.8), 0 0 40px rgba(0, 183, 180, 0.4)" : "0 0 20px rgba(0, 251, 244, 0.8), 0 0 40px rgba(0, 251, 244, 0.4)" }}
          />
          {[
            { angle: 0, color: theme === 'light' ? "#00B7B4" : "#00FBF4" },
            { angle: 72, color: theme === 'light' ? "#4B5563" : "#FFFFFF" },
            { angle: 144, color: theme === 'light' ? "#7C3AED" : "#A78BFA" },
            { angle: 216, color: theme === 'light' ? "#00B7B4" : "#00FBF4" },
            { angle: 288, color: theme === 'light' ? "#4B5563" : "#FFFFFF" },
          ].map(({ angle, color }, idx) => (
            <motion.div
              key={idx}
              className="absolute w-2.5 h-2.5 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transformOrigin: "center",
                x: 50 * Math.cos((angle * Math.PI) / 180),
                y: 50 * Math.sin((angle * Math.PI) / 180),
                background: color,
                boxShadow: `0 0 10px ${color}, 0 0 20px ${color}80`,
              }}
              variants={rightOrbitVariants}
              animate="animate"
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:top-2/3 lg:left-12 lg:bottom-auto lg:translate-x-0 transform -translate-y-1/2 z-8 w-32 h-32"
        animate={{ rotate: -seconds * 10 }}
        transition={{ duration: 1, ease: "linear" }}
      >
        <div className="relative w-full h-full">
          <motion.div
            className="absolute top-1/2 left-1/2 w-5 h-5 bg-gray-600 dark:bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{ boxShadow: theme === 'light' ? "0 0 20px rgba(75, 85, 99, 0.8)" : "0 0 20px rgba(255, 255, 255, 0.8)" }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
          />
          {[
            { angle: 0, radius: 40, color: theme === 'light' ? "#00B7B4" : "#00FBF4", offset: 0.8 },
            { angle: 60, radius: 35, color: theme === 'light' ? "#7C3AED" : "#A78BFA", offset: 1.2 },
            { angle: 120, radius: 45, color: theme === 'light' ? "#00B7B4" : "#00FBF4", offset: 0.9 },
            { angle: 180, radius: 40, color: theme === 'light' ? "#7C3AED" : "#A78BFA", offset: 1.1 },
            { angle: 240, radius: 38, color: theme === 'light' ? "#00B7B4" : "#00FBF4", offset: 0.7 },
            { angle: 300, radius: 42, color: theme === 'light' ? "#7C3AED" : "#A78BFA", offset: 1.0 },
          ].map(({ angle, radius, color, offset }, idx) => (
            <motion.div
              key={idx}
              className="absolute w-2 h-2 rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transformOrigin: "center",
                x: radius * offset * Math.cos((angle * Math.PI) / 180),
                y: radius * offset * Math.sin((angle * Math.PI) / 180),
                background: color,
                boxShadow: `0 0 8px ${color}, 0 0 15px ${color}80`,
              }}
              variants={leftOrbitVariants}
              animate="animate"
            />
          ))}
        </div>
      </motion.div>

      <div className="absolute inset-0 z-10">
        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 50, density: { enable: true, value_area: 1000 } },
              color: { value: theme === 'light' ? ["#00B7B4", "#7C3AED"] : ["#00FBF4", "#A78BFA"] },
              shape: { type: ["circle", "triangle", "star"], polygon: { nb_sides: 5 } },
              opacity: {
                value: 0.4,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0.15 },
              },
              size: {
                value: 3,
                random: true,
                anim: { enable: true, speed: 2, size_min: 1 },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: theme === 'light' ? "#7C3AED" : "#A78BFA",
                opacity: 0.2,
                width: 1,
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: true,
                out_mode: "out",
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onHover: { enable: true, mode: ["grab", "bubble"] },
                onClick: { enable: true, mode: "push" },
              },
              modes: {
                grab: { distance: 200, line_linked: { opacity: 0.5 } },
                bubble: { distance: 250, size: 5, duration: 2, opacity: 0.7 },
                push: { particles_nb: 2 },
              },
            },
            retina_detect: true,
          }}
        />
      </div>

      <motion.div
        className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-4rem)] flex items-center justify-center pt-20 sm:pt-24 pb-16 sm:pb-20 lg:pt-16 lg:pb-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="text-center max-w-2xl w-full scale-95 sm:scale-100">
          <motion.h1
            className="text-gray-900 dark:text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight"
            variants={headingVariants}
            style={{ textShadow: theme === 'light' ? "0 0 10px rgba(0, 183, 180, 0.5)" : "0 0 10px rgba(0, 251, 244, 0.5)" }}
          >
            Hi, I'm
          </motion.h1>
          <motion.span
            className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mb-4 gradient-text z-30"
            variants={nameVariants}
            style={{ 
              textShadow: theme === 'light' ? "0 0 20px rgba(0, 183, 180, 0.6)" : "0 0 20px rgba(0, 251, 244, 0.6)",
              position: 'relative',
            }}
            whileHover={{ scale: 1.05, textShadow: theme === 'light' ? "0 0 25px rgba(0, 183, 180, 0.8)" : "0 0 25px rgba(0, 251, 244, 0.8)" }}
          >
            Hafiz Hamid Ali
          </motion.span>
          <motion.div
            className="relative w-36 h-36 sm:w-48 sm:h-48 lg:w-64 lg:h-64 mx-auto mt-4 mb-6"
            variants={imageVariants}
            initial="hidden"
            animate="show"
          >
            <img
              src={profileImage}
              alt="Hafiz Hamid Ali Portrait"
              className="rounded-full sky-border object-cover w-full h-full z-20"
              onLoad={() => setHasImageLoaded(true)}
              onError={(e) => {
                if (!hasImageLoaded) {
                  console.error("Image failed to load:", e);
                  e.target.src = "https://via.placeholder.com/300";
                }
              }}
            />
            <motion.div
              className="loader-ring"
              variants={loaderVariants}
              animate="animate"
            />
            <motion.div
              className="absolute inset-0 z-10"
              animate="animate"
              variants={haloParticleVariants}
              whileHover="hover"
            >
              {[
                { angle: 0, color: theme === 'light' ? "#4B5563" : "#333333" },
                { angle: 45, color: theme === 'light' ? "#6B7280" : "#555555" },
                { angle: 90, color: theme === 'light' ? "#9CA3AF" : "#777777" },
                { angle: 135, color: theme === 'light' ? "#4B5563" : "#333333" },
                { angle: 180, color: theme === 'light' ? "#6B7280" : "#555555" },
                { angle: 225, color: theme === 'light' ? "#9CA3AF" : "#777777" },
                { angle: 270, color: theme === 'light' ? "#4B5563" : "#333333" },
                { angle: 315, color: theme === 'light' ? "#6B7280" : "#555555" },
              ].map(({ angle, color }, idx) => (
                <motion.div
                  key={idx}
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    transformOrigin: "center",
                    x: 25 * Math.cos((angle * Math.PI) / 180),
                    y: 25 * Math.sin((angle * Math.PI) / 180),
                    background: color,
                    boxShadow: `0 0 3px ${color}, 0 0 6px ${color}80`,
                  }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, delay: idx * 0.2 }}
                />
              ))}
            </motion.div>
          </motion.div>
          <motion.p
            className="text-gray-700 dark:text-white font-light text-sm sm:text-base md:text-lg lg:text-xl mb-6 mx-auto max-w-xl relative"
            variants={textVariants}
            style={{ textShadow: theme === 'light' ? "0 0 3px rgba(0, 0, 0, 0.4)" : "0 0 3px rgba(0, 0, 0, 0.4)" }}
          >
            {displayText}
            <span className="animate-blink">|</span>
          </motion.p>
          <div className="mb-6">
            <motion.a
              href={cv}
              download="Hafiz Hamid CV"
              target="_blank"
              className={`bg-cyan-600 dark:bg-[#00FBF4] text-white dark:text-black font-bold text-sm sm:text-base py-2 px-6 inline-block rounded-lg ${theme === 'light' ? 'sky-border' : ''}`}
              variants={buttonVariants}
              initial="hidden"
              animate={["show", "pulse"]}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              aria-label="Download Hafiz Hamid's CV"
            >
              Download CV
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;