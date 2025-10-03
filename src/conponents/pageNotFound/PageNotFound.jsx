import React from "react";
import { NavLink } from "react-router";

function PageNotFound() {
  return (
    <section className="content fade-in error-page fade-in">
      <h1 className="error-code">404</h1>
      <h2 className="error-title">Page Not Found</h2>
      <p className="error-text">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Go Back Home
      </NavLink>
    </section>
  );
}

export default PageNotFound;
