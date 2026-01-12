import React from "react";
import personalInfo from "../data/personalInfo.js";
import socialLinks from "../data/socialLinks.js";
import Button from "../ui/Button.jsx";

const ContactPreview = () => {
  return (
    <section className="mt-20">
      <div className="card" style={{ padding: "3rem", textAlign: "center", background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8))" }}>
        <div className="animate-fadeIn">
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💬</div>
          <h2 className="heading-lg mb-4">
            Let's work together
          </h2>
          <p className="text-muted mb-6" style={{ fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>
          
          <div className="flex justify-center gap-4 mb-6">
            <a href={`mailto:${personalInfo.email}`}>
              <Button>Get In Touch</Button>
            </a>
            <a href="/contact">
              <Button variant="outline">Contact Form</Button>
            </a>
          </div>

          <div className="flex justify-center gap-6 text-sm">
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noreferrer"
              className="text-muted hover:text-accent transition-colors"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              🔗 GitHub
            </a>
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="text-muted hover:text-accent transition-colors"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              💼 LinkedIn
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="text-muted hover:text-accent transition-colors"
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              ✉️ Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;