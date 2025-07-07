import React, { useEffect, useState, useContext } from "react";
import Particles from "react-tsparticles";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext.jsx";
import profileImage from "../assets/profile2.jpg";
import cv from "../assets/Hamid's cv.pdf";

const HeroSection = () => {
  const { theme } = useContext(ThemeContext);
  const [displayText, setDisplayText] = useState("");
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [hasImageLoaded, setHasImageLoaded] = useState(false);

  // Typewriter effect for paragraph
  useEffect(() => {
    let currentIndex = 0;
    const paragraph =
      "I’m a dedicated Frontend Developer skilled in cutting-edge web technologies, including HTML, CSS, JavaScript, and React.js. I’m here to transform your ideas into reality with innovation and creative solutions.";
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
      y: -2,
      boxShadow: theme === "light"
        ? "0 6px 25px rgba(255, 58, 130, 0.4)"
        : "0 6px 25px rgba(0, 251, 244, 0.4)",
      transition: { duration: 0.3 },
    },
    pulse: {
      scale: [1, 1.07, 1],
      boxShadow: theme === "light"
        ? [
            "0 0 0 rgba(255, 58, 130, 0)",
            "0 0 20px rgba(255, 58, 130, 0.5)",
            "0 0 0 rgba(255, 58, 130, 0)",
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

  // Generate particles for .particles-container
  const particles = Array.from({ length: 20 }).map((_, idx) => ({
    id: idx,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 5,
    delay: Math.random() * 5,
  }));

  return (
    <div className="relative bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 mt-16 min-h-screen overflow-hidden">
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
          @keyframes float-1 {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(10%, 10%) scale(1.1); }
          }
          @keyframes float-2 {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(-10%, -5%) scale(1.15); }
          }
          @keyframes float-3 {
            0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
            100% { transform: translate(-5%, 10%) scale(1.05); opacity: 0.6; }
          }
          @keyframes pulse {
            0% { opacity: 0.3; transform: translate(-50%, -50%) scale(0.9); }
            100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.1); }
          }
          @keyframes particle-float {
            0% { transform: translateY(0); opacity: 0; }
            50% { opacity: 0.3; }
            100% { transform: translateY(-100vh); opacity: 0; }
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
          .sky-border {
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
          .gradient-sphere {
            position: absolute;
            border-radius: 50%;
            filter: blur(60px);
          }
          .sphere-1 {
            width: 40vw;
            max-width: 400px;
            height: 40vw;
            max-height: 400px;
            background: linear-gradient(40deg, rgba(255, 0, 128, 0.8), rgba(255, 102, 0, 0.4));
            top: -10%;
            left: -10%;
            animation: float-1 15s ease-in-out infinite alternate;
          }
          .sphere-2 {
            width: 45vw;
            max-width: 450px;
            height: 45vw;
            max-height: 450px;
            background: linear-gradient(240deg, rgba(72, 0, 255, 0.8), rgba(0, 183, 255, 0.4));
            bottom: -20%;
            right: -10%;
            animation: float-2 18s ease-in-out infinite alternate;
          }
          .sphere-3 {
            width: 30vw;
            max-width: 300px;
            height: 30vw;
            max-height: 300px;
            background: linear-gradient(120deg, rgba(133, 89, 255, 0.5), rgba(98, 216, 249, 0.3));
            top: 60%;
            left: 20%;
            animation: float-3 20s ease-in-out infinite alternate;
          }
          .noise-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.05;
            z-index: 5;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          }
          .grid-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: 40px 40px;
            background-image: 
              linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            z-index: 2;
          }
          .glow {
            position: absolute;
            width: 40vw;
            max-width: 500px;
            height: 40vh;
            max-height: 300px;
            background: radial-gradient(circle, rgba(72, 0, 255, 0.15), transparent 70%);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
            animation: pulse 8s infinite alternate;
            filter: blur(30px);
          }
          .particle {
            position: absolute;
            background: white;
            border-radius: 50%;
            pointer-events: none;
            animation: particle-float var(--duration) linear infinite;
            animation-delay: var(--delay);
            width: var(--size);
            height: var(--size);
            left: var(--x);
            top: var(--y);
          }
        `}
      </style>

      {/* Background Elements */}
      <div className="gradient-background absolute inset-0 z-1">
        <div className="gradient-sphere sphere-1" />
        <div className="gradient-sphere sphere-2" />
        <div className="gradient-sphere sphere-3" />
        <div className="noise-overlay" />
        <div className="grid-overlay" />
        <div className="glow" />
      </div>

      {/* Particles Container */}
      <div className="particles-container absolute inset-0 z-3">
        {particles.map(({ id, size, x, y, duration, delay }) => (
          <div
            key={id}
            className="particle"
            style={{
              "--size": `${size}px`,
              "--x": `${x}%`,
              "--y": `${y}%`,
              "--duration": `${duration}s`,
              "--delay": `${delay}s`,
            }}
          />
        ))}
      </div>

      {/* Existing Background Layers */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${
            theme === "light" ? "#F3F4F6 10%, white 100%" : "#1A1A1A 10%, black 100%"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-white/40 dark:bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-100/10 to-transparent opacity-30 dark:bg-gradient-to-t dark:from-[#00FBF4]/10 dark:to-transparent" />
      </div>

      {/* Existing Particle Layers */}
      <div className="absolute inset-0 z-6">
        <Particles
          id="sunlight-particles"
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 25, density: { enable: true, value_area: 800 } },
              color: { value: theme === "light" ? ["#E0F2FE", "#BAE6FD", "#00B7B4"] : ["#FFF9E6", "#E0FBFC", "#00FBF4"] },
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
              color: { value: theme === "light" ? ["#00B7B4", "#4B5563", "#7C3AED"] : ["#00FBF4", "#FFFFFF", "#A78BFA"] },
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
      <div className="absolute inset-0 z-10">
        <Particles
          id="tsparticles"
          options={{
            fullScreen: { enable: false },
            particles: {
              number: { value: 50, density: { enable: true, value_area: 1000 } },
              color: { value: theme === "light" ? ["#00B7B4", "#7C3AED"] : ["#00FBF4", "#A78BFA"] },
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
                color: theme === "light" ? "#7C3AED" : "#A78BFA",
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

      {/* Orbiting Elements */}
      <motion.div
        className="absolute -top-8 left-1/2 -translate-x-1/2 lg:top-1/3 lg:right-12 lg:left-auto lg:translate-x-0 transform -translate-y-1/2 z-8 w-40 h-40"
        animate={{ rotate: seconds * 15 }}
        transition={{ duration: 1, ease: "linear" }}
      >
        <div className="relative w-full h-full">
          <div
            className="absolute top-1/2 left-1/2 w-5 h-5 bg-cyan-600 dark:bg-[#00FBF4] rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{
              boxShadow:
                theme === "light"
                  ? "0 0 20px rgba(0, 183, 180, 0.8), 0 0 40px rgba(0, 183, 180, 0.4)"
                  : "0 0 20px rgba(0, 251, 244, 0.8), 0 0 40px rgba(0, 251, 244, 0.4)",
            }}
          />
          {[
            { angle: 0, color: theme === "light" ? "#00B7B4" : "#00FBF4" },
            { angle: 72, color: theme === "light" ? "#4B5563" : "#FFFFFF" },
            { angle: 144, color: theme === "light" ? "#7C3AED" : "#A78BFA" },
            { angle: 216, color: theme === "light" ? "#00B7B4" : "#00FBF4" },
            { angle: 288, color: theme === "light" ? "#4B5563" : "#FFFFFF" },
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
            style={{
              boxShadow: theme === "light" ? "0 0 20px rgba(75, 85, 99, 0.8)" : "0 0 20px rgba(255, 255, 255, 0.8)",
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
          />
          {[
            { angle: 0, radius: 40, color: theme === "light" ? "#00B7B4" : "#00FBF4", offset: 0.8 },
            { angle: 60, radius: 35, color: theme === "light" ? "#7C3AED" : "#A78BFA", offset: 1.2 },
            { angle: 120, radius: 45, color: theme === "light" ? "#00B7B4" : "#00FBF4", offset: 0.9 },
            { angle: 180, radius: 40, color: theme === "light" ? "#7C3AED" : "#A78BFA", offset: 1.1 },
            { angle: 240, radius: 38, color: theme === "light" ? "#00B7B4" : "#00FBF4", offset: 0.7 },
            { angle: 300, radius: 42, color: theme === "light" ? "#7C3AED" : "#A78BFA", offset: 1.0 },
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

      {/* Main Content */}
      <motion.div
        className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-4rem)] flex items-center justify-center pt-20 sm:pt-24 pb-16 sm:pb-20 lg:pt-16 lg:pb-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="text-center max-w-lg sm:max-w-xl lg:max-w-2xl w-full scale-90 sm:scale-95 lg:scale-100">
          <motion.h1
            className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight gradient-text"
            variants={headingVariants}
          >
            Hi, I'm
          </motion.h1>
          <motion.span
            className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl block mb-4 gradient-text"
            variants={nameVariants}
            whileHover={{
              scale: 1.05,
              textShadow: theme === "light" ? "0 0 25px rgba(0, 183, 180, 0.8)" : "0 0 25px rgba(0, 251, 244, 0.8)",
            }}
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
                { angle: 0, color: theme === "light" ? "#4B5563" : "#333333" },
                { angle: 45, color: theme === "light" ? "#6B7280" : "#555555" },
                { angle: 90, color: theme === "light" ? "#9CA3AF" : "#777777" },
                { angle: 135, color: theme === "light" ? "#4B5563" : "#333333" },
                { angle: 180, color: theme === "light" ? "#6B7280" : "#555555" },
                { angle: 225, color: theme === "light" ? "#9CA3AF" : "#777777" },
                { angle: 270, color: theme === "light" ? "#4B5563" : "#333333" },
                { angle: 315, color: theme === "light" ? "#6B7280" : "#555555" },
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
            className="text-gray-700 dark:text-white/80 font-light text-sm sm:text-base md:text-lg lg:text-xl mb-6 mx-auto max-w-md sm:max-w-lg lg:max-w-xl"
            variants={textVariants}
            style={{
              textShadow: theme === "light" ? "0 0 3px rgba(0, 0, 0, 0.4)" : "0 0 3px rgba(0, 0, 0, 0.4)",
            }}
          >
            {displayText}
            <span className="animate-blink">|</span>
          </motion.p>
          <motion.a
            href={cv}
            download="Hafiz Hamid CV"
            target="_blank"
            className="bg-gradient-to-r from-[#ff3a82] to-[#5233ff] text-white font-semibold text-sm sm:text-base py-2.5 px-6 rounded-full uppercase tracking-wide shadow-lg"
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
      </motion.div>
    </div>
  );
};

export default HeroSection;