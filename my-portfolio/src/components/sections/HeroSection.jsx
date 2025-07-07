import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-white">
      <div className="text-center px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-blue-800">Hi, I’m Funky Boyz</h2>
        <p className="mt-4 text-xl text-gray-700">MERN Stack Developer & Digital Marketer</p>
        <p className="mt-2 text-gray-500 max-w-xl mx-auto">
          Combining the power of web development and marketing to build creative solutions.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
