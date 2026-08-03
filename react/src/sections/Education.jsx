import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";
import Icon from "../lib/icons";
import { education } from "../data";

export default function Education() {
  return (
    <section className="section section-tight" id="education">
      <div className="container">
        <SectionHead
          center
          eyebrow="Education"
          title={<>Learning <span className="text-gradient">journey</span></>}
          sub="From school to engineering — the milestones along the way."
        />
        <div className="edu-grid">
          {education.map((e) => (
            <Reveal className="edu-card" key={e.degree}>
              {e.tag ? <span className="edu-tag">{e.tag}</span> : null}
              <span className="edu-icon"><Icon name="graduation" /></span>
              <h3>{e.degree}</h3>
              <div className="edu-inst">{e.institution}</div>
              <div className="edu-meta">
                {e.years ? <span className="chip">{e.years}</span> : null}
                {e.location ? <span className="chip">{e.location}</span> : null}
                {e.meta ? <span className="chip">{e.meta}</span> : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
