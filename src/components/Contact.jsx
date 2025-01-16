import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import facebookImage from '../assets/facebook.png';
import githubImage from '../assets/github.png';
import linkedinImage from '../assets/linkedin.png';
import emailImage from '../assets/email.png';
import whatsappImage from '../assets/whatsapp.png';
import instaImage from '../assets/instagram.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="bg-[#000000] py-16">
      <div className="container mx-auto px-6 sm:px-8">
        {/* Title Section */}
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              className="text-center mb-12"
              ref={ref}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              <motion.h1
                className="text-[#00FBF4] text-5xl font-bold mb-4 tracking-wider hover:text-white hover:shadow-lg hover:shadow-[#00FBF4] transition duration-300"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Get in Touch
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-white font-light mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Have any questions or want to work together? Reach out via the form or through any platform below.
              </motion.p>
            </motion.div>
          )}
        </InView>

        {/* Contact Form Section */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#00000080] p-6 rounded-lg shadow-lg max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl text-[#00FBF4] font-bold mb-6 text-center">
            Send Us a Message
          </h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white text-lg font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-[#00FBF4] rounded-lg bg-[#000000] text-white focus:outline-none focus:border-[#00FBF4]"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-lg font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-[#00FBF4] rounded-lg bg-[#000000] text-white focus:outline-none focus:border-[#00FBF4]"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-white text-lg font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-[#00FBF4] rounded-lg bg-[#000000] text-white focus:outline-none focus:border-[#00FBF4]"
              placeholder="Type your message here"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#00FBF4] text-black px-6 py-3 rounded-lg font-bold hover:bg-white transition duration-300 w-full"
          >
            Submit
          </button>
        </form>

        {/* Contact Options Section */}
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12"
              ref={ref}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
            >
              {/* Facebook */}
              <ContactCard
                href="https://www.facebook.com/share/15qYWfs8hM/"
                image={facebookImage}
                alt="Facebook"
                text="Facebook Profile"
              />
                  {/* GitHub */}
                  <ContactCard
                href="https://github.com/Hamid2312"
                image={githubImage}
                alt="GitHub"
                text="GitHub Profile"
              />
                {/* LinkedIn */}
                <ContactCard
                href="https://www.linkedin.com/in/hafiz-hamid-b40795336"
                image={linkedinImage}
                alt="LinkedIn"
                text="LinkedIn Profile"
              />
                {/* Email */}
                <ContactCard
                href="mailto:hafizalig312@gmail.com"
                image={emailImage}
                alt="Email"
                text="Send an Email"
              />
               {/* WhatsApp */}
               <ContactCard
                href="https://wa.me/+923249462896"
                image={whatsappImage}
                alt="WhatsApp"
                text="WhatsApp"
              />
                {/* Instagram */}
                <ContactCard
                href="https://www.instagram.com/hamid__ali13"
                image={instaImage}
                alt="Instagram"
                text="Instagram"
              />
              {/* Other Cards */}
            </motion.div>
          )}
        </InView>

        {/* Map Section */}
        <div className="mb-12">
          <h2 className="text-3xl text-[#00FBF4] font-bold text-center mb-6 hover:text-white hover:shadow-lg hover:shadow-[#00FBF4] transition duration-300">
            Location
          </h2>
          <iframe
            title="Chungi Amer Sidhu Lahore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13699.017635739825!2d74.30802083228114!3d31.54083235020181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907405303089f%3A0x809e59a3e7899ee2!2sChungi%20Amar%20Sidhu%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1691778740163!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: '0', borderRadius: '10px' }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

const ContactCard = ({ href, image, alt, text }) => (
  <motion.div
    className="bg-[#00000080] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:border-4 border-[#00FBF4] text-center transition-all duration-300"
  >
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      <img
        src={image}
        alt={alt}
        className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-[#00FBF4]"
      />
      <h1 className="text-white font-bold">{text}</h1>
    </a>
  </motion.div>
);

export default Contact;
