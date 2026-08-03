import { useEffect, useRef, useState } from "react";
import Icon from "../lib/icons";
import { stats as STATS } from "../data";

function CountUp({ target }) {
  const ref = useRef(null);
  const started = useRef(false);
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setDisplay(target);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const dur = 1100;
            const start = performance.now();
            function step(ts) {
              const p = Math.min((ts - start) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(target * eased));
              if (p < 1) requestAnimationFrame(step);
              else setDisplay(target);
            }
            requestAnimationFrame(step);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return <span ref={ref}>{display}</span>;
}

export default function Stats() {
  const [repoCount, setRepoCount] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Karthikeyan-k-u/repos?per_page=100")
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((repos) => setRepoCount(repos.length))
      .catch(() => {});
  }, []);

  return (
    <section className="stats-band" aria-label="Highlights">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((s) => {
            const value = s.dynamic && repoCount != null ? String(repoCount) : s.value;
            const num = parseInt(value, 10);
            const isNum = !isNaN(num);
            return (
              <div className="stat" key={s.label}>
                <div className="icon"><Icon name={s.icon} /></div>
                <div className="num">
                  {isNum ? <CountUp target={num} /> : value}
                  {s.suffix}
                </div>
                <div className="lbl">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
