import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <Reveal className="about-media">
            <div className="about-frame">
              <img src="/profile-about.jpg" alt="Portrait of Karthikeyan K U" width="480" height="600" loading="lazy" />
            </div>
          </Reveal>
          <Reveal className="about-copy">
            <span className="eyebrow">About Me</span>
            <h2>Turning curiosity into <span className="text-gradient">clean code</span></h2>
            <p className="lead">
              I am an emerging software engineer pursuing a B.E. in Computer Science and Engineering
              alongside a BS in Data Science and Applications at IIT Madras. My interests lie at the
              intersection of software engineering, user experience, and data-driven technology.
            </p>
            <p>
              I have hands-on experience in front-end development, UI/UX design, Java, Python, JavaScript,
              object-oriented programming, database management, and responsive web application development.
              I enjoy transforming ideas into functional digital products that are intuitive, reliable,
              and designed to solve real-world problems.
            </p>
            <p>
              Through academic, internship, and independent projects, I have built responsive websites,
              admin dashboards, travel-management platforms, Java-based management systems, Python
              applications, and interactive web solutions. These experiences have strengthened my skills in
              problem-solving, software design, debugging, application architecture, and user-centred development.
            </p>
            <p>
              I hold an NPTEL Elite and Silver certification in Object-Oriented Programming and have
              completed additional certifications in Java, Python, responsive web design, user experience,
              cloud technologies, and AI development.
            </p>
            <p>
              I am committed to continuous learning and professional growth, with the goal of becoming a
              well-rounded software engineer capable of building scalable, efficient, and meaningful digital products.
            </p>
            <p>
              I am open to internships, collaborative projects, and professional opportunities in software
              engineering, front-end development, Java, Python, UI/UX, and data science.
            </p>
            <div className="about-divider" aria-hidden="true"></div>
            <div className="about-tags">
              <span className="chip">B.E. Computer Science and Engineering</span>
              <span className="chip">BS in Data Science and Applications — IIT Madras</span>
              <span className="chip">Web Development Intern — ATC Travelzone</span>
              <span className="chip">Chennai, Tamil Nadu</span>
              <span className="chip">Open to Opportunities</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
