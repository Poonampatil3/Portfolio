import React from "react";
import projects from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

const ProjectsList = ({ limit }) => {
  const list = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="projects-grid">
      {list.map((project, index) => {
        // Alternate animation direction for visual interest
        const direction = index % 2 === 0 ? "left" : "right";
        return (
          <div key={index} className={`slide-wrapper slide-in-${direction}`}>
            <ProjectCard project={project} direction={direction} />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsList;
