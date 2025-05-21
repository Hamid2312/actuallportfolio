import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <footer className="relative bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 text-gray-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="relative z-10 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="gradient-text text-2xl font-medium mb-4 tracking-tight">About Me</h3>
          <p className="text-base leading-tight text-gray-700 dark:text-white opacity-90">
            I'm a frontend developer specializing in creating stunning websites and applications using React, Tailwind CSS, and modern web technologies.
          </p>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="gradient-text text-2xl font-medium mb-4 tracking-tight">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link to="my-experience" className="link text-base" aria-label="View My Experience">
                My Experience
              </Link>
            </li>
            <li>
              <Link to="contact" className="link text-base" aria-label="Get in Touch">
                Get in touch
              </Link>
            </li>
            <li>
              <Link to="skills" className="link text-base" aria-label="View My Skills">
                My Skills
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="gradient-text text-2xl font-medium mb-4 tracking-tight">Contact</h3>
          <p className="text-base leading-tight text-gray-700 dark:text-white">
            Email:{' '}
            <a
              href="mailto:hafizalig312@gmail.com"
              className="text-cyan-600 dark:text-[#00FBF4] hover:underline transition-colors duration-300"
              aria-label="Email Hafiz Hamid Ali"
            >
              hafizalig312@gmail.com
            </a>
          </p>
          <p className="text-base leading-tight text-gray-700 dark:text-white mt-3">
            Phone:{' '}
            <a
              href="tel:+923249462896"
              className="text-cyan-600 dark:text-[#00FBF4] hover:underline transition-colors duration-300"
              aria-label="Call Hafiz Hamid Ali"
            >
              +92 3249462896
            </a>
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 mt-12 pt-10 border-t-2 border-cyan-600 dark:border-[#00FBF4]">
        <div className="flex justify-center space-x-8 mb-8">
          {[
            { href: 'https://www.facebook.com/share/15qYWfs8hM/', icon: 'fab fa-facebook', label: 'Facebook' },
            { href: 'https://github.com/Hamid2312', icon: 'fab fa-github', label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/hafiz-hamid-b40795336', icon: 'fab fa-linkedin', label: 'LinkedIn' },
          ].map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-cyan-600 dark:text-[#00FBF4] hover:text-cyan-700 dark:hover:text-[#00FBF4]/80"
              aria-label={`Visit ${label} profile`}
            >
              <i className={icon}></i>
            </motion.a>
          ))}
        </div>
        <p className="text-base text-center text-gray-700 dark:text-white opacity-90 mb-8">
          © 2025 Hafiz Hamid Ali. All rights reserved.
        </p>
        <motion.div
          className="flex justify-center"
          variants={buttonVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.button
            onClick={scrollToTop}
            className="btn"
            aria-label="Scroll to top of page"
            variants={buttonVariants}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
          >
            <i className="fas fa-arrow-up text-xl"></i>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;