import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import heroImg from "../assets/HamidImage2.png";

const HeroSection = () => {
  const [objPos, setObjPos] = useState("50% 20%");

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1536) setObjPos("50% 5%");
      else if (w >= 1280) setObjPos("50% 10%");
      else if (w >= 1024) setObjPos("50% 15%");
      else if (w >= 768) setObjPos("50% 22%");
      else setObjPos("50% 28%");
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="w-full bg-[#F7F7F7] pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 lg:pb-24 relative overflow-hidden dark:bg-[#000]">
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-20">

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

          <h2 className="text-[22px] sm:text-[26px] md:text-[28px] font-medium text-gray-700 dark:text-gray-100 leading-tight">
            Hi, I’m
          </h2>

          <h1 className="text-[34px] sm:text-[44px] md:text-[56px] lg:text-[64px] font-extrabold text-[#1E1E1E] dark:text-white leading-none mt-1">
            Hamid <span className="text-pink-600">Ali</span>
          </h1>

          <h3 className="text-[18px] sm:text-[22px] md:text-[26px] font-semibold text-gray-700 dark:text-gray-200 mt-3 mb-5">
            a{" "}
            <span className="text-pink-600">
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

          <p className="text-[14px] md:text-[15px] text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mb-6">
            I am a passionate developer specializing in building modern, fast, responsive and visually stunning web applications using React, Next.js and Tailwind CSS.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mb-6">
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
                className="
                  text-[28px] 
                  text-gray-700 dark:text-gray-200 
                  transition-all duration-300
                  hover:text-pink-600 
                  hover:scale-125 
                  hover:-translate-y-1
                  hover:drop-shadow-[0_0_20px_#db2777]
                "
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="w-full flex flex-col sm:flex-row items-center gap-4 mt-3 max-w-sm md:max-w-none">
            <a
              href="/Hamid-Ali-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center px-6 py-3 bg-pink-600 text-white text-[16px] rounded-md shadow-md hover:bg-pink-700 transition-all"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto text-center px-6 py-3 border border-pink-600 text-pink-600 text-[16px] rounded-md hover:bg-pink-600 hover:text-white transition-all"
            >
              Hire Me
            </a>
          </div>

          {/* Extra spacing on mobile */}
          <div className="block sm:hidden h-16"></div>
        </motion.div>

        {/* RIGHT IMAGE WITH 3D RING */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-[35%] flex justify-center items-center mt-8 sm:mt-12 lg:mt-0"
        >
          <div className="relative w-[220px] sm:w-[260px] md:w-[300px] lg:w-[380px] h-[320px] flex justify-center items-center">

            {/* 🌸 3D Pink Surround Animation */}
            <div className="threeD-ring">
              {Array.from({ length: 40 }).map((_, i) => {
                const angle = (360 / 40) * i;
                return (
                  <div
                    key={i}
                    className="ring-dot"
                    style={{
                      transform: `rotateY(${angle}deg) translateZ(150px)`,
                    }}
                  />
                );
              })}
            </div>

            <img
              src={heroImg}
              alt="Hamid Ali"
              className="relative z-20 w-[85%] sm:w-[80%] md:w-[78%] lg:w-[90%] object-contain drop-shadow-[0_0_25px_#db2777] sm:pt-4 md:pt-10 lg:pt-20"
              style={{ objectPosition: objPos }}
            />
          </div>
        </motion.div>
      </div>

      {/* 🌸 3D RING CSS */}
      <style>{`
        .threeD-ring {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 50%;
          left: 50%;
          transform-style: preserve-3d;
          transform: translate(-50%, -50%) rotateX(20deg);
          pointer-events: none;
          z-index: 18;
        }

        .ring-dot {
          position: absolute;
          width: 12px;
          height: 12px;
          background: #db2777;
          border-radius: 50%;
          box-shadow: 0 0 12px #db2777;
          animation: pulse 1.6s infinite ease-in-out;
        }

        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 1; }
          100% { transform: scale(0.8); opacity: 0.5; }
        }

        @media (max-width: 480px) {
          .threeD-ring { transform: translate(-50%, -50%) rotateX(25deg) scale(0.8); }
        }

        @media (max-width: 768px) {
          .threeD-ring { transform: translate(-50%, -50%) rotateX(20deg) scale(0.9); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
