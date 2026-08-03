import { useEffect, useState } from "react";
import Icon from "../lib/icons";

export default function ScrollChrome() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      const st = document.documentElement.scrollTop || document.body.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (st / h) * 100 : 0);
      setShowTop(st > 500);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div id="progress" aria-hidden="true" style={{ width: `${progress}%` }} />
      <button
        className={showTop ? "back-top show" : "back-top"}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <Icon name="back-top" />
      </button>
    </>
  );
}
