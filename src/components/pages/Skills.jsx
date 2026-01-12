import React, { useState } from "react";
import "../styles/skills.css";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const skillsData = [
    {
      category: "Frontend",
      icon: "⚛️",
      color: "#61dafb",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 85, icon: "🟨" },
        { name: "HTML", level: 95, icon: "🔶" },
        { name: "CSS", level: 90, icon: "🔷" },
       
      ]
    },
    {
      category: "Backend",
      icon: "⚙️",
      color: "#10b981",
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "FastAPI", level: 85, icon: "⚡" },
        { name: "Flask", level: 80, icon: "🌶️" },
        { name: "Node.js", level: 75, icon: "💚" },
        { name: "REST APIs", level: 85, icon: "🔗" },
        { name: "Express.js", level: 70, icon: "🚀" }
      ]
    },
    {
      category: "Database",
      icon: "🗄️",
      color: "#f59e0b",
      skills: [
        { name: "MySQL", level: 85, icon: "🐬" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "SQLite", level: 85, icon: "💎" },
        { name: "Database Design", level: 80, icon: "📊" }
      ]
    },
    {
      category: "Tools & Others",
      icon: "🛠️",
      color: "#8b5cf6",
      skills: [
        { name: "Github", level: 90, icon: "📝" },
        { name: "VS Code", level: 95, icon: "💻" }
      ]
    }
  ];

  const categories = ["All", "Frontend", "Backend", "Database", "Tools & Others"];

  const getFilteredSkills = () => {
    if (activeCategory === "All") {
      return skillsData;
    }
    return skillsData.filter(category => category.category === activeCategory);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="skills-wrapper animate-fade-in-up">
          
          {/* Header */}
          <div className="skills-header">
            <h1 className="heading-lg mb-4">Skills & Technologies</h1>
            <p className="text-lg">
              A comprehensive overview of the technologies and tools I use to build 
              modern, scalable applications from frontend to backend.
            </p>
          </div>

          {/* Category Filters */}
          <div className="skills-filters animate-slide-in-left" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2.5rem", marginTop: "2rem" }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`skills-filter-btn ${activeCategory === category ? 'active' : ''}`}
                style={{
                  padding: "0.5rem 1.25rem",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  borderRadius: "999px",
                  border: activeCategory === category ? "1px solid #38bdf8" : "1px solid #27272a",
                  background: activeCategory === category ? "rgba(56, 189, 248, 0.1)" : "#18181b",
                  color: activeCategory === category ? "#38bdf8" : "#a1a1aa",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap"
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Categories */}
          <div className="skills-categories">
            {getFilteredSkills().map((categoryData, categoryIndex) => (
              <div 
                key={categoryData.category} 
                className={`skills-category animate-scale-in animate-stagger-${(categoryIndex % 4) + 1}`}
              >
                <div className="category-header">
                  <div className="category-icon" style={{ backgroundColor: categoryData.color }}>
                    {categoryData.icon}
                  </div>
                  <h3 className="category-title">{categoryData.category}</h3>
                  <div className="category-count">
                    {categoryData.skills.length} skills
                  </div>
                </div>

                <div className="skills-list">
                  {categoryData.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className={`skill-item animate-fade-in-up animate-stagger-${skillIndex + 1}`}
                    >
                      <div className="skill-info">
                        <div className="skill-name-wrapper">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress" 
                          style={{ 
                            width: `${skill.level}%`,
                            backgroundColor: categoryData.color,
                            animationDelay: `${skillIndex * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="skills-stats animate-fade-in-up animate-stagger-3">
            <div className="stats-grid">
              <div className="stat-card animate-scale-in animate-stagger-1">
               
              </div>
              <div className="stat-card animate-scale-in animate-stagger-2">
               
              </div>
              <div className="stat-card animate-scale-in animate-stagger-3">
                
              </div>
              <div className="stat-card animate-scale-in animate-stagger-4">
               
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="skills-cta animate-fade-in-up animate-stagger-4">
            <div className="card" style={{ textAlign: "center", marginTop: "3rem" }}>
              <h3 className="heading-md mb-4">Ready to work together?</h3>
              <p className="text-base mb-6">
                I'm always excited to take on new challenges and learn new technologies. 
                Let's build something amazing together!
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="/contact" className="btn btn-primary">
                  Get In Touch
                </a>
                <a href="/projects" className="btn btn-secondary">
                  View Projects
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;