import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import resumePdf from "../assets/Hamid_Resume.pdf";
import DeveloperAnimation from "./DeveloperAnimation";

const HeroSection = () => {

  return (
    <section className="w-full bg-[#F7F7F7] dark:bg-[#000] pt-28 sm:pt-28 md:pt-32 lg:pt-36 pb-8 sm:pb-12 md:pb-16 lg:pb-24 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-2 sm:gap-6 lg:gap-10">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start text-center md:text-left w-full lg:w-1/2"
        >
          <p className="hidden lg:block text-[13px] tracking-[3px] uppercase text-gray-600 dark:text-gray-300 mb-2">
            Welcome to my world
          </p>

          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-medium text-gray-700 dark:text-gray-100 leading-tight">
            Hi, I'm
          </h2>

          <h1 className="text-[32px] sm:text-[42px] md:text-[54px] lg:text-[64px] font-extrabold text-[#1E1E1E] dark:text-white leading-none mt-1">
            Hamid <span className="text-primary-600">Ali</span>
          </h1>

          <h3 className="text-[16px] sm:text-[20px] md:text-[24px] font-semibold text-gray-700 dark:text-gray-200 mt-2 mb-4">
            a{" "}
            <span className="text-primary-600">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "React.js Developer",
                  "UI/UX Designer",
                  "Web Application Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h3>

          <p className="text-[13px] sm:text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mb-5">
            I am a passionate developer specializing in building modern, fast, responsive and visually stunning web applications using React, Next.js and Tailwind CSS.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-3 sm:gap-4 mb-5">
            {[
              { icon: <FaGithub />, link: "https://github.com/" },
              { icon: <FaLinkedin />, link: "https://linkedin.com/" },
              { icon: <FaFacebook />, link: "https://facebook.com/" },
              { icon: <SiGmail />, link: "mailto:test@gmail.com" },
              { icon: <FaWhatsapp />, link: "https://wa.me/0000000000" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="text-[24px] sm:text-[28px] text-gray-700 dark:text-gray-200 transition-all duration-300 hover:text-primary-600 hover:scale-125 hover:-translate-y-1 hover:drop-shadow-[0_0_20px_var(--primary-hex)]"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="w-full flex flex-col sm:flex-row items-center gap-3 sm:gap-4 max-w-xs sm:max-w-none">
            <a
              href={resumePdf}
              download="Hamid_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center px-6 py-2.5 sm:py-3 bg-primary-600 text-white text-[15px] sm:text-[16px] rounded-md shadow-md hover:bg-primary-700 transition-all"
            >
              Download CV
            </a>

            <a
              href="contact"
              className="w-full sm:w-auto text-center px-6 py-2.5 sm:py-3 border border-primary-600 text-primary-600 text-[15px] sm:text-[16px] rounded-md hover:bg-primary-600 hover:text-white transition-all"
            >
              Hire Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT – Developer Animation */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-[50%] flex justify-center items-center mt-2 sm:mt-4 lg:mt-0"
        >
          {/* Ambient radial glow – scales with the container */}
          <div
            style={{
              position: 'absolute',
              width: '70%',
              paddingBottom: '70%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.18) 0%, transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* Fluid animation wrapper — uses % so it's never too big on small screens */}
          <div
            style={{ zIndex: 1, position: 'relative' }}
            className="w-[72vw] max-w-[280px] sm:max-w-[380px] md:max-w-[460px] lg:max-w-[540px] xl:max-w-[580px]"
          >
            <DeveloperAnimation />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
