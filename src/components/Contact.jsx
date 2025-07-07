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
import freelancerImage from '../assets/freelancer.png';
import upworkImage from '../assets/upwork.png';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) return toast.error('Please fill in all fields.');
    if (!validateEmail(email)) return toast.error('Please enter a valid email address.');

    setIsSubmitting(true);

    emailjs
      .send(
        'service_7jpwnyd',
        'template_nu0j2ai',
        { name, email, message },
        'RbVUdgkgNSU1oYJ2N'
      )
      .then(
        () => {
          toast.success('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          toast.error('Failed to send message: ' + error.text);
          setIsSubmitting(false);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    show: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: 'easeOut', type: 'spring', bounce: 0.4 },
    },
    hover: {
      scale: 1.1,
      boxShadow: '0 0 25px rgba(0, 251, 244, 0.4)',
      backgroundColor: '#00FBF4',
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: '#00B7B4',
      boxShadow: '0 0 10px rgba(0, 183, 180, 0.5)',
      transition: { duration: 0.3 },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.3, ease: 'easeOut' },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const mapVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.3 });
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0.3 });
  const { ref: cardsRef, inView: cardsInView } = useInView({ threshold: 0.3 });
  const { ref: mapRef, inView: mapInView } = useInView({ threshold: 0.3 });

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 py-16 sm:py-20 relative overflow-hidden">
      <Toaster position="top-right" />
      <div className="container mx-auto px-6 sm:px-8 max-w-6xl">

        {/* Heading */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          ref={titleRef}
          initial="hidden"
          animate={titleInView ? 'show' : 'hidden'}
        >
          <motion.h1
            className="gradient-text text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 relative"
            variants={headingVariants}
            whileHover={{ scale: 1.05 }}
          >
            Get in Touch
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-cyan-600 dark:bg-[#00FBF4] rounded-full" />
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-white font-light max-w-2xl mx-auto"
            variants={subheadingVariants}
          >
            Have any questions or want to work together? Reach out via the form or through any platform below.
          </motion.p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="card p-4 sm:p-6 max-w-3xl mx-auto mb-12 sm:mb-16"
          ref={formRef}
          variants={formVariants}
          initial="hidden"
          animate={formInView ? 'show' : 'hidden'}
        >
          <h2 className="gradient-text text-2xl sm:text-3xl font-bold mb-6 text-center">Send a Message</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm sm:text-lg font-medium text-gray-900 dark:text-white mb-2">Your Name</label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-[#00FBF4]/50 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none"
              placeholder="Enter your name"
              required
              whileFocus="focus"
              variants={inputVariants}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm sm:text-lg font-medium text-gray-900 dark:text-white mb-2">Your Email</label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-[#00FBF4]/50 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none"
              placeholder="Enter your email"
              required
              whileFocus="focus"
              variants={inputVariants}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm sm:text-lg font-medium text-gray-900 dark:text-white mb-2">Your Message</label>
            <motion.textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-[#00FBF4]/50 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none"
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
            className={`btn w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileHover={!isSubmitting && { scale: 1.05 }}
            whileTap={!isSubmitting && { scale: 0.95 }}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </motion.button>
        </motion.form>

        {/* Contact Cards */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 mb-16"
          ref={cardsRef}
          variants={containerVariants}
          initial="hidden"
          animate={cardsInView ? 'show' : 'hidden'}
        >
          {[
            { href: 'https://www.facebook.com/share/15qYWfs8hM/', image: facebookImage, alt: 'Facebook', text: 'Facebook' },
            { href: 'https://github.com/Hamid2312', image: githubImage, alt: 'GitHub', text: 'GitHub' },
            { href: 'https://www.linkedin.com/in/hafiz-hamid-b40795336', image: linkedinImage, alt: 'LinkedIn', text: 'LinkedIn' },
            { href: 'mailto:hafizalig312@gmail.com', image: emailImage, alt: 'Email', text: 'Email' },
            { href: 'https://wa.me/+923249462896', image: whatsappImage, alt: 'WhatsApp', text: 'WhatsApp' },
            { href: 'https://www.fiverr.com/devhafizhamid', image: FiverrImage, alt: 'Fiverr', text: 'Fiverr' },
            { href: 'https://www.freelancer.com/u/hamid2312', image: freelancerImage, alt: 'Freelancer', text: 'Freelancer' },
            { href: 'https://www.upwork.com/freelancers/~01a682e1d9f5f13336', image: upworkImage, alt: 'Upwork', text: 'Upwork' },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover="hover"
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur shadow-md border border-gray-200 dark:border-white/10 hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-cyan-500 dark:border-[#00FBF4] flex items-center justify-center mb-4 bg-white dark:bg-gray-900"
                variants={imageVariants}
                whileHover="hover"
              >
                <img src={item.image} alt={item.alt} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
              </motion.div>
              <span className="text-sm sm:text-base font-medium text-gray-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-[#00FBF4]">
                {item.text}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Location Map */}
        <motion.div
          className="mb-12"
          ref={mapRef}
          variants={mapVariants}
          initial="hidden"
          animate={mapInView ? 'show' : 'hidden'}
        >
          <h2 className="gradient-text text-2xl sm:text-3xl font-bold text-center mb-6">Location</h2>
          <motion.iframe
            title="Chungi Amer Sidhu Lahore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13699.017635739825!2d74.30802083228114!3d31.54083235020181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907405303089f%3A0x809e59a3e7899ee2!2sChungi%20Amar%20Sidhu%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1691778740163!5m2!1sen!2s"
            width="100%"
            height="400"
            className="border-2 border-gray-300 dark:border-[#00FBF4]/50 rounded-xl"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
