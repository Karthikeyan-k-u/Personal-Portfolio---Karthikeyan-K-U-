import { useState } from "react";
import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";
import Icon from "../lib/icons";
import { experience } from "../data";

export default function Experience() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="section section-tight" id="experience">
      <div className="container">
        <SectionHead
          center
          eyebrow="Experience"
          title={<>Where I've <span className="text-gradient">been building</span></>}
          sub="A snapshot of the work that shaped how I approach the web."
        />
        <div className="timeline">
          {experience.map((exp, i) => (
            <Reveal className="tl-item" key={i}>
              <span className="tl-dot" aria-hidden="true"></span>
              <div className="tl-card">
                <div className="tl-top">
                  <span className="tl-role">{exp.role}</span>
                  <span className="tl-date">
                    {exp.current ? "Currently Interning · " : ""}{exp.date}
                  </span>
                </div>
                <div className="tl-org">{exp.org}</div>

                <div className="exp-highlights">
                  {exp.highlights.map((h, j) => (
                    <div className="exp-hl" key={j} style={{ animationDelay: `${j * 0.1 + 0.3}s` }}>
                      <span className="exp-hl-ic"><Icon name={h.icon} size={18} /></span>
                      <span className="exp-hl-val">{h.value}</span>
                      <span className="exp-hl-lbl">{h.label}</span>
                    </div>
                  ))}
                </div>

                <p>{exp.summary}</p>

                <div className="exp-tech">
                  {exp.tech.map((t) => (
                    <span className="chip" key={t}>{t}</span>
                  ))}
                </div>

                <button
                  className="exp-toggle"
                  onClick={() => setExpanded((v) => !v)}
                  aria-expanded={expanded}
                >
                  {expanded ? "Hide details" : "Show details"}
                  <Icon name="chevron-down" size={16} strokeWidth={2} className={expanded ? "rotated" : ""} />
                </button>

                <div className={`exp-bullets-wrap${expanded ? " open" : ""}`}>
                  <ul className="tl-list">
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>

                {exp.link && (
                  <a
                    className="exp-live-cta"
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="exp-live-cta-left">
                      <span className="exp-live-cta-icon">
                        <Icon name="external-link" size={20} />
                      </span>
                      <div className="exp-live-cta-info">
                        <span className="exp-live-cta-label">Live Project</span>
                        <span className="exp-live-cta-url">{new URL(exp.link).hostname}</span>
                      </div>
                    </div>
                    <span className="exp-live-cta-btn">
                      Visit Live Site
                      <Icon name="arrow-up-right" size={16} />
                    </span>
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
