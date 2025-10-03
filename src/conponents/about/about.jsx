import React from "react";
import { Link } from "react-router";

function About() {
  return (
    <section className="content">
      <h2>About Zenova</h2>
      <p>
        Zenova is a platform built by 4 developers who believe in collaboration.
        We aim to create a hub where coders can share projects, ideas, and learn
        together. ✨
      </p>
      <div className="card-container">
        <Link to="frontend" className="card">
          👩‍💻 Developer 1 - Frontend
        </Link>
        <Link to="backend" className="card">
          🧑‍🎨 Developer 3 - Designer
        </Link>
        <Link to="designer" className="card">
          👨‍💻 Developer 2 - Backend
        </Link>
        <Link to="devops" className="card">
          🧑‍🔧 Developer 4 - DevOps
        </Link>
      </div>
    </section>
  );
}

export default About;
