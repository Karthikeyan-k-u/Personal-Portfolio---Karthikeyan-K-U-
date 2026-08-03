import { useEffect, useRef } from "react";

const HOVER = "a, button, input, textarea, select, [role='button'], .project-card, .cert-card";

export default function CustomCursor() {
  const glowRef = useRef(null);
  const ringRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!glow || !ring || !dot) return;

    const reduceMotion =
      (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) ||
      (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) ||
      navigator.maxTouchPoints > 0 ||
      "ontouchstart" in window;
    if (reduceMotion) return;

    let mX = -9999, mY = -9999, gX = -9999, gY = -9999, rX = -9999, rY = -9999;
    let scale = 1, target = 1, hovering = false, active = false;
    let raf;

    function onMove(e) {
      mX = e.clientX; mY = e.clientY;
      if (!active) {
        active = true;
        gX = rX = mX; gY = rY = mY;
        glow.classList.add("is-on");
        ring.classList.add("is-on");
        dot.classList.add("is-on");
      }
    }

    function onLeave() {
      active = false;
      glow.classList.remove("is-on");
      ring.classList.remove("is-on");
      dot.classList.remove("is-on");
    }

    function onOver(e) {
      if (e.target.closest && e.target.closest(HOVER)) {
        hovering = true; target = 1.5; ring.classList.add("is-hover");
      }
    }

    function onOut(e) {
      if (e.target.closest && e.target.closest(HOVER)) {
        hovering = false; target = 1; ring.classList.remove("is-hover");
      }
    }

    function onDown() { target = 0.85; }
    function onUp() { target = hovering ? 1.5 : 1; }

    function tick() {
      if (active) {
        gX += (mX - gX) * 0.12;
        gY += (mY - gY) * 0.12;
        rX += (mX - rX) * 0.28;
        rY += (mY - rY) * 0.28;
        scale += (target - scale) * 0.5;
        glow.style.transform = `translate3d(${gX}px,${gY}px,0) translate(-50%,-50%)`;
        ring.style.transform = `translate3d(${rX}px,${rY}px,0) translate(-50%,-50%) scale(${scale})`;
        dot.style.transform = `translate3d(${mX}px,${mY}px,0) translate(-50%,-50%)`;
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return (
    <>
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
    </>
  );
}
