import React from 'react';

const skills = ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'SEO', 'Google Ads', 'Facebook Marketing'];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-blue-800 mb-10">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
