import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext.jsx";
import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";
import cert3 from "../assets/cert3.jpg";

const Certifications = () => {
  const { theme } = useContext(ThemeContext);
  const [showCerts, setShowCerts] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "Frontend Web Developer",
      issuer: "Zaff Institute",
      date: "3 Feb 2024",
      image: cert1,
      description:
        "Completed a comprehensive course covering HTML, CSS, JavaScript, and React, then worked on various projects.",
    },
    {
      id: 2,
      title: "Frontend Developer Intern",
      issuer: "Zaff Institute",
      date: "3 Sep 2024",
      image: cert2,
      description:
        "Worked on projects like an E-commerce website using React and Tailwind CSS. Received a certificate for outstanding performance.",
    },
    {
      id: 3,
      title: "C++ Essentials 1",
      issuer: "Virtual University of Pakistan",
      date: "Jun 2025",
      image: cert3,
      description:
        "Focused on C++ programming fundamentals, including data structures and algorithms, scoring 90%.",
    },
  ];

  const highlightTechnologies = (text) =>
    text.replace(
      /\b(React|React\.js|Tailwind CSS|JavaScript|HTML|CSS|C\+\+)\b/g,
      '<span class="font-bold text-pink-600 dark:text-pink-400">$1</span>'
    );

  return (
    <section className="relative py-20 bg-gradient-to-br from-white to-pink-50 dark:from-black dark:to-[#120312] overflow-hidden">
      {/* Animated Background Spheres */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute w-60 h-60 rounded-full bg-pink-300/40 dark:bg-pink-600/30 top-[-10%] left-[-10%]"
          animate={{ y: [0, 20, 0], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-pink-400/30 dark:bg-pink-500/30 bottom-[-15%] right-[-10%]"
          animate={{ y: [0, -25, 0], x: [0, -25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Teaser Section */}
      {!showCerts && (
        <div className="text-center max-w-2xl mx-auto px-4">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-400 mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            My Achievements & Certifications
          </motion.h2>
          <motion.p
            className="text-gray-700 dark:text-gray-300 text-lg sm:text-xl mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I have earned certifications in web development, internships, and programming courses. Click below to explore them.
          </motion.p>
          <motion.button
            className="px-8 py-4 bg-pink-600 dark:bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
            onClick={() => setShowCerts(true)}
            whileHover={{ scale: 1.08, boxShadow: "0 15px 30px rgba(236,72,153,0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            View My Certifications
          </motion.button>
        </div>
      )}

      {/* Certificates Grid */}
      <AnimatePresence>
        {showCerts && (
          <motion.div
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-pink-400/20 cursor-pointer overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCert(cert)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: cert.id * 0.2, duration: 0.6 }}
              >
                <div className="overflow-hidden rounded-t-xl">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-64 object-contain border-b border-pink-300 dark:border-pink-400 p-2"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.issuer}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal for Selected Certificate */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl border border-pink-300 dark:border-pink-400/40"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-64 object-contain rounded-lg mb-6 border-2 border-pink-300 dark:border-pink-400 p-2"
            />
            <h3 className="text-2xl font-bold mb-4 text-pink-600 dark:text-pink-400">
              {selectedCert.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <strong>Issuer:</strong> {selectedCert.issuer}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              <strong>Date:</strong> {selectedCert.date}
            </p>
            <p
              className="text-gray-600 dark:text-gray-300 text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: highlightTechnologies(selectedCert.description) }}
            />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
