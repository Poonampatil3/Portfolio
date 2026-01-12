import React, { useState } from "react";
import personalInfo from "../data/personalInfo.js";
import socialLinks from "../data/socialLinks.js";
import { sendContactForm } from "../../utils/api.js";
import "../styles/contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");
    
    const result = await sendContactForm(formData);
    
    if (result.success) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setStatus("Failed to send message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: "700px" }}>
        <div className="contact-wrapper animate-fade-in-up">
          
          {/* Header */}
          <div className="contact-header" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h1 className="heading-lg mb-4">Get In Touch</h1>
            <p className="text-lg">
              I'm always interested in hearing about new opportunities, 
              collaborating on projects, or just having a chat about technology.
            </p>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper animate-slide-in-left">
            <form onSubmit={handleSubmit} className="contact-form" style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: "0.75rem", padding: "2rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label" style={{ fontSize: "0.875rem", fontWeight: "500", marginBottom: "0.5rem", display: "block" }}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your name"
                    style={{ width: "100%", padding: "0.625rem 0.875rem", background: "#09090b", border: "1px solid #27272a", borderRadius: "0.5rem", color: "#e4e4e7", fontSize: "0.875rem" }}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label" style={{ fontSize: "0.875rem", fontWeight: "500", marginBottom: "0.5rem", display: "block" }}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="your.email@example.com"
                    style={{ width: "100%", padding: "0.625rem 0.875rem", background: "#09090b", border: "1px solid #27272a", borderRadius: "0.5rem", color: "#e4e4e7", fontSize: "0.875rem" }}
                    required
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginTop: "1.25rem" }}>
                <label htmlFor="subject" className="form-label" style={{ fontSize: "0.875rem", fontWeight: "500", marginBottom: "0.5rem", display: "block" }}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="What's this about?"
                  style={{ width: "100%", padding: "0.625rem 0.875rem", background: "#09090b", border: "1px solid #27272a", borderRadius: "0.5rem", color: "#e4e4e7", fontSize: "0.875rem" }}
                  required
                />
              </div>

              <div className="form-group" style={{ marginTop: "1.25rem" }}>
                <label htmlFor="message" className="form-label" style={{ fontSize: "0.875rem", fontWeight: "500", marginBottom: "0.5rem", display: "block" }}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell me more about your project or idea..."
                  rows="5"
                  style={{ width: "100%", padding: "0.625rem 0.875rem", background: "#09090b", border: "1px solid #27272a", borderRadius: "0.5rem", color: "#e4e4e7", fontSize: "0.875rem", resize: "vertical", minHeight: "120px" }}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "1.5rem", padding: "0.75rem", fontSize: "0.9375rem" }} disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
              {status && <p style={{ marginTop: "1rem", textAlign: "center", color: status.includes("success") ? "#22c55e" : "#ef4444" }}>{status}</p>}
            </form>
          </div>

          {/* Bottom CTA */}
          <div className="contact-cta animate-fade-in-up animate-stagger-3">
            <div className="card" style={{ textAlign: "center", marginTop: "3rem" }}>
              <h3 className="heading-md mb-4">Ready to start a project?</h3>
              <p className="text-base mb-6">
                Whether you have a specific project in mind or just want to explore possibilities, 
                I'd love to hear from you.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <a href="/resume.pdf" download="Poonam_Patil_Resume.pdf" className="btn btn-secondary">
                  Download Resume
                </a>
                <a href="/projects" className="btn btn-primary">
                  View My Work
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;