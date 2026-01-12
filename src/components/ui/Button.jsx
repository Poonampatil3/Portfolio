import React from "react";

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const base = "btn";
  const style =
    variant === "outline" ? "btn-outline" : "btn-primary";

  return (
    <button className={`${base} ${style} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
