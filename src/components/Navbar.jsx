import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const SidebarNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 text-gray-900 dark:text-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-	0.125rem">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="gradient-text font-extrabold text-2xl tracking-tight"
              >
                Hafiz Hamid
              </Link>
            </div>

            {/* Hamburger Menu and Theme Toggle (Mobile) */}
            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                )}
              </button>
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="text-gray-900 dark:text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Links and Theme Toggle for large screens */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <Link to="/" className="link">
                Home
              </Link>
              <Link to="/my-experience" className="link">
                My Experience
              </Link>
              <Link to="/skills" className="link">
                My Skills
              </Link>
              <Link to="/projects" className="link">
                Projects
              </Link>
               <Link to="/Certifications" className="link">
                Certifications
              </Link>
              <Link to="/contact" className="link">
                Contact
              </Link>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-600"
                aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
              >
                {theme === 'light' ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-900 dark:text-white text-2xl focus:outline-none"
            >
              ×
            </button>
          </div>

          {/* Sidebar Links */}
          <nav className="flex flex-col space-y-6 p-4">
            <Link
              to="/"
              className="link"
              onClick={() => setIsSidebarOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/my-experience"
              className="link"
              onClick={() => setIsSidebarOpen(false)}
            >
              My Experience
            </Link>
            <Link
              to="/skills"
              className="link"
              onClick={() => setIsSidebarOpen(false)}
            >
              My Skills
            </Link>
            <Link
              to="/projects"
              className="link"
              onClick={() => setIsSidebarOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="link"
              onClick={() => setIsSidebarOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Overlay (to close sidebar) */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        ></div>
      )}
    </div>
  );
};

export default SidebarNavbar;