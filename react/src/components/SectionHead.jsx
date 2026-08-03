import Reveal from "./Reveal";

export default function SectionHead({ eyebrow, title, sub, center = false }) {
  const classes = center ? "section-head center" : "section-head";
  return (
    <Reveal className={classes}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {sub ? <p>{sub}</p> : null}
    </Reveal>
  );
}
