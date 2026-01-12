import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button.jsx";

const NotFound = () => {
  return (
    <div className="notfound-wrapper">
      <p className="heading-lg">404</p>
      <p className="text-muted">The page you are looking for does not exist.</p>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
