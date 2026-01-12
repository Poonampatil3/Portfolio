import React, { useState } from "react";
import { trackAnalytics } from "../../utils/api.js";
import "../styles/projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const handleGetInTouch = () => {
    trackAnalytics('get_in_touch_clicked', 'projects');
  };

  const handleViewGithub = () => {
    trackAnalytics('view_github_clicked', 'projects');
  };

  const projects = [
    {
      id: 1,
      title: "EcoDispose - Smart Waste Management",
      description: "A comprehensive waste management system with real-time tracking, route optimization, and environmental impact analytics. Built with modern web technologies for scalability and performance.",
      image: "🌱",
      tech: ["React", "FastAPI", "MySQL", "Maps API", "Python"],
      category: "Full Stack",
      github: "https://github.com/poonampatil123",
      live: "https://fistbump-digital-ecodispose-1.onrender.com/",
      featured: true
    },
    {
      id: 2,
      title: "Banking Management System",
      description: "Secure banking application with transaction management, account handling, and comprehensive reporting features. Implements robust security measures and user authentication.",
      image: "🏦",
      tech: ["Python", "Flask", "SQLite", "Bootstrap", "JavaScript"],
      category: "Full Stack",
      github: "https://github.com/poonampatil123",
      live: "https://banking-demo.herokuapp.com",
      featured: true
    },
    {
      id: 3,
      title: "AI Content Analyzer",
      description: "Machine learning-powered tool for content analysis, sentiment detection, and automated categorization. Processes large datasets efficiently with advanced NLP techniques.",
      image: "🤖",
      tech: ["Python", "Machine Learning", "NLP", "Flask", "React"],
      category: "AI/ML",
      github: "https://github.com/poonampatil123",
      live: "https://ai-content-analyzer-demo.herokuapp.com",
      featured: true
    },
    {
      id: 4,
      title: "FarmConnect Platform",
      description: "Digital platform connecting farmers with buyers, featuring crop management, pricing analytics, and direct communication channels.",
      image: "🌾",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      category: "Full Stack",
      github: "https://github.com/poonampatil123",
      live: "https://farm-connect-5d59.onrender.com/",
      featured: false
    },
    {
      id: 5,
      title: "PixCart E-commerce",
      description: "Modern e-commerce platform with shopping cart, payment integration, inventory management, and admin dashboard.",
      image: "🛒",
      tech: ["React", "Python", "PostgreSQL", "Stripe API"],
      category: "Full Stack",
      github: "https://github.com/poonampatil123",
      live: "https://pixcartecommerce-2.onrender.com/",
      featured: false
    },
    {
      id: 6,
      title: "Steganography Tool",
      description: "Advanced steganography application for hiding data within images using various algorithms and encryption techniques.",
      image: "🔐",
      tech: ["Python", "OpenCV", "Tkinter", "Cryptography"],
      category: "Security",
      github: "https://github.com/poonampatil123",
      live: "#",
      featured: false
    },
    {
      id: 7,
      title: "Smart Waste Management Platform",
      description: "Digital platform for efficient waste management with real-time tracking, route optimization, and environmental impact monitoring. Built with modern web technologies.",
      image: "🌍",
      tech: ["React", "Node.js", "MongoDB", "Express", "Maps API"],
      category: "Full Stack",
      github: "https://github.com/poonampatil123",
      live: "https://fistbump-digital.vercel.app/",
      featured: true
    },
    {
      id: 8,
      title: "CineMatch – Movie Recommender System",
      description: "AI-powered movie recommendation platform with personalized suggestions, search functionality, and MongoDB integration for user data.",
      image: "🎬",
      tech: ["JavaScript", "Node.js", "Express", "MongoDB", "TMDB API"],
      category: "Full Stack",
      github: "https://github.com/Poonampatil3/MOVIE-RECOMMENDER-PROJECT",
      live: "https://cinematch-api-m9io.onrender.com/",
      featured: true
    }

  ];

  const categories = ["All", "Full Stack", "AI/ML", "Security"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="section">
      <div className="container">
        <div className="animate-fade-in-up">
          
          {/* Header */}
          <div className="projects-header">
            <h1 className="heading-lg mb-4">Projects</h1>
            <p className="text-lg mb-8">
              A collection of projects that showcase my skills in full-stack development, 
              problem-solving, and modern web technologies.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="project-filters animate-slide-in-left">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`filter-btn ${filter === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card animate-slide-in-left"
                style={{
                  animation: `slideInLeft 0.7s ease-out`,
                  animationDelay: `${index * 0.2}s`,
                  animationFillMode: 'both',
                  opacity: 0
                }}
              >
                <div className="project-image">
                  <span>{project.image}</span>
                  
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a href={project.github} className="btn btn-secondary btn-sm">
                      <span>GitHub</span>
                    </a>
                    <a href={project.live} className="btn btn-primary btn-sm">
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="projects-cta animate-fade-in-up animate-stagger-3">
            <div className="card" style={{ textAlign: "center", marginTop: "4rem" }}>
              <h3 className="heading-md mb-4">Interested in collaborating?</h3>
              <p className="text-base mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                <a href="/contact" className="btn btn-primary" onClick={handleGetInTouch}>
                  Get In Touch
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-secondary" onClick={handleViewGithub}>
                  View GitHub
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;