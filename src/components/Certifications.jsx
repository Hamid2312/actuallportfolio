import React, { useState } from 'react';
import cert1 from '../assets/cert1.jpg'; // Placeholder: Replace with your certificate image path
import cert2 from '../assets/cert2.jpg'; // Placeholder: Replace with your certificate image path
import cert3 from '../assets/cert3.jpg'; // Placeholder: Replace with your certificate image path

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      id: 1,
      title: 'Frontend Web Developer', // Replace: e.g., 'React Developer Certification'
      issuer: 'Zaff Institute', // Replace: e.g., 'Udemy'
      date: '3 Feb 2024', // Replace: e.g., 'May 2025'
      image: cert1, // Replace with actual image path in src/assets/
      description: 'I received this certificate from Zaff Institute in Arfa Technology Park. Compelete Course from here then worked on different projects.', // Replace: e.g., 'Mastered React hooks and routing'
    },
    {
      id: 2,
      title: 'Frontend Developer Intern', // Replace: e.g., 'JavaScript & Web Development'
      issuer: 'Zaff Institute', // Replace: e.g., 'FreeCodeCamp'
      date: '3 Sep 2024', // Replace: e.g., 'March 2025'
      image: cert2, // Replace with actual image path
      description: 'Completed Internship from here and worked on different projects like E-commerce website. After completing Intership from here I took my certificate.', // Replace: e.g., 'Built responsive web apps'
    },
    {
      id: 3,
      title: 'C++ Essentials 1', // Replace: e.g., 'CS601 Data Communication'
      issuer: 'Virtual University of Pakistan', // Replace: e.g., 'Virtual University'
      date: 'Jun 2025', // Replace: e.g., 'June 2025'
      image: cert3, // Replace with actual image path
      description: 'This Course was the part of my Assignment in VU. I completed this course getting 90% score and received my certificate from here.', // Replace: e.g., 'Learned checksum and Hamming distance'
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100 tracking-tight"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          My Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-200 dark:border-gray-700"
              data-aos="fade-up"
              data-aos-delay={cert.id * 150}
              data-aos-duration="1000"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-56 object-contain rounded-t-xl border-2 border-blue-500 dark:border-blue-400 p-2 bg-gray-50 dark:bg-gray-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
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
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
            <div
              className="bg-white dark:bg-gray-800 rounded-xl max-w-lg w-full p-8 relative max-h-[90vh] overflow-y-auto"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <button
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                onClick={() => setSelectedCert(null)}
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
                alt={selectedCert.title}
                className="w-full h-64 object-contain rounded-lg mb-6 border-2 border-blue-500 dark:border-blue-400 p-2"
              />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                {selectedCert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <strong>Issuer:</strong> {selectedCert.issuer}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                <strong>Date:</strong> {selectedCert.date}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Description:</strong> {selectedCert.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Certifications;