import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MyExperience from "./components/MyExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications"; // Import Certifications
import Footer from "./components/Footer";
import CursorBubbling from "./components/CursorBubbling";
import "aos/dist/aos.css";
import AOS from "aos";
import ScrollToTop from "./components/ScrollToTop";

// Layout component to wrap the cursor bubbling, navbar, content, and footer
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <CursorBubbling />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HeroSection />
                <MyExperience />
                <Skills />
                <Projects />
                <Certifications /> {/* Add Certifications to main page */}
                <Contact />
              </Layout>
            }
          />
          <Route path="/my-experience" element={<Layout><MyExperience /></Layout>} />
          <Route path="/skills" element={<Layout><Skills /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/certifications" element={<Layout><Certifications /></Layout>} /> {/* New route */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;