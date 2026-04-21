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
import AnimatedSection from "./components/AnimatedSection";
import "aos/dist/aos.css";
import AOS from "aos";

// Layout component wraps common elements
const Layout = ({ children }) => {
  return (
    // bg-white dark:bg-black on the root ensures no white flash in dark mode
    // when sections are at opacity:0 during animation
    <div className="flex flex-col min-h-screen relative bg-[#F7F7F7] dark:bg-[#000]">
      <CursorBubbling />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 450,   // was 1000ms — halved to match framer motion speed
      easing: "ease-out",
      offset: 40,      // trigger 40px before element enters viewport
    });
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
                {/* All sections use delay=0 — no stagger, no white-flash waiting */}
                <AnimatedSection delay={0}>
                  <HeroSection />
                </AnimatedSection>

                <AnimatedSection delay={0}>
                  <MyExperience />
                </AnimatedSection>

                <AnimatedSection delay={0}>
                  <Skills />
                </AnimatedSection>

                <AnimatedSection delay={0}>
                  <Projects />
                </AnimatedSection>

                <AnimatedSection delay={0}>
                  <Certifications />
                </AnimatedSection>

                <AnimatedSection delay={0}>
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
                <AnimatedSection delay={0}>
                  <Certifications />
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
