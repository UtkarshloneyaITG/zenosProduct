import React from "react";

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
        <div className="card">👩‍💻 Developer 1 - Frontend</div>
        <div className="card">👨‍💻 Developer 2 - Backend</div>
        <div className="card">🧑‍🎨 Developer 3 - Designer</div>
        <div className="card">🧑‍🔧 Developer 4 - DevOps</div>
      </div>
    </section>
  );
}

export default About;
