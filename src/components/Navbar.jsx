import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const SidebarNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      {/* Navbar */}
      <nav
        className="
          fixed w-full z-50 left-0 top-4
          transform-gpu
          pointer-events-auto
        "
        aria-label="Main navigation"
      >
        <div
          className="
            relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
            rounded-2xl
            shadow-2xl
            backdrop-blur-sm
            bg-gradient-to-br from-white/70 to-gray-100/60
            dark:from-black/60 dark:to-gray-900/60
            border border-transparent
            py-2
            transition-all
            will-change-transform
            animate-floating
          "
        >
          {/* moving shade overlay */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0 pointer-events-none rounded-2xl overflow-hidden
            "
          >
            <div className="nav-shade absolute inset-0" />
          </div>

          <div className="flex items-center justify-between h-14 relative">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-pink-600 font-extrabold text-2xl tracking-tight select-none"
              >
                Hafiz Hamid
              </Link>
            </div>

            {/* Hamburger Menu and Theme Toggle (Mobile) */}
            <div className="lg:hidden flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="
                  p-2 rounded-full 
                  bg-white/80 dark:bg-black/70
                  text-gray-900 dark:text-white
                  shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-cyan-600
                "
                aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              >
                {theme === "light" ? (
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
                className="text-gray-900 dark:text-white focus:outline-none p-2"
                aria-label="Open menu"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Links and Theme Toggle for large screens */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <Link to="/" className="link text-gray-800 dark:text-gray-200 hover:text-pink-600 transition">
                Home
              </Link>
              <Link to="/my-experience" className="link text-gray-800 dark:text-gray-200 hover:text-pink-600 transition">
                My Experience
              </Link>
              <Link to="/skills" className="link text-gray-800 dark:text-gray-200 hover:text-pink-600 transition">
                My Skills
              </Link>
              <Link to="/projects" className="link text-gray-800 dark:text-gray-200 hover:text-pink-600 transition">
                Projects
              </Link>
              <Link to="/Certifications" className="link text-gray-800 dark:text-gray-200 hover:text-pink-600 transition">
                Certifications
              </Link>
              <Link to="/contact" className="link text-gray-800 dark:text-gray-200 hover:text-pink-600 transition">
                Contact
              </Link>

              <button
                onClick={toggleTheme}
                className="
                  p-2 rounded-full 
                  bg-white/80 dark:bg-black/70
                  text-gray-900 dark:text-white
                  shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-cyan-600
                "
                aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              >
                {theme === "light" ? (
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
              aria-label="Close sidebar"
            >
              ×
            </button>
          </div>

          {/* Sidebar Links */}
          <nav className="flex flex-col space-y-6 p-4">
            <Link to="/" className="link" onClick={() => setIsSidebarOpen(false)}>
              Home
            </Link>
            <Link to="/my-experience" className="link" onClick={() => setIsSidebarOpen(false)}>
              My Experience
            </Link>
            <Link to="/skills" className="link" onClick={() => setIsSidebarOpen(false)}>
              My Skills
            </Link>
            <Link to="/projects" className="link" onClick={() => setIsSidebarOpen(false)}>
              Projects
            </Link>
            <Link to="/contact" className="link" onClick={() => setIsSidebarOpen(false)}>
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
          aria-hidden="true"
        ></div>
      )}

      {/* Local styles for floating and shade animation */}
      <style>{`
        /* Floating animation: gentle vertical float */
        @keyframes floatY {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }

        .animate-floating {
          animation: floatY 6s ease-in-out infinite;
        }

        /* moving pink shade overlay */
        .nav-shade {
          /* gradient stripe with high pink opacity in the middle */
          background: linear-gradient(
            90deg,
            rgba(219,39,119,0) 0%,
            rgba(219,39,119,0.65) 30%,
            rgba(219,39,119,0.65) 70%,
            rgba(219,39,119,0) 100%
          );
          /* start the stripe off to the left so it moves across */
          background-size: 200% 100%;
          background-position: -100% 0%;
          opacity: 1;
          mix-blend-mode: screen;
          will-change: background-position;
          transition: background-position 0.2s linear;
          filter: drop-shadow(0 6px 40px rgba(219,39,119,0.18));
        }

        /* shade movement — left to right loop */
        @keyframes shadeMove {
          0% { background-position: -100% 0%; }
          50% { background-position: 100% 0%; }
          100% { background-position: -100% 0%; }
        }

        /* apply the animation on larger screens, but also keep it on mobile.
           shorter duration on mobile for perception and performance */
        .nav-shade {
          animation: shadeMove 6s linear infinite;
        }

        /* make sure rounded corners clip the shade */
        nav > div > .nav-shade,
        nav > div {
          border-radius: 0.75rem; /* matches rounded-2xl visually */
        }

        /* Gentle focus outline for interactive buttons on smaller screens */
        button:focus {
          outline: 2px solid transparent;
          box-shadow: 0 0 0 3px rgba(6,182,212,0.15);
        }

        /* Ensure the nav's internal content remains above the shade visually */
        nav .relative,
        .gradient-text,
        .link,
        .link * {
          position: relative;
          z-index: 10;
        }

        /* Gradient text helper (if you have this in HeroSection's global CSS, this is redundant).
           Keeps the same visual identity for the logo text. */
        .gradient-text {
          background: linear-gradient(90deg, #06b6d4, #db2777);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        /* Responsive tweaks: slightly reduce nav padding and rounding on very small devices */
        @media (max-width: 420px) {
          nav > div {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }

          /* speed up shade animation a bit on tiny screens for perceived responsiveness */
          .nav-shade {
            animation-duration: 4.5s;
          }
        }
      `}</style>
    </div>
  );
};

export default SidebarNavbar;
