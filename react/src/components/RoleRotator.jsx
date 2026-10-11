import { useEffect, useState } from "react";

const ROLES = [
  "Emerging Software Engineer",
  "Full-Stack Developer",
  "User Interface and User Experience Designer",
  "Web Development Intern at ATC TravelZone",
  "Computer Science and Engineering at Prince College",
  "Data Science and Applications at IIT Madras",
  "Building User-Centric Digital Experiences",
];

const TYPE_SPEED = 55;
const DELETE_SPEED = 28;
const HOLD_TIME = 1600;
const GAP_TIME = 420;

function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function RoleRotator() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [reduced] = useState(prefersReducedMotion);

  useEffect(() => {
    if (reduced) return undefined;

    const current = ROLES[index];
    let delay = deleting ? DELETE_SPEED : TYPE_SPEED;

    if (!deleting && text === current) {
      delay = HOLD_TIME;
    } else if (deleting && text === "") {
      delay = GAP_TIME;
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        if (text === current) {
          setDeleting(true);
        } else {
          setText(current.slice(0, text.length + 1));
        }
      } else if (text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % ROLES.length);
      } else {
        setText(current.slice(0, text.length - 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, reduced]);

  const display = reduced ? ROLES[0] : text;

  return (
    <div className="hero-rotator">
      <span className="hero-rotator-mark" aria-hidden="true" />
      <span className="hero-rotator-text" aria-hidden="true">
        <span className="role-text">{display}</span>
        {!reduced && <span className="role-cursor" />}
      </span>
      <span className="sr-only">{`Roles: ${ROLES.join(", ")}`}</span>
    </div>
  );
}
