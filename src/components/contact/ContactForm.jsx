import React, { useState } from "react";
import ContactInfo from "./ContactInfo.jsx";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("Sending your message...");

    try {
      // TODO: plug your email / API logic here
      await new Promise((res) => setTimeout(res, 800));

      setStatus("Thanks for reaching out! You will get a reply soon.");
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section contact-section">
      <div className="container">
        {/* heading area */}
        <div className="contact-heading-block">
          <h1>Get In Touch</h1>
          <p>
            I&apos;m always interested in hearing about new opportunities,
            collaborating on projects, or just having a chat about technology.
          </p>
        </div>

        {/* two-column layout: form left, info right */}
        <div className="contact-inner">
          {/* LEFT: FORM */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-grid">
                <div className="form-field">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="form-input"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="form-input"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field full-span">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What&apos;s this about?"
                    className="form-input"
                    value={formState.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field full-span">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me more about your project or idea..."
                    className="form-textarea"
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form-actions">
                <button
                  type="submit"
                  className="btn-contact-primary"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
                {status && (
                  <span className="form-status-text">{status}</span>
                )}
              </div>
            </form>
          </div>

          {/* RIGHT: INFO */}
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
