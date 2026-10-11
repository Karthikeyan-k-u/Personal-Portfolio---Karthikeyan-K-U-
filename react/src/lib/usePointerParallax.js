import { useEffect, useRef } from "react";

/**
 * Mouse-driven parallax for background layers.
 * Translates the referenced element with a smoothed cursor offset and a
 * constant scale, giving a subtle 3D depth feel. Automatically disabled for
 * reduced-motion and touch/coarse-pointer devices.
 */
export default function usePointerParallax(depth = 20, scale = 1.08) {
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

    let tx = 0, ty = 0, cx = 0, cy = 0, raf = null;

    function onMove(e) {
      tx = (e.clientX / window.innerWidth) * 2 - 1;
      ty = (e.clientY / window.innerHeight) * 2 - 1;
      if (!raf) raf = requestAnimationFrame(tick);
    }

    function tick() {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      el.style.transform = `translate3d(${(-cx * depth).toFixed(2)}px,${(-cy * depth).toFixed(2)}px,0) scale(${scale})`;
      raf = Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001
        ? requestAnimationFrame(tick)
        : null;
    }

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [depth, scale]);

  return ref;
}
