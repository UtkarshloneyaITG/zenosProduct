import { Link } from "react-router-dom"

function Footer(){
  return (
    <footer>
  <div className="footer-container">

    <div className="footer-col">
      <h3>Zenova</h3>
      <p>A modern platform to share your code and projects.  
      Built with ❤️ by 4 passionate developers.</p>
    </div>


    <div className="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>


    <div className="footer-col">
      <h4>Contact</h4>
      <p>Email: support@zenova.com</p>
      <p>Phone: +91 98765 43210</p>
      <p>Location: New Delhi, India</p>
    </div>

    <div className="footer-col">
      <h4>Follow Us</h4>
      <div className="socials">
        <a href="#">🌐</a>
        <a href="#">🐦</a>
        <a href="#">💼</a>
        <a href="#">📷</a>
      </div>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© 2025 Zenova. All rights reserved.</p>
  </div>
</footer>

  )
}
export default Footer