import { useEffect, useRef } from "react";

const MAX_TILT = 1.8; // degrees — subtle 3D camera rotation
const Z_SCALE = 3; // converts a layer's depth into px of translateZ

export default function Background() {
  const tiltRef = useRef(null);

  useEffect(() => {
    const field = tiltRef.current;
    if (!field) return;

    const layers = Array.from(field.querySelectorAll(".parallax"));
    if (!layers.length) return;

    const reduce =
      (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) ||
      (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) ||
      navigator.maxTouchPoints > 0 ||
      "ontouchstart" in window;
    if (reduce) return;

    let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;

    function onMove(e) {
      tx = (e.clientX / window.innerWidth) * 2 - 1;
      ty = (e.clientY / window.innerHeight) * 2 - 1;
      if (!raf) raf = requestAnimationFrame(tick);
    }

    function tick() {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;

      // Camera tilt: rotate the whole depth field (anchored at the page top).
      field.style.transform =
        `rotateX(${(-cy * MAX_TILT).toFixed(2)}deg) ` +
        `rotateY(${(cx * MAX_TILT).toFixed(2)}deg)`;

      // Per-layer parallax + 3D depth offset.
      for (const layer of layers) {
        const depth = parseFloat(layer.dataset.depth || "10");
        layer.style.transform =
          `translate3d(${(-cx * depth).toFixed(2)}px,${(-cy * depth).toFixed(2)}px,${(depth * Z_SCALE).toFixed(2)}px)`;
      }

      raf = Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001
        ? requestAnimationFrame(tick)
        : null;
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    if (!raf) raf = requestAnimationFrame(tick);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <>
      <div className="bg-aurora" aria-hidden="true">
        <div className="bg-field">
          <div className="bg-tilt" ref={tiltRef}>
            <div className="parallax" data-depth="6">
              <span className="nebula-glow" />
            </div>
            <div className="parallax" data-depth="10">
              <span className="nebula-sharp" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-overlay" aria-hidden="true">
        <span className="bg-scrim" />
        <span className="bg-grain" />
        <span className="bg-vignette" />
      </div>
    </>
  );
}
