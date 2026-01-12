import React from "react";

const SkillCategory = ({ title, icon, count, skills }) => {
  return (
    <div className="skills-category animate-fade-in-up">
      <div className="category-header">
        <div className="category-icon">{icon}</div>
        <div className="category-header-text">
          <h3 className="category-title">{title}</h3>
          <span className="category-count">{count} skills</span>
        </div>
      </div>

      <div className="skills-list">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-item-row">
            <div className="skill-info">
              <div className="skill-name-wrapper">
                <span className="skill-bullet" />
                <span className="skill-name">{skill.name}</span>
              </div>
              {skill.level && (
                <span className="skill-level">{skill.level}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
