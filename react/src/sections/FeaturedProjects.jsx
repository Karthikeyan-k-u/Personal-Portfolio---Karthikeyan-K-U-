import { Link } from "react-router-dom";
import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import Icon from "../lib/icons";
import { projects } from "../data";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead
          center
          eyebrow="Featured Projects"
          title={<>Things I've <span className="text-gradient">designed &amp; built</span></>}
          sub="A selection of my favourite work — live sites, internships, and hackathon projects."
        />
        <div className="projects-grid">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        <Reveal className="view-all-wrap">
          <Link className="btn btn-outline" to="/projects">
            View All Projects
            <Icon name="arrow-right" strokeWidth={2} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
