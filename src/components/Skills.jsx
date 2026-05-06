import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiReact, SiGit, SiGithub,
  SiVite, SiVercel, SiPostman, SiJest, SiNodedotjs, SiNextdotjs, SiRedux,
  SiSass, SiFigma, SiPython, SiFastapi
} from "react-icons/si";
import { LayoutTemplate, FileEdit } from "lucide-react";

// Sitecore doesn't have an icon in react-icons, so wrap lucide icons
const SitecorePageBuilder = (props) => <LayoutTemplate {...props} />;
const SitecoreContentEditor = (props) => <FileEdit {...props} />;

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);


  const skills = [
    { name: "HTML", Icon: SiHtml5, short: "Markup • Semantic", extra: "Forms, Accessibility, SEO‑friendly" },
    { name: "CSS", Icon: SiCss3, short: "Styling • Layout", extra: "Flexbox, Grid, Responsive" },
    { name: "JavaScript", Icon: SiJavascript, short: "Logic • DOM", extra: "ES6+, DOM, Fetch/API" },
    { name: "Tailwind", Icon: SiTailwindcss, short: "Utility‑first CSS", extra: "Design tokens, rapid UI" },
    { name: "React", Icon: SiReact, short: "Components • Hooks", extra: "State mgmt, hooks, routing" },
    { name: "GitHub", Icon: SiGithub, short: "VCS • CI", extra: "PRs, Actions, Workflows" },
    { name: "Git", Icon: SiGit, short: "Branching • Workflows", extra: "Rebase, merge strategies" },
    { name: "Vite", Icon: SiVite, short: "Fast builds", extra: "Dev server, HMR" },
    { name: "Vercel", Icon: SiVercel, short: "Deploy • Edge", extra: "CDN, previews" },
    { name: "API / REST", Icon: SiPostman, short: "API • Fetch", extra: "Auth, caching, pagination" },
    { name: "Testing", Icon: SiJest, short: "Unit • E2E", extra: "Jest, RTL, Cypress" },
    { name: "Node.js", Icon: SiNodedotjs, short: "Backend • APIs", extra: "Express, REST, server-side logic" },
    { name: "Next.js", Icon: SiNextdotjs, short: "React Framework", extra: "SSR, SSG, Routing, SEO" },
    { name: "Redux", Icon: SiRedux, short: "State Mgmt", extra: "Global state, stores, slices" },
    { name: "Sass / SCSS", Icon: SiSass, short: "Preprocessor", extra: "Variables, nesting, mixins" },
    { name: "Figma", Icon: SiFigma, short: "UI/UX Design", extra: "Prototyping, collaboration, assets" },
    { name: "Python", Icon: SiPython, short: "Language • Scripting", extra: "Automation, data, backend scripting" },
    { name: "FastAPI", Icon: SiFastapi, short: "Backend • APIs", extra: "Async REST APIs, high performance" },
    { name: "XM Page Builder", Icon: SitecorePageBuilder, short: "Sitecore • CMS", extra: "Component layout, page design, XM Cloud" },
    { name: "XM Content Editor", Icon: SitecoreContentEditor, short: "Sitecore • CMS", extra: "Content tree, items, field management" },
  ];

  const tileVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.9 },
    visible: i => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.045, type: "spring", stiffness: 120, damping: 14 },
    }),
    hover: { scale: 1.07, transition: { duration: 0.2, ease: "easeOut" } },
  };

  const { ref: headingRef, inView: headingInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-12 bg-primary-50 dark:bg-[#120312] overflow-visible">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-8">
          <motion.h2
            ref={headingRef}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight"
            initial={{ opacity: 0, y: -28 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            My Skills <span className="text-primary-600 dark:text-primary-400">/</span>{" "}
            <span className="text-gray-500 dark:text-gray-300 text-lg ml-2 font-medium">Responsive &amp; interactive</span>
          </motion.h2>
          <motion.p
            className="mt-2 text-sm text-gray-600 dark:text-gray-300/80"
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hover a skill to see key info. Info box shows just above the tile with small margin.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-8 gap-4 sm:gap-6 lg:gap-6">
          {skills.map((s, idx) => {
            const { Icon } = s;
            return (
              <div
                key={s.name}

                className="relative flex flex-col items-center"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  variants={tileVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={idx}
                  whileHover="hover"
                  className={`relative rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer shadow-md transition-colors duration-300 w-full ${
                    hoveredIndex === idx ? "bg-primary-600" : "bg-white dark:bg-gray-900"
                  }`}
                >
                  <motion.div className={`text-4xl sm:text-5xl ${hoveredIndex === idx ? "text-white" : "text-primary-600 dark:text-primary-400"}`}>
                    <Icon />
                  </motion.div>
                  <div className="mt-3 text-center">
                    <div className={`text-xs sm:text-sm font-semibold transition-colors duration-300 ${hoveredIndex === idx ? "text-white" : "text-gray-900 dark:text-white"}`}>
                      {s.name}
                    </div>
                  </div>
                </motion.div>

                {/* Info Card */}
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: -8 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full mb-2 w-56 sm:w-64 z-50"
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-xl px-3 py-2 shadow-lg border border-primary-100/30 text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                          <Icon className="w-5 h-5 text-primary-600" />
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white">{s.name}</div>
                            <div className="text-gray-500 dark:text-gray-300">{s.short}</div>
                          </div>
                        </div>
                        <div className="mt-1 text-gray-700 dark:text-gray-200">{s.extra}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
