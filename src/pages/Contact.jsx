import { useState } from 'react';
import { SUPPORT } from '../data/site.js';
import Reveal from '../components/Reveal.jsx';

// Contact page with a message form (currently opens the user's mail client).
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const subject = encodeURIComponent(data.get('subject') || 'ReminderDocs enquiry');
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`
    );
    window.location.href = `mailto:${SUPPORT.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal><span className="eyebrow">Contact</span></Reveal>
          <Reveal delay={90}><h1>We're here to help.</h1></Reveal>
          <Reveal delay={180}>
            <p>Questions about your account, reminders or vehicle documents? Send us a message.</p>
          </Reveal>
        </div>
      </section>
      <Reveal delay={120}>
        <div className="form-wrap">
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="contact-name">Name</label>
                <input id="contact-name" name="name" placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" type="email" name="email" placeholder="you@example.com" required />
              </div>
              <div className="field full">
                <label htmlFor="contact-subject">Subject</label>
                <input id="contact-subject" name="subject" placeholder="How can we help?" />
              </div>
              <div className="field full">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" placeholder="Tell us what you need..." required />
              </div>
              <div className="field full">
                <button className="btn btn-primary" type="submit">Send message →</button>
              </div>
            </div>
          </form>
          {submitted && (
            <div className="form-status success" style={{ marginTop: 16 }}>
              Your email draft is ready — hit send in your mail app to reach us.
            </div>
          )}
          <div className="contact-meta">
            <b>Support</b><br />
            {SUPPORT.phone} · {SUPPORT.email}<br />
            Bangalore, Karnataka
          </div>
        </div>
      </Reveal>
    </>
  );
}
