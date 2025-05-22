import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MyExperience from "./components/MyExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorBubbling from "./components/CursorBubbling"; // Import CursorBubbling
import "aos/dist/aos.css";
import AOS from "aos";
import ScrollToTop from "./components/ScrollToTop";

// Layout component to wrap the cursor bubbling, navbar, content, and footer
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <CursorBubbling /> {/* Add CursorBubbling canvas */}
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
                <Contact />
              </Layout>
            }
          />
          <Route path="/my-experience" element={<Layout><MyExperience /></Layout>} />
          <Route path="/skills" element={<Layout><Skills /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;