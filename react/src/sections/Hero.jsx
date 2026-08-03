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
            <div className="subtitle">Emerging Software Engineer &amp; Front-End Developer</div>
            <p className="intro">
              I build responsive and user-focused digital products using JavaScript, React, Java, Python,
              Supabase, and modern web technologies. I am pursuing Computer Science and Engineering alongside
              the BS in Data Science and Applications at IIT Madras.
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
            <span className="hero-badge b2"><span className="dot">●</span> 40+ Repos on GitHub</span>
            <span className="hero-badge b3"><span className="dot">●</span> NPTEL Elite &amp; Silver</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
