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
        className="fixed z-50 top-6 left-1/2 -translate-x-1/2 pointer-events-auto"
        aria-label="Main navigation"
      >
        <div
          className="
            flex items-center gap-2 md:gap-4 lg:gap-6 px-4 md:px-6 py-2.5 md:py-3.5
            rounded-full
            backdrop-blur-xl
            bg-white/40 dark:bg-gray-900/50
            border border-white/50 dark:border-gray-700/50
            shadow-[0_8px_32px_rgba(219,39,119,0.2)] dark:shadow-[0_8px_32px_rgba(219,39,119,0.15)]
            floating-nav
          "
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-1 text-pink-600 font-extrabold text-xl lg:text-2xl tracking-tighter select-none mr-2 md:mr-4 drop-shadow-md transition-transform hover:scale-105"
          >
            H.A<span className="text-gray-800 dark:text-gray-200"></span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {[
              { name: "Home", path: "/" },
              { name: "Experience", path: "/my-experience" },
              { name: "Skills", path: "/skills" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" }
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="nav-link relative px-4 py-1.5 text-sm font-semibold text-gray-800 dark:text-gray-200 rounded-full transition-colors duration-300 hover:text-pink-600"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="w-[1px] h-6 bg-gray-300 dark:bg-gray-600 mx-1 hidden md:block"></div>

          {/* Actions */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="
                p-2 rounded-full 
                bg-white/60 dark:bg-black/60
                text-gray-700 dark:text-gray-200
                hover:text-pink-600 dark:hover:text-pink-400
                shadow-sm border border-white/40 dark:border-gray-700/50
                transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(219,39,119,0.2)]
              "
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 rounded-full bg-white/60 dark:bg-black/60 text-gray-700 dark:text-gray-200 hover:text-pink-600 transition-all duration-300 border border-white/40 dark:border-gray-700/50 shadow-sm"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 w-64 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
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
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .floating-nav {
          animation: gentleFloat 5s ease-in-out infinite;
        }

        .nav-link::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: linear-gradient(135deg, rgba(219, 39, 119, 0.15), rgba(219, 39, 119, 0.05));
          opacity: 0;
          transform: scale(0.6);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: -1;
        }

        .nav-link:hover::before {
          opacity: 1;
          transform: scale(1);
        }

        .nav-link:hover {
          text-shadow: 0 0 10px rgba(219, 39, 119, 0.5);
        }
      `}</style>
    </div>
  );
};

export default SidebarNavbar;
