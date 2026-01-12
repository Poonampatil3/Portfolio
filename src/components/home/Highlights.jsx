import React from "react";
import Card from "../ui/Card.jsx";
import Tag from "../ui/Tag.jsx";

const Highlights = () => {
  return (
    <section className="mt-6 animate-fadeIn">
      <div className="highlights-grid">
        <Card>
          <p className="text-sm" style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
            Production-ready Projects
          </p>
          <p className="text-xs text-muted mb-3">
            Deployed full-stack apps for smart waste management, e‑commerce, and
            AI‑powered content analysis that simulate real client work.
          </p>
          <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
            <Tag>React</Tag>
            <Tag>FastAPI</Tag>
            <Tag>Flask</Tag>
          </div>
        </Card>

        <Card>
          <p className="text-sm" style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
            Strong CS Foundation
          </p>
          <p className="text-xs text-muted mb-3">
            BCA with 9.60 CGPA and currently pursuing MCA, with a focus on
            problem solving, OOP, and database design.
          </p>
          <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
            <Tag>C++</Tag>
            <Tag>Java</Tag>
            <Tag>Python</Tag>
          </div>
        </Card>

        <Card>
          <p className="text-sm" style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
            Modern Tools & AI
          </p>
          <p className="text-xs text-muted mb-3">
            Comfortable with GitHub, VS Code, and AI assistants like Copilot and
            ChatGPT to speed up development while keeping code quality high.
          </p>
          <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
            <Tag>Git & GitHub</Tag>
            <Tag>Copilot</Tag>
            <Tag>ChatGPT</Tag>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Highlights;
