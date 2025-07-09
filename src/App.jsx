import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import ProjectsPage from './components/sections/ProjectsPage'; // ✅ import the page

function App() {
  return (
    <Router>
      <div className="bg-gray-100 text-gray-800 font-sans">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <main>
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
              </main>
            }
          />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
