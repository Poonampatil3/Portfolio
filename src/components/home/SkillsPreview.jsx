import React from "react";
import Button from "../ui/Button.jsx";

const SkillsPreview = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "JavaScript", "HTML", "CSS" ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Python", "FastAPI", "Flask", "Node.js", "REST APIs"]
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      title: "Tools & Others",
      icon: "🛠️",
      skills: ["Github"]
    }
  ];

  return (
    <section className="mt-20">
      <div className="text-center mb-12">
        <p className="section-eyebrow">Technical Skills</p>
        <h2 className="heading-lg mb-4">
          Technologies I work with
        </h2>
        <p className="text-muted" style={{ fontSize: "1rem", maxWidth: "600px", margin: "0 auto" }}>
          I'm proficient in a variety of modern technologies and frameworks, 
          constantly expanding my skillset to stay current with industry trends.
        </p>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
        {skillCategories.map((category, index) => (
          <div key={category.title} className="card animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="mb-4">
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{category.icon}</div>
              <h3 className="heading-md text-accent">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a href="/skills">
          <Button variant="outline">View All Skills</Button>
        </a>
      </div>
    </section>
  );
};

export default SkillsPreview;