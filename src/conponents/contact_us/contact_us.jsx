import React from "react";

function Contact_us() {
  return (
    <section className="content">
      <h2>Contact Us 📬</h2>
      <p>Have any questions or want to collaborate? Fill out the form below:</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact_us;
