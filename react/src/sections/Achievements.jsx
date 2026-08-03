import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";
import Icon from "../lib/icons";
import { achievements } from "../data";

export default function Achievements() {
  return (
    <section className="section section-tight" id="achievements">
      <div className="container">
        <SectionHead
          center
          eyebrow="Achievements"
          title={<>Highlights &amp; <span className="text-gradient">honours</span></>}
          sub="Milestones I'm proud of — in academics and beyond."
        />
        <div className="ach-grid">
          {achievements.map((a) => (
            <Reveal className="ach-card" key={a.title}>
              <span className="ach-icon"><Icon name={a.icon} /></span>
              <div>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
