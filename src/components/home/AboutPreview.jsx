import React from "react";
import personalInfo from "../data/personalInfo.js";
import Button from "../ui/Button.jsx";

const AboutPreview = () => {
  return (
    <section className="mt-20">
      <div className="grid-2 animate-fadeIn">
        <div>
          <p className="section-eyebrow">About Me</p>
          <h2 className="heading-lg mb-4">
            Passionate about creating digital solutions
          </h2>
          <div className="text-muted" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
            <p className="mb-4">
              I'm currently pursuing my Master's in Computer Applications, specializing in 
              full-stack web development. My journey in tech started with curiosity about 
              how websites work, and it has evolved into a passion for creating seamless 
              user experiences.
            </p>
            <p className="mb-4">
              I enjoy working with modern technologies like React for frontend development 
              and Python frameworks like FastAPI and Flask for backend services. I'm also 
              experienced with database design and cloud deployment.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or learning about the latest trends in web development.
            </p>
          </div>
          <div className="mt-6">
            <a href="/about">
              <Button variant="outline">Learn More About Me</Button>
            </a>
          </div>
        </div>
        <div className="card" style={{ padding: "2rem" }}>
          <h3 className="heading-md mb-4 text-accent">Quick Facts</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-accent">🎓</span>
              <span>MCA Student</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent">💻</span>
              <span>Full-Stack Developer</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent">🌍</span>
              <span>Based in {personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-accent">🚀</span>
              <span>Always Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;