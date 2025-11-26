// Updated Experience Section using data from original MyExperience component

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import zaffLogo from "../assets/ZaffLogo.png";
import freelancerLogo from "../assets/FiverrLogo.png";
import famefingLogo from "../assets/FamefingLogo.png";

const ExperienceSection = () => {
  const experiences = [
    {
      year: "Dec 2023 - Feb 2024",
      title: "Learning",
      company: "Zaff Institute",
      logo: zaffLogo,
      description:
        "I learned web development and explored frontend technologies including HTML, CSS, JavaScript, and began my internship there.",
    },
    {
      year: "Feb 2024 - Sep 2024",
      title: "Frontend Developer",
      company: "Zaff Institute (Arfa Tower)",
      logo: zaffLogo,
      description:
        "Created responsive, modern websites using React, HTML, CSS, JavaScript, and Tailwind CSS with pixel-perfect UI and cross-browser compatibility.",
    },
    {
      year: "Jul 2024 - Sep 2024",
      title: "Freelancer - Frontend Developer",
      company: "Self-employed",
      logo: freelancerLogo,
      description:
        "Worked with global clients building custom web solutions using React and Tailwind CSS focusing on elegant UI and scalability.",
    },
    {
      year: "Oct 2024 - Present",
      title: "Frontend Developer",
      company: "Famefing Technologies",
      logo: famefingLogo,
      description:
        "Leading React-based SPA development using TypeScript and advanced UI patterns, building fast and maintainable applications.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  // motion variant for a smooth attractive reveal
  const detailsVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut", type: "spring", stiffness: 120 },
    },
    exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-20 bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-cyan-400/10 blur-[120px] rounded-full top-10 left-10 animate-pulse" />
        <div className="absolute w-72 h-72 bg-pink-500/10 blur-[150px] rounded-full bottom-10 right-10 animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 px-4">
        <h2 className="text-4xl font-extrabold text-black dark:text-white tracking-tight mb-12">
          My Experience
          <span className="text-pink-600 dark:text-pink-400"> / </span>
          <span className="text-gray-500 dark:text-gray-300 text-xl ml-2">
            Journey of Growth
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {[0, 1].map((col) => (
            <div
              key={col}
              className="relative pl-8 border-l-4 border-gray-200 dark:border-gray-700"
            >
              {experiences
                .filter((_, idx) => idx % 2 === col)
                .map((exp, index) => {
                  // ensure unique stable index for each original experience
                  const actualIndex = experiences.indexOf(exp);

                  return (
                    <div
                      key={actualIndex}
                      className="mb-10 relative"
                      // desktop hover reveal vs mobile click
                      onMouseEnter={() => window.innerWidth >= 768 && setOpenIndex(actualIndex)}
                      onMouseLeave={() => window.innerWidth >= 768 && setOpenIndex(null)}
                    >
                      <div className="absolute -left-[14.5px] top-1.5 w-4 h-4 rounded-full bg-pink-500 dark:bg-pink-400 border-4 border-white dark:border-black shadow" />

                      <div className="group bg-gradient-to-br from-white/70 via-pink-50 to-cyan-50 dark:from-[#071024]/60 dark:via-neutral-900/40 dark:to-[#021025]/20 shadow-2xl hover:shadow-[0_35px_60px_rgba(0,0,0,0.22)] transform-gpu hover:-translate-y-3 hover:scale-[1.02] transition-all duration-300 border-l-4 border-pink-600 dark:border-pink-400 rounded-2xl p-6 backdrop-blur-sm overflow-hidden">
                        <p className="text-sm text-gray-500 dark:text-gray-300 font-semibold mb-2">
                          {exp.year}
                        </p>

                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>

                          <div className="flex items-center space-x-3">
                            <img
                              src={exp.logo}
                              alt={exp.company}
                              className="w-12 h-12 rounded-full object-contain border-2 border-white dark:border-black shadow-sm transition-transform duration-300 group-hover:scale-110"
                            />
                            {/* subtle hover hint (only on desktop) */}
                            <span className="hidden md:inline-block text-xs text-gray-400 dark:text-gray-500">
                              
                            </span>
                          </div>
                        </div>

                        <p className="text-pink-600 dark:text-pink-400 font-medium mb-3">
                          {exp.company}
                        </p>

                        {/* Mobile: keep toggle button. Desktop: hide button (md:hidden). */}
                        <button
                          onClick={() => toggle(actualIndex)}
                          className="mt-2 flex items-center space-x-2 text-pink-600 dark:text-pink-400 hover:underline md:hidden"
                          aria-expanded={openIndex === actualIndex}
                        >
                          {openIndex === actualIndex ? (
                            <>
                              <ChevronUp size={18} /> <span className="text-sm">Hide details</span>
                            </>
                          ) : (
                            <>
                              <ChevronDown size={18} /> <span className="text-sm">View details</span>
                            </>
                          )}
                        </button>

                        {/* Animated details - shown on hover (desktop) OR via button (mobile) */}
                        <AnimatePresence initial={false}>
                          {openIndex === actualIndex && (
                            <motion.div
                              variants={detailsVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="mt-4 text-gray-700 dark:text-gray-200 leading-relaxed rounded-lg p-4 bg-white/60 dark:bg-black/40 border border-white/40 dark:border-black/30 shadow-inner"
                            >
                              {/* added subtle icon/ accent + prettier spacing */}
                              <div className="flex items-start space-x-3">
                                <div className="flex-none w-2 h-10 rounded-full bg-pink-500/60 dark:bg-pink-400/60 mt-1" />
                                <div className="text-sm">
                                  {exp.description}
                                  <div className="mt-3 text-xs text-gray-400 dark:text-gray-500">
                                    — {exp.company} · {exp.year}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
