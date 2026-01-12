import React from "react";
import personalInfo from "../data/personalInfo.js";
import socialLinks from "../data/socialLinks.js";

const ContactInfo = () => {
  return (
    <aside className="contact-info-card">
      <div className="contact-info-inner">
        
        
        <div className="info-list">
          <div className="info-row">
            <span className="info-row-icon">📧</span>
            <div>
              <div className="info-row-label">Email</div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="info-row-value"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div className="info-row">
            <span className="info-row-icon">📍</span>
            <div>
              
            </div>
          </div>

          {personalInfo.phone && (
            <div className="info-row">
              <span className="info-row-icon">📞</span>
              <div>
                
              </div>
            </div>
          )}
        </div>

        <div>
          
          <div className="contact-socials">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="contact-social-link"
              >
                <span>🐙</span>
                <span>GitHub</span>
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-social-link"
              >
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ContactInfo;
