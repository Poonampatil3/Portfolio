import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Poonam Patil. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;