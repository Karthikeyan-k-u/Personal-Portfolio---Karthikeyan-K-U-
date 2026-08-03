import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollChrome from "./components/ScrollChrome";
import CustomCursor from "./components/CustomCursor";
import useTheme from "./lib/useTheme";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const { toggle } = useTheme();

  return (
    <>
      <ScrollManager />
      <ScrollChrome />
      <CustomCursor />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar toggleTheme={toggle} />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
