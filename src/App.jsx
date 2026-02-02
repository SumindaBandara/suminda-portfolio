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

import BookAnimationPage from './components/sections/BookAnimationPage';

import CarGallery from './components/WebPages/CarGallery';
import PlatinumCarSales from './components/WebPages/PlatinumCarSales';
import CeyloneCarSale from './components/WebPages/CeyloneCarSale';
import CORHoldingsSale from './components/WebPages/corholdings';
import CORHoldings2 from './components/WebPages/corholdings2';

import CarRental from './components/sections/CarRental/CarRental';


function App() {
  return (
    <Router>
      <div className="bg-gray-100 text-gray-800 font-sans scroll-smooth">
        

        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Navbar />
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
                
                <Footer />
              </main>
            }
          />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactSection />} />
          

          <Route path="/aaanimation" element={<BookAnimationPage />} />
          <Route path="/aaCarGallery" element={<CarGallery />} />
          <Route path="/aaPlatinumCarSales" element={<PlatinumCarSales />} />CeyloneCarSale
          <Route path="/aaCeyloneCarSale" element={<CeyloneCarSale />} />
          <Route path="/aaCORHoldingsSale" element={<CORHoldingsSale />} />
          <Route path="/aaBusinessLanka" element={<CORHoldings2 />} />

          <Route path="/CarRental" element={<CarRental />} />
          
          
          
        </Routes>

       
        
      </div>
      
    </Router>
  );
}

export default App;
