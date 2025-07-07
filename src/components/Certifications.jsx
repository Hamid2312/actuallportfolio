import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';
import cert1 from '../assets/cert1.jpg'; // Placeholder: Replace with your certificate image path
import cert2 from '../assets/cert2.jpg'; // Placeholder: Replace with your certificate image path
import cert3 from '../assets/cert3.jpg'; // Placeholder: Replace with your certificate image path

function Certifications() {
  const { theme } = useContext(ThemeContext);
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: 'Frontend Web Developer',
      issuer: 'Zaff Institute',
      date: '3 Feb 2024',
      image: cert1,
      description: 'I received this certificate from Zaff Institute in Arfa Technology Park. Completed a comprehensive course covering HTML, CSS, JavaScript, and React, then worked on various projects.',
    },
    {
      id: 2,
      title: 'Frontend Developer Intern',
      issuer: 'Zaff Institute',
      date: '3 Sep 2024',
      image: cert2,
      description: 'Completed an internship at Zaff Institute, working on projects like an E-commerce website using React and Tailwind CSS. Received a certificate for outstanding performance.',
    },
    {
      id: 3,
      title: 'C++ Essentials 1',
      issuer: 'Virtual University of Pakistan',
      date: 'Jun 2025',
      image: cert3,
      description: 'Completed this course as part of a Virtual University assignment, scoring 90%. Focused on C++ programming fundamentals, including data structures and algorithms.',
    },
  ];

  // Highlight technologies in description
  const highlightTechnologies = (text) => {
    return text.replace(
      /\b(React|React\.js|Tailwind CSS|JavaScript|HTML|CSS|C\+\+)\b/g,
      '<span class="font-bold text-cyan-600 dark:text-[#00FBF4]">$1</span>'
    );
  };

  return (
    <section
      className="relative py-16 bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 transition-colors duration-300 overflow-hidden"
      aria-label="My Certifications"
    >
      <style>
        {`
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 15px rgba(0, 183, 180, 0.6); }
            50% { box-shadow: 0 0 25px rgba(0, 251, 244, 0.8); }
          }
          .dark @keyframes glow {
            0%, 100% { box-shadow: 0 0 15px rgba(0, 251, 244, 0.6); }
            50% { box-shadow: 0 0 25px rgba(0, 251, 244, 0.8); }
          }
          @keyframes float {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-10px) scale(1.05); }
            100% { transform: translateY(0) scale(1); }
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
          .noise-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0.05;
            z-index: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          }
          .gradient-sphere {
            position: absolute;
            border-radius: 50%;
            filter: blur(50px);
            opacity: 0.3;
          }
          .sphere-1 {
            width: 30vw;
            max-width: 300px;
            height: 30vw;
            max-height: 300px;
            background: linear-gradient(45deg, rgba(0, 183, 180, 0.4), rgba(124, 58, 237, 0.3));
            top: -5%;
            left: -5%;
            animation: float 12s ease-in-out infinite alternate;
          }
          .sphere-2 {
            width: 25vw;
            max-width: 250px;
            height: 25vw;
            max-height: 250px;
            background: linear-gradient(135deg, rgba(255, 58, 130, 0.4), rgba(0, 251, 244, 0.3));
            bottom: -10%;
            right: -5%;
            animation: float 15s ease-in-out infinite alternate;
            animation-delay: 2s;
          }
        `}
      </style>

      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="noise-overlay" />
        <div className="gradient-sphere sphere-1" />
        <div className="gradient-sphere sphere-2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className="gradient-text text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-12 relative"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          My Certifications
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-cyan-600 dark:bg-[#00FBF4] rounded-full" />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="relative bg-white/90 dark:bg-gray-800/90 rounded-xl backdrop-blur-md shadow-xl border border-gray-200/50 dark:border-[#00FBF4]/20 cursor-pointer group overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={cert.id * 150}
              data-aos-duration="1000"
              onClick={() => setSelectedCert(cert)}
              tabIndex={0}
              role="button"
              aria-label={`View ${cert.title} details`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-100/10 to-purple-100/10 dark:from-[#00FBF4]/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="w-full h-56 object-contain rounded-t-xl border-2 border-cyan-600 dark:border-[#00FBF4] p-2 bg-gray-50/50 dark:bg-gray-700/50 transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-[#00FBF4] transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Certificate Details */}
        {selectedCert && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div
              className="bg-white/95 dark:bg-gray-800/95 rounded-xl max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto backdrop-blur-md border border-gray-200/50 dark:border-[#00FBF4]/20"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <button
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate details"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedCert.image}
                alt={`${selectedCert.title} certificate`}
                className="w-full h-64 object-contain rounded-lg mb-6 border-2 border-cyan-600 dark:border-[#00FBF4] p-2"
                loading="lazy"
              />
              <h3 className="gradient-text text-xl sm:text-2xl font-bold mb-4">
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
                aria-describedby={`cert-desc-${selectedCert.id}`}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Certifications;