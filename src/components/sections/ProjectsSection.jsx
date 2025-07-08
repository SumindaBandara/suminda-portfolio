import React from 'react';
import { projects } from '../../constants/projects';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-blue-800 mb-10">Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-800">{project.title}</h4>
              <p className="text-gray-600 mt-2 mb-4">{project.description}</p>
              <a href={project.github} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
