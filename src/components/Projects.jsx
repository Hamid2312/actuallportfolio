import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, ArrowUpRight, X } from "lucide-react";

import Famefing from "../assets/famefing.png";
import pia from "../assets/mypia.png";
import workwearImage from "../assets/workwear.png";
import aestheticCalculator from "../assets/noor-e-nisa.png";

// All accents stay within the primary purple palette
const projectsData = [
  {
    id: "01",
    title: "CWS Workwear",
    description:
      "I developed the UI and integrated Sitecore XM Cloud for the CWS Workwear website. CWS is an approximately 150-year-old company, and their extensive platform consists of over 2000+ pages. Built using modern web technologies and React.js.",
    link: "https://cws.com/en/workwear",
    image: workwearImage,
    tags: ["React.js", "Sitecore XM Cloud", "TypeScript"],
    accent: "#7C3AED",   // primary-600
    featured: true,
  },
  {
    id: "02",
    title: "Piac.com.pk",
    description:
      "A professional dummy project website. Each component was crafted using best practices and modern web development techniques with React.js and Tailwind CSS.",
    link: "https://mypia-hamid2312s-projects.vercel.app/",
    image: pia,
    tags: ["React.js", "Tailwind CSS"],
    accent: "#6D28D9",   // primary-700
  },
  {
    id: "03",
    title: "Famefing.com",
    description:
      "I created the company's website Famefing.com during my 3-month internship. Built with React.js, it's a single-page, fully responsive website.",
    link: "https://Hamid2312.github.io/myfamefing/",
    image: Famefing,
    tags: ["React.js", "Responsive Design"],
    accent: "#8B5CF6",   // primary-500 (violet shade)
  },
  {
    id: "04",
    title: "Noor e Nisa",
    description:
      "A full E-commerce Noor e Nisa project built with React.js, featuring a modern design and smooth user experience with Tailwind CSS.",
    link: "https://noor-e-nisa.vercel.app/",
    image: aestheticCalculator,
    tags: ["React.js", "Tailwind CSS", "E-commerce"],
    accent: "#A78BFA",   // primary-400 (lighter violet)
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const highlightTechnologies = (text) =>
    text.replace(
      /\b(React\.js|React|Tailwind CSS|Sitecore XM Cloud|TypeScript)\b/g,
      '<span class="font-bold text-primary-400">$1</span>'
    );

  const [featured, ...rest] = projectsData;

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-12 bg-white dark:bg-[#06000f] overflow-hidden">

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-8%] left-[10%] w-[480px] h-[480px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-[8%] w-[360px] h-[360px] rounded-full bg-violet-500/8 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.7) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary-500" />
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-primary-500 dark:text-primary-400">
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            My{" "}
            <span className="bg-gradient-to-r from-primary-600 via-primary-400 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-base max-w-xl">
            Production‑grade applications built with modern web technologies and pixel‑perfect UIs.
          </p>
        </motion.div>

        {/* Featured Card */}
        <motion.div
          className="mb-7 group cursor-pointer relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setSelectedProject(featured)}
        >
          {/* Glow border layer */}
          <div
            className="absolute -inset-[1px] rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "linear-gradient(135deg, #7C3AED55, #A78BFA30, #7C3AED55)" }}
          />

          <div className="relative rounded-3xl overflow-hidden bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl border border-white/30 dark:border-white/10 grid lg:grid-cols-[1.1fr_1fr] min-h-[380px]">

            {/* Image side */}
            <div className="relative overflow-hidden min-h-[260px]">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/50 dark:to-[#06000f]/80" />
              <span className="absolute bottom-4 left-5 font-mono font-black text-8xl leading-none text-white/8 select-none pointer-events-none">01</span>
              <div className="absolute top-5 left-5">
                <span className="bg-primary-600/85 backdrop-blur-md text-white text-xs font-bold tracking-widest px-3 py-1.5 rounded-full uppercase">
                  ★ Featured
                </span>
              </div>
            </div>

            {/* Content side */}
            <div className="flex flex-col justify-center p-8 lg:p-11 bg-white/50 dark:bg-transparent backdrop-blur-sm">
              <p className="font-mono text-primary-500 dark:text-primary-400 text-xs tracking-[0.2em] uppercase mb-3">
                Project 01
              </p>
              <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
                {featured.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm mb-6">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-semibold rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-600 dark:text-primary-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={featured.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold text-sm transition-colors duration-200 hover:shadow-lg hover:shadow-primary-500/25"
                >
                  Visit Live <ArrowUpRight size={15} />
                </a>
                <button
                  onClick={(e) => { e.stopPropagation(); setSelectedProject(featured); }}
                  className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 dark:border-white/15 bg-white/60 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 text-gray-800 dark:text-white rounded-full font-semibold text-sm transition-colors duration-200"
                >
                  View Details <Eye size={15} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {rest.map((project, idx) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setSelectedProject(project)}
            >
              <div
                className="h-full rounded-2xl overflow-hidden bg-white/75 dark:bg-white/[0.04] backdrop-blur-xl border border-white/20 dark:border-white/8 transition-all duration-250 group-hover:border-primary-500/50 group-hover:shadow-lg group-hover:shadow-primary-500/15 group-hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-250" />
                  {/* Number badge */}
                  <div
                    className="absolute top-3 left-3 font-mono text-xs font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: `${project.accent}cc` }}
                  >
                    {project.id}
                  </div>
                  {/* Hover icons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md text-white border border-white/20 transition-colors duration-150"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <button
                      onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                      className="p-2.5 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md text-white border border-white/20 transition-colors duration-150"
                    >
                      <Eye size={16} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs font-semibold rounded-full"
                        style={{
                          backgroundColor: `${project.accent}18`,
                          color: project.accent,
                          border: `1px solid ${project.accent}40`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent sweep */}
                <div
                  className="h-[2px] w-0 group-hover:w-full transition-all duration-400 ease-out"
                  style={{ backgroundColor: project.accent }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Modal — z-[9999] beats navbar z-50, centered properly ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedProject(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal panel */}
            <motion.div
              className="relative w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden"
              style={{
                background: "rgba(8, 3, 20, 0.92)",
                backdropFilter: "blur(20px)",
                border: `1px solid ${selectedProject.accent}45`,
                maxHeight: "85vh",
                overflowY: "auto",
              }}
              initial={{ y: 40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors duration-150"
              >
                <X size={17} />
              </button>

              {/* Image */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-52 sm:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#080314]" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold rounded-full"
                      style={{
                        backgroundColor: `${selectedProject.accent}22`,
                        color: selectedProject.accent,
                        border: `1px solid ${selectedProject.accent}50`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                  {selectedProject.title}
                </h2>
                <p
                  className="text-gray-300 text-sm leading-relaxed mb-7"
                  dangerouslySetInnerHTML={{ __html: highlightTechnologies(selectedProject.description) }}
                />

                <div className="flex flex-wrap justify-center gap-3">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-7 py-2.5 rounded-full font-semibold text-white text-sm transition-opacity duration-150 hover:opacity-85"
                    style={{
                      background: `linear-gradient(135deg, ${selectedProject.accent}, ${selectedProject.accent}99)`,
                      boxShadow: `0 6px 20px ${selectedProject.accent}35`,
                    }}
                  >
                    Visit Live <ArrowUpRight size={16} />
                  </a>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-7 py-2.5 border border-white/15 bg-white/8 hover:bg-white/15 text-white rounded-full font-semibold text-sm transition-colors duration-150"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;