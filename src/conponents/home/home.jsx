import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <h2 className="fade-in">Welcome to Zenova 🚀</h2>
      <p className="fade-in">A modern platform to share your code and projects.</p>
      <Link to="/about" className="btn">
        Learn More
      </Link>
    </section>
  );
}

export default Home