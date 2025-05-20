import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import facebookImage from '../assets/facebook.png';
import githubImage from '../assets/github.png';
import linkedinImage from '../assets/linkedin.png';
import emailImage from '../assets/email.png';
import whatsappImage from '../assets/whatsapp.png';
import FiverrImage from '../assets/fiverr.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    // Validation
    if (!name || !email || !message) {
      toast.error('Please fill in all fields.');
      return;
    }
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // EmailJS send
    emailjs
      .send(
        'service_7jpwnyd', // Replace with your EmailJS Service ID
        'template_nu0j2ai', // Replace with your EmailJS Template ID
        {
          name,
          email,
          message,
        },
        'RbVUdgkgNSU1oYJ2N' // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log('EmailJS Success:', response.status, response.text);
          toast.success('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          setIsSubmitting(false);
        },
        (error) => {
          console.error('EmailJS Error:', error);
          toast.error('Failed to send message: ' + error.text);
          setIsSubmitting(false);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        type: 'spring',
        bounce: 0.4,
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: '0 0 25px rgba(0, 251, 244, 0.6)',
      transition: {
        duration: 0.3,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: '#00FBF4',
      boxShadow: '0 0 10px rgba(0, 251, 244, 0.5)',
      transition: {
        duration: 0.3,
      },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const { ref: mapRef, inView: mapInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div className="bg-gradient-to-br from-black to-gray-900 py-16 sm:py-20 relative overflow-hidden">
      <Toaster position="top-right" />
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00FBF4]/10 to-transparent opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? 'show' : 'hidden'}
        >
          <motion.h1
            className="text-[#00FBF4] text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 relative"
            variants={headingVariants}
            whileHover={{ scale: 1.05, textShadow: '0 0 15px rgba(0, 251, 244, 0.7)' }}
          >
            Get in Touch
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#00FBF4] rounded-full" />
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-white font-light max-w-2xl mx-auto"
            variants={subheadingVariants}
          >
            Have any questions or want to work together? Reach out via the form or through any platform below.
          </motion.p>
        </motion.div>

        {/* Contact Form Section */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-black/50 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-lg max-w-3xl mx-auto mb-12 sm:mb-16"
          ref={formRef}
          variants={formVariants}
          initial="hidden"
          animate={formInView ? 'show' : 'hidden'}
        >
          <h2 className="text-2xl sm:text-3xl text-[#00FBF4] font-bold mb-6 text-center relative z-10">
            Send a Message
          </h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-white text-sm sm:text-lg font-medium mb-2 relative z-10"
            >
              Your Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-[#00FBF4]/50 rounded-lg bg-black/80 text-white focus:outline-none relative z-10"
              placeholder="Enter your name"
              required
              whileFocus="focus"
              variants={inputVariants}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-sm sm:text-lg font-medium mb-2 relative z-10"
            >
              Your Email
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-[#00FBF4]/50 rounded-lg bg-black/80 text-white focus:outline-none relative z-10"
              placeholder="Enter your email"
              required
              whileFocus="focus"
              variants={inputVariants}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-white text-sm sm:text-lg font-medium mb-2 relative z-10"
            >
              Your Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-[#00FBF4]/50 rounded-lg bg-black/80 text-white focus:outline-none relative z-10"
              placeholder="Type your message here"
              rows="4"
              required
              whileFocus="focus"
              variants={inputVariants}
            />
          </div>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#00FBF4] text-black px-6 py-3 rounded-lg font-bold hover:bg-[#00FBF4]/80 focus:ring-2 focus:ring-[#00FBF4] focus:ring-offset-2 transition duration-300 w-full relative z-10 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            variants={buttonVariants}
            whileHover={isSubmitting ? {} : 'hover'}
            whileTap={isSubmitting ? {} : 'tap'}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </motion.button>
        </motion.form>

        {/* Contact Options Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16"
          ref={cardsRef}
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? 'show' : 'hidden'}
        >
          <ContactCard
            href="https://www.facebook.com/share/15qYWfs8hM/"
            image={facebookImage}
            alt="Facebook Profile"
            text="Facebook Profile"
            cardVariants={cardVariants}
            imageVariants={imageVariants}
          />
          <ContactCard
            href="https://github.com/Hamid2312"
            image={githubImage}
            alt="GitHub Profile"
            text="GitHub Profile"
            cardVariants={cardVariants}
            imageVariants={imageVariants}
          />
          <ContactCard
            href="https://www.linkedin.com/in/hafiz-hamid-b40795336"
            image={linkedinImage}
            alt="LinkedIn Profile"
            text="LinkedIn Profile"
            cardVariants={cardVariants}
            imageVariants={imageVariants}
          />
          <ContactCard
            href="mailto:hafizalig312@gmail.com"
            image={emailImage}
            alt="Email"
            text="Send an Email"
            cardVariants={cardVariants}
            imageVariants={imageVariants}
          />
          <ContactCard
            href="https://wa.me/+923249462896"
            image={whatsappImage}
            alt="WhatsApp"
            text="WhatsApp"
            cardVariants={cardVariants}
            imageVariants={imageVariants}
          />
          <ContactCard
            href="https://www.fiverr.com/devhafizhamid"
            image={FiverrImage}
            alt="Fiverr Profile"
            text="Fiverr Profile"
            cardVariants={cardVariants}
            imageVariants={imageVariants}
          />
        </motion.div>

        {/* Map Section */}
        <motion.div
          className="mb-12"
          ref={mapRef}
          variants={mapVariants}
          initial="hidden"
          animate={mapInView ? 'show' : 'hidden'}
        >
          <h2 className="text-2xl sm:text-3xl text-[#00FBF4] font-bold text-center mb-6 relative z-10">
            Location
          </h2>
          <motion.iframe
            title="Chungi Amer Sidhu Lahore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13699.017635739825!2d74.30802083228114!3d31.54083235020181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907405303089f%3A0x809e59a3e7899ee2!2sChungi%20Amar%20Sidhu%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1691778740163!5m2!1sen!2s"
            width="100%"
            height="400"
            className="border-2 border-[#00FBF4]/50 rounded-xl"
            loading="lazy"
            variants={mapVariants}
          />
        </motion.div>
      </div>
    </div>
  );
};

const ContactCard = ({ href, image, alt, text, cardVariants, imageVariants }) => {
  return (
    <motion.div
      className="bg-black/50 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-lg border border-[#00FBF4]/50 text-center relative overflow-hidden"
      variants={cardVariants}
      whileHover="hover"
    >
      {/* Subtle Card Glow Effect */}
      <div className="absolute inset-0 bg-[#00FBF4]/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative z-10"
        aria-label={`Connect via ${text}`}
      >
        <motion.img
          src={image}
          alt={alt}
          className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full border-2 border-[#00FBF4]/50"
          variants={imageVariants}
          whileHover="hover"
        />
        <h3 className="text-base sm:text-lg text-white font-bold">{text}</h3>
      </a>
    </motion.div>
  );
};

export default Contact;