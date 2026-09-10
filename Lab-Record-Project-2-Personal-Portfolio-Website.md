Name : KARTHIKEYAN K U
Department : CSE
Batch : 1
Project-2 : Personal Portfolio Website
Reg no : 411625104025
Web Interface and Engineering

AIM:
To design and develop a modern, responsive personal portfolio website using React, Vite and CSS, allowing visitors to browse the developer's projects, skills, education, certifications and contact details. The application uses React Router for navigation, reusable components, smooth animations and a theme toggle to provide an interactive and user-friendly interface.

PROCEDURE:
The portfolio website was developed using React with a component-based approach to organise every part of the interface. Vite was used as the build tool to create the project, compile JSX and serve the application during development.

A central data file was created to store all portfolio content such as projects, skills, certifications, achievements and social links. This keeps the content separate from the components, so sections can be updated without changing the layout code.

React Router was configured to handle client-side navigation between the Home page and the Projects archive page. A ScrollManager component was written to scroll smoothly to a section when a hash link is clicked, and to return to the top of the page on every new route.

Reusable components such as Navbar, Footer, ProjectCard and Reveal were built. The Reveal component used an IntersectionObserver to fade and slide content into view as the user scrolls. A custom theme hook toggled the dark and light themes by switching the data-theme attribute on the root HTML element.

The Home page was composed of sections including Hero, About, Experience, FeaturedProjects, Skills, Education, Achievements, Certifications, ResumeCTA and Contact. Each section was built as a separate component and imported into the page.

The Projects page displayed a filterable grid of project cards, allowing users to filter projects by technology and category using state and event handling.

Finally, the index.html file was enhanced with SEO and social-sharing metadata including Open Graph and Twitter cards, and the application was tested on desktop, tablet and mobile screen sizes to confirm that every section and interaction worked correctly.

CODE:
index.html
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Karthikeyan K U</title>
  <meta name="description" content="Portfolio of Karthikeyan K U, an emerging software engineer pursuing Computer Science and Engineering alongside Data Science and Applications at IIT Madras.">
  <meta name="author" content="Karthikeyan K U">
  <meta property="og:title" content="Karthikeyan K U | Emerging Software Engineer & Front-End Developer">
  <meta property="og:image" content="https://portfolio-karthikeyan-k-u.pages.dev/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>

src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

src/App.jsx
import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollChrome from "./components/ScrollChrome";
import CustomCursor from "./components/CustomCursor";
import useTheme from "./lib/useTheme";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const { toggle } = useTheme();

  return (
    <>
      <ScrollManager />
      <ScrollChrome />
      <CustomCursor />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar toggleTheme={toggle} />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

src/pages/Home.jsx
import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import About from "../sections/About";
import Experience from "../sections/Experience";
import FeaturedProjects from "../sections/FeaturedProjects";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Achievements from "../sections/Achievements";
import Certifications from "../sections/Certifications";
import ResumeCTA from "../sections/ResumeCTA";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Experience />
      <FeaturedProjects />
      <Skills />
      <Education />
      <Achievements />
      <Certifications />
      <ResumeCTA />
      <Contact />
    </>
  );
}

src/sections/Hero.jsx
import Icon from "../lib/icons";
import Reveal from "../components/Reveal";
import { social, resume } from "../data";

export default function Hero() {
  const heroSocials = [
    { key: "github", url: social.github, label: "GitHub profile" },
    { key: "linkedin", url: social.linkedin, label: "LinkedIn profile" },
    { key: "email", url: `mailto:${social.email}`, label: "Send email" },
  ];

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <Reveal>
            <span className="eyebrow">Mass Web Designer</span>
            <h1>Karthikeyan<span className="text-gradient"> K U</span></h1>
            <div className="subtitle">Web Development Intern — ATC Travelzone</div>
            <p className="intro">
              I am currently working as a Web Development Intern at ATC Travelzone,
              building a full-stack travel booking platform with React and Supabase.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#projects">
                View Projects
              </a>
              <a className="btn btn-outline" href={resume} target="_blank" rel="noopener">
                Resume
              </a>
            </div>
            <div className="hero-socials" aria-label="Social links">
              {heroSocials.map((s) => (
                <a key={s.key} href={s.url} target="_blank" rel="noopener" aria-label={s.label}>
                  <Icon name={s.key} strokeWidth={1.9} />
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal className="hero-visual">
            <div className="img-ring">
              <img src="/profile-hero.jpg" alt="Portrait of Karthikeyan K U" width="360" height="360" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

Ouput:

RESULT:
Thus, the Personal Portfolio Website was successfully developed using React, Vite, CSS and JavaScript. The application accurately renders the Home and Projects pages, filters projects by category, animates content on scroll and provides a responsive, user-friendly interface on desktop, tablet and mobile screens.
