import { useEffect, useRef } from "react";

const LAYERS = [
  { className: "orb orb-1", depth: 40 },
  { className: "orb orb-2", depth: 26 },
  { className: "orb orb-3", depth: 16 },
  { className: "orb orb-4", depth: 8 },
];

export default function Background() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const layers = Array.from(root.querySelectorAll(".orb-layer"));
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
      {LAYERS.map((layer) => (
        <div key={layer.className} className="orb-layer" data-depth={layer.depth}>
          <span className={layer.className} />
        </div>
      ))}
      <span className="bg-vignette" />
    </div>
  );
}
