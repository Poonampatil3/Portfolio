import React from "react";
import personalInfo from "../data/personalInfo.js";
import socialLinks from "../data/socialLinks.js";
import { trackAnalytics } from "../../utils/api.js";

const Hero = () => {
  const handleViewWork = () => {
    trackAnalytics('view_work_clicked', 'home');
  };

  const handleDownloadResume = () => {
    trackAnalytics('resume_downloaded', 'home');
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content animate-fade-in-up">
          <div className="hero-text">
            <h1 className="hero-title heading-xl">
              Hi, I'm {personalInfo.name}
            </h1>
            
            <p className="hero-description text-lg">
              I'm a Full-Stack Developer and MCA student from Pune,
              passionate about creating exceptional digital experiences through clean code 
              and innovative solutions.
            </p>
            
            <div className="hero-buttons">
              <a href="/projects" className="btn btn-primary" onClick={handleViewWork}>
                View My Work
              </a>
              <a href="/resume.pdf" download="Poonam_Patil_Resume.pdf" className="btn btn-secondary" onClick={handleDownloadResume}>
                Download Resume
              </a>
            </div>
            
            <div className="hero-links">
              <a href={`mailto:${personalInfo.email}`}>Email</a>
              <a href={socialLinks.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          
          <div className="profile-wrapper">
            <div className="profile-image">
              <span>PP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;