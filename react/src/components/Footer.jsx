import { Link } from "react-router-dom";
import { social, resume } from "../data";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-logo"><span>K</span><span>U</span></div>
          <p>Emerging Software Engineer focused on front-end development, Java, Python, UI/UX, and data-driven applications.</p>
          <p>© <span>{new Date().getFullYear()}</span> Karthikeyan K U. Built with React, CSS &amp; JavaScript.</p>
        </div>
        <ul className="footer-links">
          <li><a href={social.github} target="_blank" rel="noopener">GitHub</a></li>
          <li><a href={social.linkedin} target="_blank" rel="noopener">LinkedIn</a></li>
          <li><a href={resume} target="_blank" rel="noopener">Resume</a></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
      </div>
    </footer>
  );
}
