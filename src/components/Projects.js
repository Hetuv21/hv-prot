import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Code2 } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Interactive Quiz Application",
      description: "A modern, responsive quiz application built with React and Spring Boot. Features real-time scoring, multiple question types, and admin dashboard for quiz management. Perfect for educational institutions and online learning.",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=500&h=300&fit=crop",
      technologies: ["React", "Spring Boot", "MySQL", "HTML5", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Student Attendance Management System",
      description: "A comprehensive attendance tracking system with automated reporting, student dashboard, and teacher portal. Built with Java Spring Boot backend and modern web technologies for seamless user experience.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=500&h=300&fit=crop",
      technologies: ["Java", "Spring Boot", "MySQL", "JavaScript", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing my projects and skills. Built with React, Tailwind CSS, and modern web technologies. Features smooth animations, dark/light mode, and mobile-first design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["React", "Tailwind CSS", "JavaScript", "HTML5"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      id: 4,
      title: "RESTful API with Authentication",
      description: "A secure REST API built with Spring Boot featuring JWT authentication, CRUD operations, and comprehensive documentation with Swagger. Includes Google OAuth integration for social login.",
      image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=500&h=300&fit=crop",
      technologies: ["Spring Boot", "Java", "MySQL", "JWT", "Swagger", "Google OAuth"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Backend"
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my learning journey through hands-on projects, demonstrating practical skills in modern web development technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg"
                  : "bg-white/10 text-white border-white/20 hover:bg-white/20"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-teal-500/80 to-cyan-500/80 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex space-x-4">
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <Badge className="bg-teal-500/20 text-teal-400 border-teal-400/30">
                    {project.category}
                  </Badge>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 text-white text-xs rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent border-teal-400/50 text-teal-400 hover:bg-teal-400/10"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Code2 className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => window.open("#", '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View More on GitHub (coming soon)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;