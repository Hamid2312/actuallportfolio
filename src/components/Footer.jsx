import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const AdvancedFooter = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate scroll progress for circular progress
  const scrollProgress = Math.min((scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100);

  return (
    <footer className="relative bg-gradient-to-tl from-pink-50 to-white dark:from-black dark:to-[#120312] text-gray-900 dark:text-white overflow-hidden pt-24 pb-12 px-6 sm:px-12">
      
      {/* Background floating particles */}
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        animate={{
          rotate: [0, 15, -15, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-pink-300/30 dark:bg-pink-600/20 rounded-full"
            style={{
              width: `${30 + Math.random() * 50}px`,
              height: `${30 + Math.random() * 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50 + Math.random() * 50, 0],
              x: [0, 50 - Math.random() * 50, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
        ))}
      </motion.div>

      {/* Footer Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400 mb-4">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I’m a frontend developer blending creativity and code to build immersive web experiences. Tailwind, React, Framer Motion, and futuristic UI are my playgrounds.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400 mb-4">
            Quick Links
          </h2>
          <ul className="space-y-3">
            {["Home", "Experience", "Skills", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400 mb-4">
            Contact
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Email:{" "}
            <a
              href="mailto:hafizalig312@gmail.com"
              className="text-pink-600 dark:text-pink-400 hover:underline transition-colors duration-300"
            >
              hafizalig312@gmail.com
            </a>
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Phone:{" "}
            <a
              href="tel:+923249462896"
              className="text-pink-600 dark:text-pink-400 hover:underline transition-colors duration-300"
            >
              +92 3249462896
            </a>
          </p>

          <form className="flex gap-2 mt-4">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-md w-full text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400"
            />
            <button
              type="submit"
              className="bg-pink-600 dark:bg-pink-400 text-white px-4 py-2 rounded-md hover:bg-pink-700 dark:hover:bg-pink-500 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Socials + Scroll Top */}
      <div className="relative z-10 mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex space-x-6 justify-center">
          {[FaFacebook, FaGithub, FaLinkedin, FaTwitter].map((Icon, idx) => (
            <motion.a
              key={idx}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.3, rotate: 10 }}
              className="text-2xl text-pink-600 dark:text-pink-400 transition-colors duration-300"
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Circular scroll-to-top button */}
        <motion.button
          onClick={scrollToTop}
          className="relative w-16 h-16 rounded-full bg-pink-600 dark:bg-pink-400 text-white flex items-center justify-center shadow-lg hover:shadow-2xl transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <svg className="absolute w-16 h-16 -rotate-90" viewBox="0 0 36 36">
            <path
              stroke="#fff"
              strokeWidth="2"
              fill="none"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              strokeDasharray={`${scrollProgress}, 100`}
            />
          </svg>
          <i className="fas fa-arrow-up text-xl relative z-10"></i>
        </motion.button>
      </div>

      <p className="text-center mt-8 text-gray-700 dark:text-gray-300 opacity-90 text-sm">
        © 2025 Hafiz Hamid Ali. All rights reserved.
      </p>
    </footer>
  );
};

export default AdvancedFooter;
