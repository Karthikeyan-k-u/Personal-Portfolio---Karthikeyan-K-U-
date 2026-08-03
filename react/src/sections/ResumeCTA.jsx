import Reveal from "../components/Reveal";
import Icon from "../lib/icons";
import { resume } from "../data";

export default function ResumeCTA() {
  return (
    <section className="section section-tight">
      <div className="container">
        <Reveal className="cta-band">
          <span className="eyebrow" style={{ justifyContent: "center" }}>My Resume</span>
          <h2>Want the full <span className="text-gradient">story?</span></h2>
          <p>Grab a copy of my resume for a complete look at my education, experience, skills, and certifications.</p>
          <a className="btn btn-primary" href={resume} target="_blank" rel="noopener">
            <Icon name="download" strokeWidth={2} />
            Download Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}
