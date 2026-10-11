import Reveal from "../components/Reveal";
import Icon from "../lib/icons";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-media">
            <div className="avail-pill" aria-label="Availability">
              <span className="avail-dot"></span>
              Open to Opportunities
            </div>
            <div className="about-photo">
              <span className="about-glow" aria-hidden="true"></span>
              <div className="about-frame">
                <img src="/profile-about.jpg" alt="Portrait of Karthikeyan K U" width="480" height="600" loading="lazy" />
                <span className="about-shine" aria-hidden="true"></span>
              </div>
              <span className="about-float f1">
                <Icon name="graduation" strokeWidth={2} />
                IIT Madras
              </span>
              <span className="about-float f2">
                <Icon name="medal" strokeWidth={2} />
                NPTEL Elite &amp; Silver
              </span>
              <span className="about-float f3">
                <strong>8.64</strong> CGPA
              </span>
            </div>
            <div className="about-tags">
              <span className="chip">B.E. Computer Science and Engineering</span>
              <span className="chip">BS in Data Science and Applications — IIT Madras</span>
              <span className="chip">Web Development Intern — ATC Travelzone</span>
              <span className="chip">Chennai, Tamil Nadu</span>
              <span className="chip">Open to Opportunities</span>
            </div>
          </Reveal>
          <Reveal className="about-copy">
            <span className="eyebrow">Who I Am</span>
            <h2>About <span className="text-gradient">Me</span></h2>
            <p className="lead">
              I am an aspiring software engineer pursuing a B.E. in Computer Science and Engineering at
              Prince College alongside a BS in Data Science and Applications at IIT Madras. I am passionate
              about building intuitive, responsive, and reliable digital solutions that solve real-world problems.
            </p>
            <p>
              As a <strong className="about-strong">Web Development Intern at ATC TravelZone</strong>, I gain
              practical experience in developing and maintaining web applications, working on user-facing
              interfaces, and contributing to travel platform development. My technical interests include
              front-end development, Java, Python, JavaScript, database management, and UI/UX design.
            </p>
            <p>
              Through my internship, academic work, and independent projects, I continue to strengthen my
              skills in software development, debugging, and problem-solving. I have also earned an{" "}
              <strong className="about-strong">NPTEL Elite and Silver certification in Object-Oriented
              Programming</strong> and completed additional technical certifications.
            </p>
            <p>
              My goal is to grow into a well-rounded software engineer who builds scalable, efficient, and
              user-focused applications. I am open to internship opportunities, collaborative projects, and
              roles in software engineering and web development.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
