import { Link } from "react-router-dom";
import Icon from "../lib/icons";
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
          <li><Link to="/#contact">Contact</Link></li>
          <li><a href={resume} target="_blank" rel="noopener">Resume</a></li>
        </ul>
        <ul className="footer-socials" aria-label="Social links">
          <li>
            <a href={social.github} target="_blank" rel="noopener" aria-label="GitHub profile">
              <Icon name="github" strokeWidth={1.8} />
            </a>
          </li>
          <li>
            <a href={social.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn profile">
              <Icon name="linkedin" strokeWidth={1.8} />
            </a>
          </li>
          <li>
            <a href={`mailto:${social.email}`} aria-label="Send email">
              <Icon name="email" strokeWidth={1.8} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}