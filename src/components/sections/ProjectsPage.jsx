import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { allProjects } from '../../constants/allprojects';

// Extended projects data for the full projects page
// const allProjects = [
//   {
//     title: "E-Commerce MERN App",
//     description: "A full-stack e-commerce application with product search, cart, payment integration, and admin dashboard. Features include user authentication, order management, and real-time inventory tracking.",
//     github: "https://github.com/your-username/ecommerce-app",
//     demo: "https://ecommerce-demo.com",
//     technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"]
//   },
//   {
//     title: "Digital Marketing Dashboard",
//     description: "Dashboard to track ad campaigns, SEO performance, and traffic analytics with real-time data visualization. Includes campaign optimization tools and ROI tracking.",
//     github: "https://github.com/your-username/marketing-dashboard",
//     demo: "https://marketing-dashboard-demo.com",
//     technologies: ["React", "D3.js", "Firebase", "Chart.js", "Google Analytics API"]
//   },
//   {
//     title: "Portfolio Website",
//     description: "This responsive portfolio you're viewing now, built using modern React with Tailwind CSS for styling. Features smooth animations and responsive design.",
//     github: "https://github.com/your-username/portfolio",
//     demo: "https://your-portfolio.com",
//     technologies: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"]
//   },
//   {
//     title: "Task Management App",
//     description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
//     github: "https://github.com/your-username/task-manager",
//     demo: "https://task-manager-demo.com",
//     technologies: ["React", "Firebase", "Material-UI", "Socket.io"]
//   },
//   {
//     title: "Weather App",
//     description: "A modern weather application with location-based forecasts, weather maps, and severe weather alerts. Features clean UI and offline capability.",
//     github: "https://github.com/your-username/weather-app",
//     demo: "https://weather-app-demo.com",
//     technologies: ["React", "OpenWeather API", "PWA", "Chart.js"]
//   },
//   {
//     title: "Blog Platform",
//     description: "A full-featured blog platform with markdown support, user authentication, comments system, and SEO optimization.",
//     github: "https://github.com/your-username/blog-platform",
//     demo: "https://blog-platform-demo.com",
//     technologies: ["Next.js", "MongoDB", "Tailwind CSS", "MDX", "NextAuth"]
//   },
//   {
//     title: "Chat Application",
//     description: "Real-time chat application with private messaging, group chats, file sharing, and emoji support. Built with modern web technologies.",
//     github: "https://github.com/your-username/chat-app",
//     demo: "https://chat-app-demo.com",
//     technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Cloudinary"]
//   },
//   {
//     title: "Recipe Finder",
//     description: "A recipe discovery app with ingredient-based search, meal planning, shopping list generation, and nutritional information.",
//     github: "https://github.com/your-username/recipe-finder",
//     demo: "https://recipe-finder-demo.com",
//     technologies: ["React", "Spoonacular API", "Redux", "Styled Components"]
//   },
//   {
//     title: "Expense Tracker",
//     description: "Personal finance management app with expense tracking, budget planning, data visualization, and financial insights.",
//     github: "https://github.com/your-username/expense-tracker",
//     demo: "https://expense-tracker-demo.com",
//     technologies: ["React", "Chart.js", "Firebase", "PWA", "Material-UI"]
//   }
// ];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">All Projects</h1>
            <button 
              onClick={() => window.open('/', '_blank')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              ← Back to Portfolio
            </button>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <div className="flex space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Want to see more?</h3>
            <p className="text-gray-600 mb-4">Check out my GitHub profile for more projects and contributions.</p>
            <a
              href="https://github.com/SumindaBandara"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github className="mr-2" size={20} />
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;