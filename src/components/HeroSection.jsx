import React, { useEffect, useState } from "react";
import  {motion}  from "framer-motion";

import backgroundPhoto from "../assets/portfolio6.jpg"; // Static import
import cvFile from "../assets/Hafiz_Hamid_CV.pdf"; // Static import
import "./HeroSection.css";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const paragraph =
    "I’m a dedicated Frontend Developer skilled in cutting-edge web technologies, including HTML, CSS, JavaScript, and React.js. I’m here to transform your ideas into reality with innovation and creative solutions.";

  useEffect(() => {
    let currentIndex = 0;
    const typeWriter = () => {
      if (currentIndex < paragraph.length) {
        setDisplayText(paragraph.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, 10);
      }
    };
    typeWriter();
  }, []);

  return (
    <div
      className="relative"
      style={{
        backgroundColor: "#E6E6FA",
        height: "100vh",
        paddingTop: "60px",
      }}
    >
      <div
        className="flex justify-center items-center relative"
        style={{
          backgroundImage: `url(${backgroundPhoto})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          height: "calc(100vh - 60px)",
          width: "100%",
          margin: 0,
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-65"
          style={{ zIndex: 1 }}
        ></div>
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-12 relative fadeIn"
          style={{ zIndex: 2 }}
        >
          <motion.div
            className="text-center md:text-left md:w-2/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.h1
              className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-wide text-shadow-md mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Hi, I'm{" "}
              <span
                className="text-[#00FBF4] font-semibold text-4xl sm:text-5xl md:text-6xl inline-block mt-6 animate-glow"
                style={{
                  animation: "glow 2s infinite",
                  textShadow: "0 0 5px #00FBF4, 0 0 10px #00FBF4, 0 0 20px #00FBF4",
                }}
              >
                Hafiz Hamid Ali
              </span>
            </motion.h1>
            <motion.p
              className="text-white font-serif text-lg sm:text-xl md:text-xl mt-4 font-medium leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {displayText}
            </motion.p>
            <div className="flex flex-col md:flex-row gap-4">
            <motion.a
  href={cvFile}
  download="Hafiz_Hamid_CV.pdf"
  className="bg-transparent border-2 border-[#00FBF4] text-[#00FBF4] font-bold text-lg leading-relaxed py-4 px-6 md:py-4 md:px-8 rounded-full shadow-lg hover:bg-transparent hover:shadow-xl hover:scale-110 transition-all duration-300 
  sm:ml-16 mx-auto sm:mx-0"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Download CV
</motion.a>


            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
