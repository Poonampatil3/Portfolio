import React from "react";
import Card from "../ui/Card.jsx";
import personalInfo from "../data/personalInfo.js";

const AboutIntro = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <p className="text-sm font-semibold mb-2">Who am I?</p>
        <p className="text-xs text-slate-300 leading-relaxed">
          {personalInfo.name} is an MCA student and aspiring software engineer
          from {personalInfo.location}. Passionate about building real-world
          web applications, with a strong base in programming and databases.
        </p>
      </Card>
      <Card>
        <p className="text-sm font-semibold mb-2">What do I focus on?</p>
        <p className="text-xs text-slate-300 leading-relaxed">
          Enjoys turning ideas into full-stack projects, from UI to backend and
          deployment, and constantly learning modern tools, cloud services, and
          AI-assisted development.
        </p>
      </Card>
    </div>
  );
};

export default AboutIntro;
