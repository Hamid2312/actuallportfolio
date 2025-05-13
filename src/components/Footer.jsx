import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Show/hide scroll-to-top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants for footer sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Animation for scroll-to-top button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hover: {
      scale: 1.1,
      boxShadow: '0 0 15px rgba(0, 251, 244, 0.7)',
      transition: { duration: 0.2 },
    },
  };

  return (
    <footer className="relative bg-black text-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <style>
        {`
          .gradient-border-top {
            position: relative;
          }
          .gradient-border-top::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(to right, #00FBF4, #A78BFA);
          }
          .footer-bg::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at top, rgba(0, 251, 244, 0.1) 10%, transparent 70%);
            opacity: 0.3;
            z-index: 0;
          }
          .link-underline {
            position: relative;
            display: inline-block;
          }
          .link-underline::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 50%;
            width: 0;
            height: 2px;
            background: linear-gradient(to right, #00FBF4, #A78BFA);
            transition: width 0.3s ease, left 0.3s ease;
          }
          .link-underline:hover::after,
          .link-underline:focus::after {
            width: 100%;
            left: 0;
          }
          @keyframes rotate-gradient {
            0% { background-position: 0% 50%; }
            100% { background-position: 360% 50%; }
          }
          .icon-wrapper {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 50%;
            transition: all 0.3s ease;
          }
          .icon-wrapper:hover,
          .icon-wrapper:focus {
            background: linear-gradient(45deg, #00FBF4, #A78BFA);
            background-size: 200%;
            animation: rotate-gradient 3s linear infinite;
          }
          .icon-wrapper:hover i,
          .icon-wrapper:focus i {
            color: #000;
          }
          .gradient-button {
            position: relative;
            border: 2px solid transparent;
            background-clip: padding-box;
            border-radius: 50%;
            padding: 0.75rem;
          }
          .gradient-button::before {
            content: '';
            position: absolute;
            top: -2px;
            bottom: -2px;
            left: -2px;
            right: -2px;
            background: linear-gradient(45deg, #00FBF4, #A78BFA);
            border-radius: 50%;
            z-index: -1;
          }
        `}
      </style>

      <div className="footer-bg relative z-10 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
        {/* About Me Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-2xl font-medium text-[#00FBF4] mb-4 tracking-tight">About Me</h3>
          <p className="text-base leading-tight opacity-90">
            I'm a frontend developer specializing in creating stunning websites and applications using React, Tailwind CSS, and modern web technologies.
          </p>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-2xl font-medium text-[#00FBF4] mb-4 tracking-tight">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="my-experience"
                className="text-base text-white link-underline transition-colors duration-300"
                tabIndex={0}
                aria-label="View My Experience"
              >
                My Experience
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="text-base text-white link-underline transition-colors duration-300"
                tabIndex={0}
                aria-label="Get in Touch"
              >
                Get in touch
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                className="text-base text-white link-underline transition-colors duration-300"
                tabIndex={0}
                aria-label="View My Skills"
              >
                My Skills
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-2xl font-medium text-[#00FBF4] mb-4 tracking-tight">Contact</h3>
          <p className="text-base leading-tight">
            Email:{' '}
            <a
              href="mailto:hafizalig312@gmail.com"
              className="text-[#00FBF4] link-underline transition-colors duration-300"
              tabIndex={0}
              aria-label="Email Hafiz Hamid Ali"
            >
              hafizalig312@gmail.com
            </a>
          </p>
          <p className="text-base leading-tight mt-3">
            Phone:{' '}
            <a
              href="tel:+923249462896"
              className="text-[#00FBF4] link-underline transition-colors duration-300"
              tabIndex={0}
              aria-label="Call Hafiz Hamid Ali"
            >
              +92 3249462896
            </a>
          </p>
        </motion.div>
      </div>

      {/* Social Media and Copyright */}
      <div className="relative z-10 mt-12 pt-10 gradient-border-top">
        <div className="flex justify-center space-x-8 mb-8">
          {[
            {
              href: 'https://www.facebook.com/share/15qYWfs8hM/',
              icon: 'fab fa-facebook',
              label: 'Facebook',
            },
            {
              href: 'https://github.com/Hamid2312',
              icon: 'fab fa-github',
              label: 'GitHub',
            },
            {
              href: 'https://www.linkedin.com/in/hafiz-hamid-b40795336',
              icon: 'fab fa-linkedin',
              label: 'LinkedIn',
            },
          ].map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-[#00FBF4] icon-wrapper"
              aria-label={`Visit ${label} profile`}
              tabIndex={0}
            >
              <i className={icon}></i>
            </motion.a>
          ))}
        </div>
        <p className="text-base text-center text-[#00FBF4] opacity-90 mb-8">
          © 2025 Hafiz Hamid Ali. All rights reserved.
        </p>
        {/* Scroll to Top Button */}
        <motion.div
          className="flex justify-center"
          variants={buttonVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          <motion.button
            onClick={scrollToTop}
            className="bg-black text-[#00FBF4] gradient-button transition-all duration-300"
            aria-label="Scroll to top of page"
            tabIndex={0}
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