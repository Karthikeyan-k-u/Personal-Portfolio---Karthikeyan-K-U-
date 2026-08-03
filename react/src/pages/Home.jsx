import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import About from "../sections/About";
import Experience from "../sections/Experience";
import FeaturedProjects from "../sections/FeaturedProjects";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Achievements from "../sections/Achievements";
import Certifications from "../sections/Certifications";
import ResumeCTA from "../sections/ResumeCTA";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Experience />
      <FeaturedProjects />
      <Skills />
      <Education />
      <Achievements />
      <Certifications />
      <ResumeCTA />
      <Contact />
    </>
  );
}
