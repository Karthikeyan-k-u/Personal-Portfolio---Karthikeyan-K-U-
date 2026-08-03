import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projects } from "../data";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Front-End" },
  { key: "java-oop", label: "Java OOP" },
  { key: "swing", label: "Java Swing" },
  { key: "python", label: "Python" },
  { key: "uiux", label: "UI/UX" },
];

const PAGE_SIZE = 12;

export default function Projects() {
  const [current, setCurrent] = useState("all");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const list = projects.filter((p) => current === "all" || p.cat === current);
  const shown = list.slice(0, visible);

  function selectFilter(key) {
    setCurrent(key);
    setVisible(PAGE_SIZE);
    const el = document.getElementById("archive");
    if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: "smooth" });
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Project Archive</span>
          <h1>All <span className="text-gradient">Projects</span></h1>
          <p>Every project I've built so far — from responsive front-ends and Java systems to Python tools and UI/UX design.</p>
          <div className="breadcrumb"><Link to="/">Home</Link> / Projects</div>
        </div>
      </section>

      <section className="section" id="archive">
        <div className="container">
          <div className="filters" role="tablist" aria-label="Filter projects by category">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={current === f.key ? "filter-btn active" : "filter-btn"}
                data-filter={f.key}
                role="tab"
                aria-selected={current === f.key}
                onClick={() => selectFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="projects-grid">
            {shown.map((p) => (
              <ProjectCard key={p.id} project={p} iconName={p.cat} />
            ))}
            {shown.length === 0 ? (
              <div className="empty">No projects found in this category yet.</div>
            ) : null}
            {shown.length < list.length ? (
              <div style={{ gridColumn: "1/-1", textAlign: "center", marginTop: "10px" }}>
                <button
                  className="filter-btn"
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                >
                  Show {list.length - shown.length} more
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
