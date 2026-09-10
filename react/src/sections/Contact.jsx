import { useState } from "react";
import SectionHead from "../components/SectionHead";
import Reveal from "../components/Reveal";
import Icon from "../lib/icons";
import { social } from "../data";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const VALIDATORS = {
  name: (v) => (v.trim() ? "" : "Please enter your name."),
  email: (v) => (v.trim() ? (EMAIL_RE.test(v.trim()) ? "" : "Please enter a valid email address.") : "Please enter your email."),
  subject: (v) => (v.trim() ? "" : "Please add a subject."),
  message: (v) => (v.trim() ? "" : "Please write a message."),
};

export default function Contact() {
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState(null);
  const [sending, setSending] = useState(false);

  const set = (key) => (e) => {
    const value = e.target.value;
    setFields((f) => ({ ...f, [key]: value }));
    setErrors((err) => ({ ...err, [key]: VALIDATORS[key](value) }));
  };

  function onSubmit(e) {
    e.preventDefault();
    const nextErrors = {};
    let hasError = false;
    Object.keys(VALIDATORS).forEach((k) => {
      const err = VALIDATORS[k](fields[k]);
      nextErrors[k] = err;
      if (err) hasError = true;
    });
    setErrors(nextErrors);
    if (hasError) {
      setMsg({ type: "err", text: "Please fix the highlighted fields below." });
      return;
    }

    const body = `Name: ${fields.name.trim()}\nEmail: ${fields.email.trim()}\n\nMessage:\n${fields.message.trim()}`;
    const mailto = `mailto:${social.email}?subject=${encodeURIComponent(fields.subject.trim())}&body=${encodeURIComponent(body)}`;
    setSending(true);
    setMsg({ type: "ok", text: "Opening your email app…" });
    window.location.href = mailto;
    setTimeout(() => {
      setSending(false);
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
              <div className={`field${errors.name ? " err" : ""}`}>
                <label htmlFor="cName">Name</label>
                <input
                  type="text"
                  id="cName"
                  name="name"
                  placeholder="Your name"
                  required
                  autoComplete="name"
                  aria-invalid={errors.name ? "true" : undefined}
                  aria-describedby={errors.name ? "cNameErr" : undefined}
                  value={fields.name}
                  onChange={set("name")}
                />
                {errors.name ? <span className="field-err" id="cNameErr">{errors.name}</span> : null}
              </div>
              <div className={`field${errors.email ? " err" : ""}`}>
                <label htmlFor="cEmail">Email</label>
                <input
                  type="email"
                  id="cEmail"
                  name="email"
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                  aria-invalid={errors.email ? "true" : undefined}
                  aria-describedby={errors.email ? "cEmailErr" : undefined}
                  value={fields.email}
                  onChange={set("email")}
                />
                {errors.email ? <span className="field-err" id="cEmailErr">{errors.email}</span> : null}
              </div>
            </div>
            <div className={`field${errors.subject ? " err" : ""}`}>
              <label htmlFor="cSubject">Subject</label>
              <input
                type="text"
                id="cSubject"
                name="subject"
                placeholder="What's this about?"
                required
                aria-invalid={errors.subject ? "true" : undefined}
                aria-describedby={errors.subject ? "cSubjectErr" : undefined}
                value={fields.subject}
                onChange={set("subject")}
              />
              {errors.subject ? <span className="field-err" id="cSubjectErr">{errors.subject}</span> : null}
            </div>
            <div className={`field${errors.message ? " err" : ""}`}>
              <label htmlFor="cMessage">Message</label>
              <textarea
                id="cMessage"
                name="message"
                placeholder="Write your message…"
                required
                aria-invalid={errors.message ? "true" : undefined}
                aria-describedby={errors.message ? "cMessageErr" : undefined}
                value={fields.message}
                onChange={set("message")}
              ></textarea>
              {errors.message ? <span className="field-err" id="cMessageErr">{errors.message}</span> : null}
            </div>
            <button type="submit" className="btn btn-primary" style={{ justifySelf: "start" }} disabled={sending}>
              {sending ? "Opening email…" : "Send Message"}
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