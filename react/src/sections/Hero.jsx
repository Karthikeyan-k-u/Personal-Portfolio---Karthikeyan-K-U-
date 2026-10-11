import Icon from "../lib/icons";
import Reveal from "../components/Reveal";
import RoleRotator from "../components/RoleRotator";
import useTilt from "../lib/useTilt";
import usePointerParallax from "../lib/usePointerParallax";
import useGithubRepos from "../lib/useGithubRepos";
import { social, resume } from "../data";

export default function Hero() {
  const repoCount = useGithubRepos();
  const tiltRef = useTilt(10);
  const nebulaRef = usePointerParallax(26, 1.1);
  const heroSocials = [
    { key: "github", url: social.github, label: "GitHub profile" },
    { key: "linkedin", url: social.linkedin, label: "LinkedIn profile" },
    { key: "email", url: `mailto:${social.email}`, label: "Send email" },
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-nebula" aria-hidden="true">
        <span className="nebula-layer" ref={nebulaRef} />
      </div>
      <div className="container">
        <div className="hero-grid">
          <Reveal>
            <span className="eyebrow">Mass Web Designer</span>
            <h1>Karthikeyan<span className="text-gradient"> K U</span></h1>
            <div className="avail-pill" aria-label="Availability">
              <span className="avail-dot"></span>
              Open to Opportunities
            </div>
            <RoleRotator />
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
            <div className="hero-stage" ref={tiltRef}>
              <span className="stage-glow" aria-hidden="true" />
              <span className="stage-conic" aria-hidden="true" />
              <div className="img-ring">
                <img src="/profile-hero.jpg" alt="Portrait of Karthikeyan K U" width="360" height="360" />
              </div>
              <span className="stage-layer b1" style={{ transform: "translateZ(42px)" }}>
                <span className="hero-badge b1"><span className="dot">●</span> Full-Stack Journey</span>
              </span>
              <span className="stage-layer b2" style={{ transform: "translateZ(62px)" }}>
                <span className="hero-badge b2"><span className="dot">●</span> {repoCount != null ? repoCount : "40"}+ Repos on GitHub</span>
              </span>
              <span className="stage-layer b3" style={{ transform: "translateZ(52px)" }}>
                <span className="hero-badge b3"><span className="dot">●</span> NPTEL Elite &amp; Silver</span>
              </span>
              <span className="stage-layer t1" style={{ transform: "translateZ(78px)" }}>
                <span className="tech-badge t1"><Icon name="frontend" size={15} strokeWidth={2} /> React</span>
              </span>
              <span className="stage-layer t2" style={{ transform: "translateZ(56px)" }}>
                <span className="tech-badge t2"><Icon name="python" size={15} strokeWidth={2} /> Python</span>
              </span>
              <span className="stage-layer t3" style={{ transform: "translateZ(66px)" }}>
                <span className="tech-badge t3"><Icon name="java-oop" size={15} strokeWidth={2} /> Java</span>
              </span>
            </div>
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