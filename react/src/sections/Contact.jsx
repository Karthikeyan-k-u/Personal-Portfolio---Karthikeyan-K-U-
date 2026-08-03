import { useState } from "react";
import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";
import Icon from "../lib/icons";
import { social } from "../data";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });
  const [msg, setMsg] = useState(null);

  const set = (key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value }));

  function onSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = fields;
    const trimmed = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    };

    if (!trimmed.name || !trimmed.email || !trimmed.subject || !trimmed.message) {
      setMsg({ type: "err", text: "Please fill in all the fields." });
      return;
    }
    if (!EMAIL_RE.test(trimmed.email)) {
      setMsg({ type: "err", text: "Please enter a valid email address." });
      return;
    }

    const body = `Name: ${trimmed.name}\nEmail: ${trimmed.email}\n\nMessage:\n${trimmed.message}`;
    const mailto = `mailto:${social.email}?subject=${encodeURIComponent(trimmed.subject)}&body=${encodeURIComponent(body)}`;
    setMsg({ type: "ok", text: "Opening your email app…" });
    window.location.href = mailto;
    setTimeout(() => {
      setMsg({ type: "ok", text: `Didn't open? Email me directly at ${social.email}.` });
    }, 6000);
  }

  const msgClass = msg ? `form-msg show ${msg.type === "err" ? "err" : "ok"}` : "form-msg";

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHead
          center
          eyebrow="Contact"
          title={<>Let's <span className="text-gradient">Build Something Meaningful</span></>}
          sub="I am open to internships, collaborative projects, and professional opportunities in software engineering, front-end development, Java, Python, UI/UX, and data science."
        />
        <div className="contact-grid">
          <Reveal className="contact-info">
            <div className="contact-line">
              <span className="ic"><Icon name="email" /></span>
              <div>
                <div className="lbl">Email</div>
                <a className="val" href={`mailto:${social.email}`}>Email Me</a>
              </div>
            </div>
            <div className="contact-line">
              <span className="ic"><Icon name="github" /></span>
              <div>
                <div className="lbl">GitHub</div>
                <a className="val" href={social.github} target="_blank" rel="noopener">Repositories</a>
              </div>
            </div>
            <div className="contact-line">
              <span className="ic"><Icon name="linkedin" /></span>
              <div>
                <div className="lbl">LinkedIn</div>
                <a className="val" href={social.linkedin} target="_blank" rel="noopener">View Profile</a>
              </div>
            </div>
            <div className="contact-line">
              <span className="ic"><Icon name="pin" /></span>
              <div>
                <div className="lbl">Based In</div>
                <span className="val">Chennai, India</span>
              </div>
            </div>
          </Reveal>
          <Reveal as="form" className="contact-form" onSubmit={onSubmit} noValidate>
            <div className="form-row">
              <div className="field">
                <label htmlFor="cName">Name</label>
                <input type="text" id="cName" name="name" placeholder="Your name" required autoComplete="name" value={fields.name} onChange={set("name")} />
              </div>
              <div className="field">
                <label htmlFor="cEmail">Email</label>
                <input type="email" id="cEmail" name="email" placeholder="you@example.com" required autoComplete="email" value={fields.email} onChange={set("email")} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="cSubject">Subject</label>
              <input type="text" id="cSubject" name="subject" placeholder="What's this about?" required value={fields.subject} onChange={set("subject")} />
            </div>
            <div className="field">
              <label htmlFor="cMessage">Message</label>
              <textarea id="cMessage" name="message" placeholder="Write your message…" required value={fields.message} onChange={set("message")}></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ justifySelf: "start" }}>
              Send Message
              <Icon name="send" strokeWidth={2} />
            </button>
            <div className={msgClass} role="status">{msg ? msg.text : ""}</div>
            <p style={{ fontSize: ".8rem" }}>This form opens your email app to send the message directly to me.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
