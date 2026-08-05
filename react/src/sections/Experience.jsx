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
                <span className="tl-date">Currently Interning · June 2026 – Present</span>
              </div>
              <div className="tl-org">ATC Travelzone</div>
              <p>
                Currently interning as a Web Development Intern, single-handedly building and
                maintaining a full-stack travel booking platform from the ground up — covering the
                customer-facing website, dynamic content pages, and a complete admin CMS. Balancing
                this real-world development role alongside a dual-degree program (B.E. CSE + IIT
                Madras), managing hands-on production work, debugging, and academic commitments in
                parallel.
              </p>
              <ul className="tl-list">
                <li>Built the entire customer-facing website end-to-end — homepage, packages, destinations, activities, offers, reviews, and booking flow — using React, TanStack Start, TypeScript, and Tailwind CSS.</li>
                <li>Designed and developed a full admin CMS panel from scratch: CRUD modules for Bookings, Packages, Destinations, Website Content, Payments, and Settings — including media upload, image preview, and delete-confirmation safeguards.</li>
                <li>Integrated Supabase as the backend, connecting live data across public pages and admin panel with real-time sync.</li>
                <li>Identified and resolved numerous bugs and edge cases across the site — from broken layouts to data sync issues — bringing the platform to a stable, professional, production-ready state.</li>
                <li>Deployed and maintained the live site on Cloudflare Pages, ensuring performance and uptime.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
