import React,  {useState}  from "react";
import  {Link}  from "react-router-dom";

const SidebarNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-black text-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-[#00FBF4] font-extrabold text-2xl tracking-tight hover:text-white"
              >
                Hafiz Hamid
              </Link>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="text-white focus:outline-none"
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

            {/* Links for large screens */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              <Link
                to="/"
                className="text-white text-lg font-bold hover:text-[#00FBF4] transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/my-experience"
                className="text-white text-lg font-bold hover:text-[#00FBF4] transition duration-300"
              >
                My Experience
              </Link>
              <Link
                to="/skills"
                className="text-white text-lg font-bold hover:text-[#00FBF4] transition duration-300"
              >
                My Skills
              </Link>
              <Link
                to="/projects"
                className="text-white text-lg font-bold hover:text-[#00FBF4] transition duration-300"
              >
                Projects
              </Link>
              <Link
                to="/contact"
                className="text-white text-lg font-bold hover:text-[#00FBF4] transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-black bg-opacity-90 w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white text-2xl focus:outline-none"
            >
              &times;
            </button>
          </div>

          {/* Sidebar Links */}
          <nav className="flex flex-col space-y-6 p-4">
            <Link
              to="/"
              className="text-white text-lg font-bold hover:text-[#00FBF4] transition duration-300"
              onClick={() => setIsSidebarOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/my-experience"
              className="text-white text-lg font-bold hover:text-[#00FBF4] transition duration-300"
              onClick={() => setIsSidebarOpen(false)}
            >
              My Experience
            </Link>
            <Link
              to="/skills"
              className="text-white text-lg font-bold hover:text-[#00FBF4] transition duration-300"
              onClick={() => setIsSidebarOpen(false)}
            >
              My Skills
            </Link>
            <Link
              to="/projects"
              className="text-white text-lg font-bold hover:text-[#00FBF4] transition duration-300"
              onClick={() => setIsSidebarOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-white text-lg font-bold hover:text-[#00FBF4] transition duration-300"
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
