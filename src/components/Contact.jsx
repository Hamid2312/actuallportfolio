import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', email: '', phone: '', subject: '', message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    if (typeof window.emailjs !== 'undefined' && typeof window.emailjs.init === 'function') {
      window.emailjs.init('RbVUdgkgNSU1oYJ2N'); // Your public key
    }
  }, []);

  const PRIMARY_COLOR_CLASS = "text-pink-600 dark:text-pink-400";
  const HOVER_COLOR_CLASS = "bg-pink-600 hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-400";

  const contactInfo = [
    { 
      type: "Address", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ), 
      value: "Chungi Amar Sidhu, Lahore, Pakistan"
    },
    { 
      type: "Email", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ), 
      value: "hafizalig312@gmail.com", 
      href: "mailto:hafizalig312@gmail.com"
    },
    { 
      type: "Phone", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.67-1.02c-3.92-1.57-7.22-4.22-9.45-7.44l-.27-.37a6 6 0 0 1 2.37-7.9 2.06 2.06 0 0 1 1.6-.37 1 1 0 0 1 .47.1l.66.4a2 2 0 0 0 2.2 0l3.78-2.61a2 2 0 0 1 2.47.1l.66.4c.32.2.6.46.8.8.2.34.3.73.3 1.12a2 2 0 0 1-1.35 1.86l-1.63.76a2 2 0 0 0-1.07 2.03c.18 1.04.5 1.97.97 2.82l.49.88c.4.74.84 1.45 1.3 2.15l.49.88c.32.55.7 1.07 1.15 1.55l.45.45c.48.48 1.04.88 1.63 1.2a2 2 0 0 0 2.03 0l1.63-.76a2 2 0 0 1 1.86-1.35 2 2 0 0 1 1.12.3 2 2 0 0 0 1.25.75l.66.4a2 2 0 0 1 1.6.37l.47.1a2 2 0 0 1 2 2.06z"/>
        </svg>
      ), 
      value: "+92 324 9462896", 
      href: "https://wa.me/+923249462896"
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message, phone, subject } = formData;

    if (!name || !email || !message) return toast.error('Please fill in all required fields.');
    if (!validateEmail(email)) return toast.error('Please enter a valid email address.');

    setIsSubmitting(true);

    if (typeof window.emailjs === 'undefined') {
      toast.error("Email service not initialized.");
      setIsSubmitting(false);
      return;
    }

    window.emailjs.send(
      'service_7jpwnyd',
      'template_nu0j2ai',
      { from_name: name, from_email: email, phone: phone || 'N/A', subject: subject || 'No Subject', message },
      'RbVUdgkgNSU1oYJ2N'
    ).then(
      () => {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setIsSubmitting(false);
      },
      (error) => {
        toast.error('Failed to send message: ' + error.text);
        setIsSubmitting(false);
      }
    );
  };

  const { ref: sectionRef, inView: sectionInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="bg-pink-50 dark:bg-[#120312] py-16 sm:py-20 relative overflow-hidden" ref={sectionRef}>
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN */}
          <motion.div initial={{ opacity: 0 }} animate={sectionInView ? { opacity: 1 } : {}}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white">Contact Info</h1>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 font-light mb-12">
              Have any questions or want to collaborate? I'm eager to hear from you.
            </p>
            {contactInfo.map((item, idx) => (
              <div key={idx} className="flex items-start mb-8 gap-4">
                <div className={`p-3 rounded-full ${PRIMARY_COLOR_CLASS} border border-pink-200 dark:border-pink-800 flex-shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.type}</h3>
                  <a href={item.href || '#'} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-200">
                    {item.value}
                  </a>
                </div>
              </div>
            ))}
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name*" required
                className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email*" required
                className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone"
                className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500" />
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject"
                className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500" />
            </div>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message..." rows="6" required
              className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500 mb-6" />
            <button type="submit" disabled={isSubmitting} className={`flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 shadow-md ${isSubmitting ? 'opacity-50 cursor-not-allowed bg-pink-500' : HOVER_COLOR_CLASS}`}>
              {isSubmitting ? 'Sending...' : 'Free Consultation'}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
