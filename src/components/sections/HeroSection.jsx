import React, { useState, useEffect } from 'react';
import { Github, Code, TrendingUp, ChevronDown, ExternalLink, Star, GitBranch, Eye } from 'lucide-react';



const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = [
    { title: "MERN Stack Developer", icon: Code, color: "from-blue-500 to-cyan-500" },
    { title: "Digital Marketing Expert", icon: TrendingUp, color: "from-purple-500 to-pink-500" }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with payment integration and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      stars: 24,
      forks: 8,
      language: "JavaScript",
      repo: "https://github.com/funkyboyz/ecommerce-platform"
    },
    {
      id: 2,
      title: "Social Media Analytics Dashboard",
      description: "Real-time analytics dashboard for social media marketing campaigns",
      tech: ["React", "D3.js", "Firebase", "Chart.js"],
      stars: 18,
      forks: 5,
      language: "TypeScript",
      repo: "https://github.com/funkyboyz/social-analytics"
    },
    {
      id: 3,
      title: "AI-Powered Marketing Tool",
      description: "Machine learning tool for optimizing digital marketing campaigns",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      stars: 31,
      forks: 12,
      language: "Python",
      repo: "https://github.com/funkyboyz/ai-marketing-tool"
    },
    {
      id: 4,
      title: "Content Management System",
      description: "Headless CMS with React frontend and Node.js backend",
      tech: ["React", "Node.js", "PostgreSQL", "GraphQL"],
      stars: 15,
      forks: 4,
      language: "JavaScript",
      repo: "https://github.com/funkyboyz/headless-cms"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const CurrentIcon = roles[currentRole].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Mouse Follower */}
      <div 
        className="absolute w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full pointer-events-none z-10 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          opacity: 0.6
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Hero Section */}
        <section id="home" className="flex-1 flex items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* Profile Image Placeholder */}
              <div className="relative mx-auto lg:mx-0 w-32 h-32 mb-8 group">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-full p-1 animate-pulse">
                  <img 
                      src="/assets/abcd.jpg"
                          alt="Funky Boyz"
                          className="w-full h-full rounded-full object-cover"
/>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Suminda Bandara</span>
              </h1>
              
              {/* Animated Role Switcher */}
              <div className="h-20 flex items-center justify-center lg:justify-start mb-6">
                <div className={`flex items-center space-x-3 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <div className={`p-3 rounded-full bg-gradient-to-r ${roles[currentRole].color}`}>
                    <CurrentIcon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-white">
                    {roles[currentRole].title}
                  </h2>
                </div>
              </div>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Bridging the gap between <span className="text-blue-400 font-semibold">cutting-edge development</span> and 
                <span className="text-purple-400 font-semibold"> strategic marketing</span> to create digital experiences that not only function flawlessly but also drive meaningful engagement and growth.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  View My Work
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-300 font-semibold rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Right Side - Skills Visual */}
            <div className={`hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {/* Development Skills */}
                    <div className="text-center">
                      <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <h3 className="text-white font-semibold mb-2">Development</h3>
                      <div className="space-y-2">
                        {["React", "Node.js", "MongoDB", "Express"].map((skill, index) => (
                          <div key={skill} className="bg-slate-700 rounded-full px-3 py-1 text-sm text-gray-300">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Marketing Skills */}
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                      <h3 className="text-white font-semibold mb-2">Marketing</h3>
                      <div className="space-y-2">
                        {["SEO", "Analytics", "Social Media", "PPC"].map((skill, index) => (
                          <div key={skill} className="bg-slate-700 rounded-full px-3 py-1 text-sm text-gray-300">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      {/* Projects Section */}
      
    </div>
  );
};

export default HeroSection;