import React from "react";
import SectionTitle from "../ui/SectionTitle.jsx";
import EducationTimeline from "../education/EducationTimeline.jsx";

const Education = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      <SectionTitle
        eyebrow="Academics"
        title="Education"
        subtitle="Formal education that builds my computer science foundation."
      />
      <EducationTimeline />
    </div>
  );
};

export default Education;
