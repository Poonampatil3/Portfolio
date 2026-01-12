import React from "react";
import Card from "../ui/Card.jsx";
import Tag from "../ui/Tag.jsx";

// direction: "left" or "right" to control entrance animation
const ProjectCard = ({ project, direction = "left" }) => {
  const getIcon = (title) => {
    const lower = title.toLowerCase();
    if (lower.includes("waste") || lower.includes("eco")) return "🌱";
    if (lower.includes("bank")) return "🏦";
    if (lower.includes("ai")) return "🤖";
    if (lower.includes("farm")) return "🌾";
    if (lower.includes("e-commerce") || lower.includes("cart") || lower.includes("pixcart")) return "🛒";
    if (lower.includes("movie") || lower.includes("recommender") || lower.includes("film")) return "🎬";
    if (lower.includes("steg")) return "🔐";
    return "💡";
  };

  const icon = getIcon(project.title);
  const isRight = direction === "right";

  return (
    <div className={`project-card ${isRight ? "slide-in-right" : "slide-in-left"}`}>
      {/* Project Header with Gradient Background */}
      <div className="project-image project-header-gradient">
        <div className="project-header-inner">
          <div className="project-header-left">
            <span className="project-header-icon">{icon}</span>
          </div>
          <div className="project-header-buttons">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-header-btn ghost-btn"
                aria-label="View GitHub Repository"
              >
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-header-btn primary-btn"
                aria-label="View Live Demo"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="project-content">
        <div className="project-card-header">
          <h3 className="project-title">{project.title}</h3>
          <span className="project-year">{project.year}</span>
        </div>
        <p className="project-description">{project.description}</p>

        {/* Tech Stack Tags */}
        <div className="project-tech">
          {project.stack.map((tech, i) => (
            <span key={i} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
