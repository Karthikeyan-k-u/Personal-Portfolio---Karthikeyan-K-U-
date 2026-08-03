import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../lib/icons";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

export default function Navbar({ toggleTheme }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link to="/" className="brand-logo" aria-label="Karthikeyan K U home" onClick={close}>
          <span>K</span><span>U</span>
        </Link>
        <nav aria-label="Primary">
          <ul id="navLinks" className={open ? "nav-links open" : "nav-links"}>
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                {onHome ? (
                  <a href={`#${l.id}`} onClick={close}>{l.label}</a>
                ) : (
                  <Link to={`/#${l.id}`} onClick={close}>{l.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark or light theme"
          >
            <Icon name="sun" className="icon-sun" />
            <Icon name="moon" className="icon-moon" />
          </button>
          <button
            className="nav-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="navLinks"
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>
  );
}
