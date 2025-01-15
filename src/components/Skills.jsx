import React from "react";
import  {useInView}  from "react-intersection-observer";
import  {motion}  from "framer-motion"; // For animations
import htmlLogo from "../assets/html.png"; // Correct image import
import cssLogo from "../assets/css.png"; // Correct image import
import jsLogo from "../assets/javaScript.png"; // Correct image import
import tailwindLogo from "../assets/tailwind.png"; // Correct image import
import gitLogo from "../assets/git.png"; // Correct image import
import reactLogo from "../assets/react.png"; // Correct image import
import git from "../assets/git1.png";
import vite from "../assets/vite.png";
import parcel from "../assets/parcel.png"

const Skills = () => {
  const skills = [
    { name: "HTML", logo: htmlLogo },  // Direct assignment
    { name: "CSS", logo: cssLogo },  // Direct assignment
    { name: "JavaScript", logo: jsLogo },  // Direct assignment
    { name: "Tailwind CSS", logo: tailwindLogo },  // Direct assignment
    { name: " GitHub", logo: gitLogo },  // Direct assignment
    { name: "React JS", logo: reactLogo },  // Direct assignment
    { name: "git1", logo: git },  // Direct assignment
    { name: "vite", logo: vite},  // Direct assignment
    { name: "parcel", logo: parcel },  // Direct assignment
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="bg-[#000000] py-16" ref={ref}>
      <div className="container mx-auto px-6 sm:px-8">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[#00FBF4] text-4xl sm:text-5xl font-bold mb-4 hover:text-white hover:shadow-lg hover:shadow-[#00FBF4] transition duration-300">
            My Skills
          </h1>
          <p className="text-lg sm:text-xl text-white font-light mb-8">
            These are the technologies and tools I’m proficient in.
          </p>
        </motion.div>

        {/* Skills List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-[#00000080] p-4 rounded-xl shadow-xl border-4 border-[#00FBF4] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(0,251,244,0.6)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="flex justify-center items-center w-24 h-24 mx-auto mb-4 bg-[#000000] rounded-full shadow-inner">
                <img
                  src={skill.logo}
                  alt={`${skill.name} Logo`} // Corrected string interpolation
                  className="w-16 h-16"
                />
              </div>

              <h3 className="text-2xl text-[#00FBF4] font-bold text-center">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
