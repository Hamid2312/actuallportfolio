import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.1, transition: { duration: 0.2 } },
  };

  return (
    <footer className="relative bg-gradient-to-tl from-pink-50 to-white dark:from-[#120312] dark:to-black text-gray-900 dark:text-white py-20 px-6 sm:px-8 lg:px-16 font-sans overflow-hidden">
      {/* Decorative Floating Gradient Shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute w-72 h-72 bg-pink-300/40 dark:bg-pink-600/30 rounded-full top-[-10%] left-[-10%] filter blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-pink-400/30 dark:bg-pink-500/30 rounded-full bottom-[-15%] right-[-10%] filter blur-3xl"
          animate={{ y: [0, -25, 0], x: [0, -25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* About Me */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400 mb-4">
            About Me
          </h3>
          <p className="text-gray-700 dark:text-gray-300 opacity-90 text-lg leading-relaxed">
            I’m a frontend developer specializing in creating visually stunning and highly responsive websites using React, Tailwind CSS, and modern web technologies.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-4">
            {[
              { label: 'My Experience', to: 'my-experience' },
              { label: 'Get in Touch', to: 'contact' },
              { label: 'My Skills', to: 'skills' },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="relative group text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 transition-all duration-300"
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-600 dark:bg-pink-400 transition-all group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400 mb-4">
            Contact
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            Email:{' '}
            <a
              href="mailto:hafizalig312@gmail.com"
              className="text-pink-600 dark:text-pink-400 hover:underline transition-colors duration-300"
            >
              hafizalig312@gmail.com
            </a>
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Phone:{' '}
            <a
              href="tel:+923249462896"
              className="text-pink-600 dark:text-pink-400 hover:underline transition-colors duration-300"
            >
              +92 3249462896
            </a>
          </p>
        </motion.div>
      </div>

      {/* Social Links & Scroll Top */}
      <div className="relative z-10 mt-16 pt-12 border-t-2 border-pink-600 dark:border-pink-400 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex justify-center space-x-6">
          {[
            { href: 'https://www.facebook.com/', label: 'Facebook', icon: 'fab fa-facebook-f' },
            { href: 'https://github.com/Hamid2312', label: 'GitHub', icon: 'fab fa-github' },
            { href: 'https://www.linkedin.com/in/hafiz-hamid-b40795336', label: 'LinkedIn', icon: 'fab fa-linkedin-in' },
          ].map(({ href, label, icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-pink-600 dark:text-pink-400 hover:text-pink-500 dark:hover:text-pink-300 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              aria-label={`Visit ${label} profile`}
            >
              <i className={icon}></i>
            </motion.a>
          ))}
        </div>

        <motion.button
          onClick={scrollToTop}
          className="bg-pink-600 dark:bg-pink-400 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300"
          variants={buttonVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          whileHover="hover"
          aria-label="Scroll to top"
        >
          <i className="fas fa-arrow-up text-xl"></i>
        </motion.button>
      </div>

      <p className="text-center mt-8 text-gray-700 dark:text-gray-300 opacity-90 text-sm">
        © 2025 Hafiz Hamid Ali. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
