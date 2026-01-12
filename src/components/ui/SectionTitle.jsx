import React from "react";

const SectionTitle = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="mb-8">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
