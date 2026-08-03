import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";

export default function Experience() {
  return (
    <section className="section section-tight" id="experience">
      <div className="container">
        <SectionHead
          center
          eyebrow="Experience"
          title={<>Where I've <span className="text-gradient">been building</span></>}
          sub="A snapshot of the work that shaped how I approach the web."
        />
        <div className="timeline">
          <Reveal className="tl-item">
            <span className="tl-dot" aria-hidden="true"></span>
            <div className="tl-card">
              <div className="tl-top">
                <span className="tl-role">Web Development Intern</span>
                <span className="tl-date">Industry Internship</span>
              </div>
              <div className="tl-org">ATC Travelzone</div>
              <p>
                Built responsive travel-platform pages — destinations, packages, activities, offers, reviews,
                and booking flows — as part of my web development internship. Worked with
                Supabase-backed data and Cloudflare-hosted deployments.
              </p>
              <ul className="tl-list">
                <li>Developed responsive, mobile-first UI pages for a live travel platform.</li>
                <li>Integrated front-end components with a Supabase backend.</li>
                <li>Deployed and maintained the site on Cloudflare Pages.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
