function Designer(){
  return(
    <>
  <section className="hero fade-in" id="hero">
    <h2>Hi, I'm <span>Utkarsh Loneya</span></h2>
    <p>UI/UX Designer | Graphic Artist | Creative Thinker</p>
    <a href="#projects"><button className="btn">View My Work</button></a>
  </section>


      <section className="about fade-in" id="about">
        <div className="about-container">
          <div className="about-img">
            <img src="data:image/jpeg;base64,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" alt="Profile Picture" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I am a <strong>DevOps Engineer</strong> passionate about
              automation, cloud, and scalable infrastructure. With expertise in{" "}
              <span className="highlight">
                Docker, Kubernetes, AWS, and CI/CD
              </span>
              , I bridge the gap between development and operations to deliver
              faster and more reliable products.
            </p>
            <div class="about-stats">
              <div>
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3>30+</h3>
                <p>Projects Deployed</p>
              </div>
              <div>
                <h3>10+</h3>
                <p>Certifications</p>
              </div>
            </div>
            <a href="#projects">
              <button className="btn">View My Projects</button>
            </a>
          </div>
        </div>
      </section>


  <section className="skills fade-in" id="skills">
    <h2>Skills</h2>
    <div className="skills-grid">
      <div className="skill-card">Figma</div>
      <div className="skill-card">Adobe XD</div>
      <div className="skill-card">Photoshop</div>
      <div className="skill-card">Illustrator</div>
      <div className="skill-card">InDesign</div>
      <div className="skill-card">Canva</div>
      <div className="skill-card">UI Prototyping</div>
      <div className="skill-card">User Research</div>
    </div>
  </section>


  <section className="projects fade-in" id="projects">
    <h2>Projects</h2>
    <div className="project-grid">
      <div className="project-card">
        <img src="https://via.placeholder.com/300x180" alt="App Design" />
        <h3>Mobile App UI</h3>
        <p>Designed a food delivery app with seamless navigation and clean visuals.</p>
      </div>
      <div className="project-card">
        <img src="https://via.placeholder.com/300x180" alt="Branding" />
        <h3>Brand Identity</h3>
        <p>Complete branding package including logos, typography, and color palette.</p>
      </div>
      <div className="project-card">
        <img src="https://via.placeholder.com/300x180" alt="Website Design" />
        <h3>Portfolio Website</h3>
        <p>Responsive, modern website design showcasing creative projects.</p>
      </div>
    </div>
  </section>


  <section className="contact fade-in" id="contact">
    <h2>Contact Me</h2>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button className="btn">Send Message</button>
    </form>
  </section>
    </>
  )
}
export default Designer