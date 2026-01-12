import React from "react";
import SkillCategory from "./SkillCategory.jsx";
import skills from "../data/skills.js";

const SkillsGrid = () => {
  const { frontend, backend, database, tools, languages } = skills;

  return (
    <div className="skills-wrapper">
      <div className="skills-categories">
        <SkillCategory
          title="Frontend"
          icon="🎨"
          count={frontend.length}
          skills={frontend}
        />
        <SkillCategory
          title="Backend"
          icon="🛠"
          count={backend.length}
          skills={backend}
        />
        <SkillCategory
          title="Database"
          icon="🗄"
          count={database.length}
          skills={database}
        />
        <SkillCategory
          title="Tools & Others"
          icon="⚙️"
          count={tools.length + languages.length}
          skills={[...tools, ...languages]}
        />
      </div>
    </div>
  );
};

export default SkillsGrid;
