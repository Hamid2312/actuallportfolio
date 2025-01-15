import React, { useState } from 'react';
import  {motion}  from 'framer-motion';
import  {InView}  from 'react-intersection-observer';
import facebookImage from '../assets/facebook.png';
import githubImage from '../assets/github.png';
import linkedinImage from '../assets/linkedin.png';
import emailImage from '../assets/email.png';
import whatsappImage from '../assets/whatsapp.png';

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
                className="text-[#00FBF4] text-5xl font-bold mb-4 tracking-wider  hover:text-white hover:shadow-lg hover:shadow-[#00FBF4] transition duration-300"
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
              <motion.div
                className="bg-[#00000080] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:border-4 border-[#00FBF4] text-center transition-all duration-300"
                variants={fadeInUp}
              >
                <a
                  href="https://www.facebook.com/share/15qYWfs8hM/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={facebookImage}
                    alt="Facebook"
                    className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-[#00FBF4]"
                  />
                  <h1 className="text-white font-bold">Facebook Profile</h1>
                </a>
              </motion.div>

              {/* GitHub */}
              <motion.div
                className="bg-[#00000080] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:border-4 border-[#00FBF4] text-center transition-all duration-300"
                variants={fadeInUp}
              >
                <a
                  href="https://github.com/Hamid2312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={githubImage}
                    alt="GitHub"
                    className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-[#00FBF4]"
                  />
                  <h1 className="text-white font-bold">GitHub Profile</h1>
                </a>
              </motion.div>

              {/* LinkedIn */}
              <motion.div
                className="bg-[#00000080] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:border-4 border-[#00FBF4] text-center transition-all duration-300"
                variants={fadeInUp}
              >
                <a
                  href="https://www.linkedin.com/in/hafiz-hamid-b40795336"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={linkedinImage}
                    alt="LinkedIn"
                    className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-[#00FBF4]"
                  />
                  <h1 className="text-white font-bold">LinkedIn Profile</h1>
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                className="bg-[#00000080] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:border-4 border-[#00FBF4] text-center transition-all duration-300"
                variants={fadeInUp}
              >
                <a
                  href="mailto:hafizalig312@gmail.com"
                  className="block"
                >
                  <img
                    src={emailImage}
                    alt="Email"
                    className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-[#00FBF4]"
                  />
                  <h1 className="text-white font-bold">Send an Email</h1>
                </a>
              </motion.div>

              {/* WhatsApp */}
              <motion.div
                className="bg-[#00000080] p-6 rounded-lg shadow-lg hover:shadow-2xl hover:border-4 border-[#00FBF4] text-center transition-all duration-300"
                variants={fadeInUp}
              >
                <a
                  href="https://wa.me/+923249462896"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={whatsappImage}
                    alt="WhatsApp"
                    className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-[#00FBF4]"
                  />
                  <h1 className="text-white font-bold">WhatsApp</h1>
                </a>
              </motion.div>
            </motion.div>
          )}
        </InView>

        {/* Map Section */}
        <div className="mb-12">
          <h2 className="text-3xl text-[#00FBF4] font-bold text-center mb-6  hover:text-white hover:shadow-lg hover:shadow-[#00FBF4] transition duration-300">Location</h2>
          <iframe
            title="Chungi Amer Sidhu Lahore"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.763579324849!2d74.32846941451718!3d31.582050981155537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190977e55e171b%3A0x0fc2b8a5cd1e8d21!2sChungi%20Amer%20Sidhu%2C%20Lahore%2C%20Punjab%20Pakistan!5e0!3m2!1sen!2sus!4v1681505753943!5m2!1sen!2sus"
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

export default Contact;
