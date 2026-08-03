import { useEffect, useRef } from "react";

/* Adds `visible` to the element's `.reveal` class when it scrolls into view. */
export default function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.remove("visible");

    if (!("IntersectionObserver" in window)) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: options.threshold ?? 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
