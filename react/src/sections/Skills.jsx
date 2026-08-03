import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";
import Icon from "../lib/icons";
import { skills } from "../data";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead
          center
          eyebrow="Skills"
          title={<>My <span className="text-gradient">toolbox</span></>}
          sub="The technologies I use to design, build, and ship."
        />
        <div className="skills-grid">
          {skills.map((g) => (
            <Reveal className="skill-card" key={g.cat}>
              <div className="skill-head">
                <span className="icon"><Icon name={g.icon} /></span>
                <h3>{g.cat}</h3>
              </div>
              <div className="skill-badges">
                {g.items.map((t) => <span className="chip" key={t}>{t}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
