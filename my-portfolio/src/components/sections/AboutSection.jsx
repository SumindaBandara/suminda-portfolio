import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-blue-800 mb-10">About Me</h3>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">💻 MERN Stack Developer</h4>
            <p className="text-gray-600">
              I design and build full-stack applications using MongoDB, Express, React, and Node.js. I'm passionate about creating scalable, performant, and user-friendly applications.
            </p>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">📈 Digital Marketer</h4>
            <p className="text-gray-600">
              With marketing expertise, I help businesses grow their online presence, run ad campaigns, optimize SEO, and drive customer engagement through data-driven strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
