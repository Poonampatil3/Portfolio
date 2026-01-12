import React from "react";
import personalInfo from "../data/personalInfo.js";
import { trackAnalytics } from "../../utils/api.js";
import "../styles/about.css";

const About = () => {
  const handleGetInTouch = () => {
    trackAnalytics('get_in_touch_clicked', 'about');
  };

  const handleDownloadResume = () => {
    trackAnalytics('resume_downloaded', 'about');
  };

  return (
    <section className="section">
      <div className="container">
        <div className="animate-fade-in-up" style={{ maxWidth: "800px", margin: "0 auto" }}>
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="heading-lg mb-4">About Me</h1>
            <p className="text-lg">
              I'm a passionate Software Developer and MCA student who loves creating 
              digital experiences that make a difference.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <div>
              <h2 className="heading-md mb-4">Background</h2>
              <div className="text-base" style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
                <p style={{ marginBottom: "1rem" }}>
                  Currently pursuing my Master's in Computer Applications, I'm deeply passionate 
                  about full-stack web development and creating solutions that bridge the gap 
                  between complex technical requirements and intuitive user experiences.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  My journey in technology started with curiosity about how digital products work, 
                  which evolved into a love for building them. I enjoy working across the entire 
                  development stack, from crafting responsive user interfaces to designing robust 
                  backend architectures.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or learning about the latest trends in web development 
                  and software engineering.
                </p>
              </div>
            </div>

            <div>
              <h2 className="heading-md mb-4">Technical Focus</h2>
              <div className="text-base" style={{ lineHeight: 1.8, marginBottom: "1.5rem" }}>
                <p style={{ marginBottom: "1rem" }}>
                  I specialize in modern web technologies with a focus on React for frontend 
                  development and Python frameworks like FastAPI and Flask for backend services. 
                  I'm experienced with both SQL and NoSQL databases, and I enjoy working with 
                  cloud platforms for deployment and scaling.
                </p>
                <p>
                  My approach to development emphasizes clean, maintainable code, user-centered 
                  design, and performance optimization. I believe in writing code that not only 
                  works but is also readable and scalable.
                </p>
              </div>
            </div>

            <div>
              <h2 className="heading-md mb-4">Current Goals</h2>
              <div className="text-base" style={{ lineHeight: 1.8 }}>
                
                <p>
                  Looking ahead, I'm excited about opportunities to work on challenging projects 
                  that push the boundaries of what's possible with modern web technologies.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div style={{ marginTop: "3rem" }}>
              <h2 className="heading-md mb-6 animate-slide-in-left">Skills & Technologies</h2>
              <div className="skills-grid">
                <div className="skill-item animate-scale-in animate-stagger-1">
                  <div className="skill-icon">⚛️</div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>Frontend</div>
                    <div className="text-sm">React, JavaScript, HTML, CSS</div>
                  </div>
                </div>
                <div className="skill-item animate-scale-in animate-stagger-2">
                  <div className="skill-icon">🐍</div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>Backend</div>
                    <div className="text-sm">Python, FastAPI, Flask, Node.js, REST APIs</div>
                  </div>
                </div>
                <div className="skill-item animate-scale-in animate-stagger-3">
                  <div className="skill-icon">🗄️</div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>Database</div>
                    <div className="text-sm">MySQL, MongoDB,SQLite</div>
                  </div>
                </div>
                <div className="skill-item animate-scale-in animate-stagger-4">
                  <div className="skill-icon">🛠️</div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#ffffff", marginBottom: "0.25rem" }}>Tools</div>
                    <div className="text-sm">Github,VS Code</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div style={{ marginTop: "3rem" }}>
              <h2 className="heading-md mb-6 animate-slide-in-right">Education</h2>
              
              <div className="card animate-fade-in-up animate-stagger-2" style={{ marginBottom: "1.5rem" }}>
                <div style={{ marginBottom: "1rem" }}>
                  <h3 className="card-title">Master of Computer Applications (MCA)</h3>
                  <p className="text-sm" style={{ color: "#38bdf8", marginBottom: "0.5rem" }}>Currently Pursuing • 2024-2026 </p>
                  <p className="text-base">
                    Focusing on advanced software development, database management, 
                    and modern web technologies. Gaining deep knowledge in algorithms, 
                    data structures, and software engineering principles.
                  </p>
                </div>
              </div>

              <div className="card animate-fade-in-up animate-stagger-3" style={{ marginBottom: "1.5rem" }}>
                <div style={{ marginBottom: "1rem" }}>
                  <h3 className="card-title">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-sm" style={{ color: "#38bdf8", marginBottom: "0.5rem" }}>Completed • 2021-2024 • CGPA: 9.60</p>
                  <p className="text-base">
                    Comprehensive study of computer applications, programming languages, 
                    and software development. Built strong foundation in programming, 
                    database management, and web technologies.
                  </p>
                </div>
              </div>

              <div className="card animate-fade-in-up animate-stagger-4" style={{ marginBottom: "1.5rem" }}>
                <div style={{ marginBottom: "1rem" }}>
                  <h3 className="card-title">Higher Secondary Certificate (12th)</h3>
                  <p className="text-sm" style={{ color: "#38bdf8", marginBottom: "0.5rem" }}>Completed • 2019-2021 • Percentage: 95%</p>
                  <p className="text-base">
                     Developed analytical thinking and problem-solving skills that 
                    laid the foundation for my technical career.
                  </p>
                </div>
              </div>

              <div className="card animate-fade-in-up animate-stagger-5">
                <div style={{ marginBottom: "1rem" }}>
                  <h3 className="card-title">Secondary School Certificate (10th)</h3>
                  <p className="text-sm" style={{ color: "#38bdf8", marginBottom: "0.5rem" }}>Completed • 2018-2019 • Percentage: 90%</p>
                  <p className="text-base">
                    Strong academic foundation with excellent performance in 
                    Mathematics and Science subjects. Developed interest in 
                    technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="card animate-scale-in animate-stagger-3" style={{ marginTop: "3rem", textAlign: "center" }}>
              <h3 className="heading-md mb-4">Let's Connect</h3>
              <p className="text-base mb-6">
                I'm always interested in discussing new opportunities, 
                collaborating on projects, or just having a chat about technology.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
                <a href={`mailto:${personalInfo.email}`} className="btn btn-primary" onClick={handleGetInTouch}>
                  Get In Touch
                </a>
                <a href="/resume.pdf" download="Poonam_Patil_Resume.pdf" className="btn btn-secondary" onClick={handleDownloadResume}>
                  Download Resume
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;