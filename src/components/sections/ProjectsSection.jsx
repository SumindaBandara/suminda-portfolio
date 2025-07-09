import React from 'react';
import { projects } from '../../constants/projects';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-blue-800 mb-10">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Project Image */}
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* GitHub Link */}
                <a 
                  href={project.github} 
                  className="text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => window.open('/projects', '_blank')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
