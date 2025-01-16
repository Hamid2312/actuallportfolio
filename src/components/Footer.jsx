import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* About Me Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#00FBF4] mb-4">About Me</h3>
          <p className="text-lg">I'm a frontend developer specializing in creating stunning websites and applications using React, Tailwind CSS, and modern web technologies.</p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#00FBF4] mb-4">Quick Links</h3>
          <ul>
            <li><Link to="my-experience" className="text-lg hover:text-[#00FBF4]">My Experience</Link></li>
            <li><Link to="contact" className="text-lg hover:text-[#00FBF4]">Get in touch</Link></li>
            <li><Link to="skills" className="text-lg hover:text-[#00FBF4]">My Skills</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-2xl font-bold text-[#00FBF4] mb-4">Contact</h3>
          <p className="text-lg">Email: <a href="mailto:hafizalig312@gmail.com" className="text-[#00FBF4] hover:text-[#00FBF4]">hafizalig312@gmail.com</a></p>
          <p className="text-lg">Phone: <a href="tel:+923249462896" className="text-[#00FBF4] hover:text-[#00FBF4]">+92 3249462896</a></p>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="mt-8 border-t border-[#00FBF4] pt-6">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.facebook.com/share/15qYWfs8hM/" target='_blank' rel="noopener noreferrer" className="text-2xl text-[#00FBF4] hover:text-[#00FBF4]" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://github.com/Hamid2312" target='_blank' rel="noopener noreferrer" className="text-2xl text-[#00FBF4] hover:text-[#00FBF4]" aria-label="Twitter">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/hafiz-hamid-b40795336" target='_blank' rel="noopener noreferrer" className="text-2xl text-[#00FBF4] hover:text-[#00FBF4]" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p className="text-lg text-center text-[#00FBF4] mb-6">© 2025 Hafiz Hamid Ali. All rights reserved.</p>
        {/* Scroll to Top Button */}
        <div className="flex justify-center">
          <button
            onClick={scrollToTop}
            className="bg-[#00FBF4] text-black font-bold py-2 px-6 rounded-md hover:bg-white hover:text-black transition-all duration-300"
          >
            Go to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
