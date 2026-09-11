import Icon from "../lib/icons";
import Reveal from "../components/Reveal";
import useGithubRepos from "../lib/useGithubRepos";
import { social, resume } from "../data";

export default function Hero() {
  const repoCount = useGithubRepos();
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
            <div className="avail-pill" aria-label="Availability">
              <span className="avail-dot"></span>
              Open to Opportunities
            </div>
            <p className="intro">
              I'm a software engineering student — B.E. CSE plus a BS in Data Science from IIT Madras — currently interning as a Web Development Intern at ATC Travelzone, building and maintaining a live travel booking platform.
              Using React, TypeScript, TanStack, Tailwind, Shadcn UI, Supabase, and Cloudflare Pages, I ship the customer site, a full admin CMS, and the deployment pipeline, focused on fast, intuitive front-end and UI/UX. I've also built responsive websites, admin dashboards, Java systems, and Python apps, and hold NPTEL Elite &amp; Silver plus Java, Python, Responsive Web Design, UX, Cloud, and AI certifications. I'm committed to continuous learning and becoming a well-rounded software engineer — open to internships, collaborative projects, and opportunities in software engineering, front-end, Java, Python, UI/UX, and data science.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#projects">
                View Projects
                <Icon name="arrow-up-right" strokeWidth={2} />
              </a>
              <a className="btn btn-outline" href={resume} target="_blank" rel="noopener">
                <Icon name="download" strokeWidth={2} />
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
            <span className="hero-badge b1"><span className="dot">●</span> Full-Stack Journey</span>
            <span className="hero-badge b2"><span className="dot">●</span> {repoCount != null ? repoCount : "40"}+ Repos on GitHub</span>
            <span className="hero-badge b3"><span className="dot">●</span> NPTEL Elite &amp; Silver</span>
          </Reveal>
        </div>
        <a href="#about" className="hero-scroll" aria-label="Scroll to About section">
          <span className="hero-scroll-mouse" aria-hidden="true">
            <span className="hero-scroll-wheel"></span>
          </span>
          <span className="hero-scroll-text">Scroll</span>
        </a>
      </div>
    </section>
  );
}
