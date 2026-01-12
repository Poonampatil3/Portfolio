import React from "react";
import Button from "../ui/Button.jsx";

const ProjectsPreview = () => {
  const featuredProjects = [
    {
      title: "EcoDispose - Smart Waste Management",
      description: "A comprehensive waste management system with real-time tracking, route optimization, and environmental impact analytics.",
      tech: ["React", "FastAPI", "MySQL", "Maps API"],
      image: "🌱",
      link: "#"
    },
    {
      title: "Banking Management System",
      description: "Secure banking application with transaction management, account handling, and comprehensive reporting features.",
      tech: ["Python", "Flask", "SQLite", "Bootstrap"],
      image: "🏦",
      link: "#"
    },
    {
      title: "AI Content Analyzer",
      description: "Machine learning-powered tool for content analysis, sentiment detection, and automated categorization.",
      tech: ["Python", "ML Libraries", "React", "API Integration"],
      image: "🤖",
      link: "#"
    }
  ];

  return (
    <section className="mt-20">
      <div className="text-center mb-12">
        <p className="section-eyebrow">Featured Work</p>
        <h2 className="heading-lg mb-4">
          Projects that showcase my skills
        </h2>
        <p className="text-muted" style={{ fontSize: "1rem", maxWidth: "600px", margin: "0 auto" }}>
          Here are some of my recent projects that demonstrate my ability to build 
          full-stack applications and solve real-world problems.
        </p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
        {featuredProjects.map((project, index) => (
          <div key={project.title} className="card animate-fadeIn" style={{ animationDelay: `${index * 0.2}s`, padding: "2rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem", textAlign: "center" }}>
              {project.image}
            </div>
            <h3 className="heading-md mb-3">{project.title}</h3>
            <p className="text-muted mb-4" style={{ lineHeight: 1.6 }}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <Button size="sm">View Project</Button>
              <Button variant="outline" size="sm">Live Demo</Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a href="/projects">
          <Button>View All Projects</Button>
        </a>
      </div>
    </section>
  );
};

export default ProjectsPreview;