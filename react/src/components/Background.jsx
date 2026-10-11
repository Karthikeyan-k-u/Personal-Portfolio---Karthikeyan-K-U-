import { useEffect, useMemo, useRef } from "react";

const ORBS = [
  { className: "orb orb-1", depth: 42 },
  { className: "orb orb-2", depth: 27 },
  { className: "orb orb-3", depth: 17 },
  { className: "orb orb-4", depth: 10 },
  { className: "orb orb-5", depth: 6 },
];

const STAR_COUNT = 46;

export default function Background() {
  const rootRef = useRef(null);

  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 1.8,
        alpha: 0.2 + Math.random() * 0.55,
        dur: (3 + Math.random() * 5).toFixed(2),
        dly: (-Math.random() * 6).toFixed(2),
      })),
    []
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const layers = Array.from(root.querySelectorAll(".parallax"));
    if (!layers.length) return;

    const reduce =
      (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) ||
      (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) ||
      navigator.maxTouchPoints > 0 ||
      "ontouchstart" in window;
    if (reduce) return;

    let tx = 0, ty = 0, cx = 0, cy = 0, raf;

    function onMove(e) {
      tx = (e.clientX / window.innerWidth) * 2 - 1;
      ty = (e.clientY / window.innerHeight) * 2 - 1;
    }

    function tick() {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      for (const layer of layers) {
        const depth = parseFloat(layer.dataset.depth || "10");
        layer.style.transform = `translate3d(${(-cx * depth).toFixed(2)}px,${(-cy * depth).toFixed(2)}px,0)`;
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="bg-aurora" ref={rootRef} aria-hidden="true">
      <span className="aurora-curtain" />
      {ORBS.map((orb) => (
        <div key={orb.className} className="parallax orb-pos" data-depth={orb.depth}>
          <span className={orb.className} />
        </div>
      ))}
      <div className="parallax starfield" data-depth="20">
        {stars.map((s, i) => (
          <span
            key={i}
            className="star"
            style={{
              left: `${s.left.toFixed(2)}%`,
              top: `${s.top.toFixed(2)}%`,
              width: `${s.size.toFixed(2)}px`,
              height: `${s.size.toFixed(2)}px`,
              ["--a"]: s.alpha.toFixed(2),
              ["--dur"]: `${s.dur}s`,
              ["--dly"]: `${s.dly}s`,
            }}
          />
        ))}
      </div>
      <div className="parallax" data-depth="14">
        <span className="ring ring-1" />
      </div>
      <div className="parallax" data-depth="8">
        <span className="ring ring-2" />
      </div>
      <span className="bg-grain" />
      <span className="bg-vignette" />
    </div>
  );
}