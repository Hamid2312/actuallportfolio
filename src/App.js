import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MyExperience from "./components/MyExperience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import CursorBubbling from "./components/CursorBubbling";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedSection from "./components/AnimatedSection"; // Wrapper for animations
import "aos/dist/aos.css";
import AOS from "aos";

// Layout component wraps common elements
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
    AOS.init({ once: true, duration: 1000, easing: "ease-out" });
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
                {/* Animate each section with a slight stagger */}
                <AnimatedSection delay={0}>
                  <HeroSection />
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <MyExperience />
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <Skills />
                </AnimatedSection>

                <AnimatedSection delay={0.6}>
                  <Projects />
                </AnimatedSection>

                <AnimatedSection delay={0.8}>
                  <Certifications />
                </AnimatedSection>

                <AnimatedSection delay={1}>
                  <Contact />
                </AnimatedSection>
              </Layout>
            }
          />

          {/* Individual Routes */}
          <Route
            path="/my-experience"
            element={
              <Layout>
                <AnimatedSection delay={0}>
                  <MyExperience />
                </AnimatedSection>
              </Layout>
            }
          />

          <Route
            path="/skills"
            element={
              <Layout>
                <AnimatedSection delay={0}>
                  <Skills />
                </AnimatedSection>
              </Layout>
            }
          />

          <Route
            path="/projects"
            element={
              <Layout>
                <AnimatedSection delay={0}>
                  <Projects />
                </AnimatedSection>
              </Layout>
            }
          />

          <Route
            path="/contact"
            element={
              <Layout>
                <AnimatedSection delay={0}>
                  <Contact />
                </AnimatedSection>
              </Layout>
            }
          />

          <Route
            path="/certifications"
            element={
              <Layout>
               <AnimatedSection delay={0} disableY>
  <HeroSection />
</AnimatedSection>

              </Layout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
