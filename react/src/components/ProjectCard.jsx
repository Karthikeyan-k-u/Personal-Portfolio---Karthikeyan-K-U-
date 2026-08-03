import Icon from "../lib/icons";
import Reveal from "./Reveal";

export const CATS = {
  frontend: "Front-End",
  "java-oop": "Java OOP",
  swing: "Java Swing",
  python: "Python",
  uiux: "UI/UX",
};

export default function ProjectCard({ project, iconName = "code", badge }) {
  const badgeLabel = badge || project.badge || CATS[project.cat] || "Project";

  return (
    <Reveal as="article" className="project-card">
      <div className="pc-top">
        <span className="pc-icon"><Icon name={iconName} /></span>
        <span className="pc-badge">{badgeLabel}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <div className="tech-row">
        {project.tech.map((t) => <span className="chip" key={t}>{t}</span>)}
      </div>
      <div className="pc-links">
        {project.live ? (
          <a href={project.live} target="_blank" rel="noopener">
            <Icon name="external-link" strokeWidth={2} />Live Site
          </a>
        ) : null}
        {project.repo ? (
          <a href={project.repo} target="_blank" rel="noopener">
            <Icon name="github" strokeWidth={2} />Code
          </a>
        ) : null}
      </div>
    </Reveal>
  );
}
