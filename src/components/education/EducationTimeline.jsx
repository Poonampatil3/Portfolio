import React from "react";
import education from "../data/education.js";
import Card from "../ui/Card.jsx";

const EducationTimeline = () => {
  return (
    <div className="space-y-4">
      {education.map((item) => (
        <Card key={item.level}>
          <p className="text-sm font-semibold">{item.level}</p>
          <p className="text-xs text-slate-300">{item.institution}</p>
          <p className="text-xs text-slate-400 mt-1">
            {item.year} {item.grade && `• ${item.grade}`}
          </p>
        </Card>
      ))}
    </div>
  );
};

export default EducationTimeline;
