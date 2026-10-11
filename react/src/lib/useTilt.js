import { useEffect, useRef } from "react";

export default function useTilt(max = 10) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) ||
      (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) ||
      navigator.maxTouchPoints > 0 ||
      "ontouchstart" in window;
    if (reduce) return;

    let raf = null;
    let tx = 0, ty = 0, rx = 0, ry = 0;

    function loop() {
      rx += (tx - rx) * 0.12;
      ry += (ty - ry) * 0.12;
      el.style.transform = `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      raf = Math.abs(tx - rx) > 0.01 || Math.abs(ty - ry) > 0.01
        ? requestAnimationFrame(loop)
        : null;
    }

    function onMove(e) {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      ty = px * 2 * max;
      tx = -py * 2 * max;
      if (!raf) raf = requestAnimationFrame(loop);
    }

    function onLeave() {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(loop);
    }

    el.addEventListener("mousemove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave, { passive: true });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [max]);

  return ref;
}