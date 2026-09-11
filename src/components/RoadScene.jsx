import { Link } from 'react-router-dom';
import CarArt from './CarArt.jsx';
import Parallax from './Parallax.jsx';
import Reveal from './Reveal.jsx';
import { HERO_DOCS } from '../data/story.js';

// S1 — cinematic hero: real night-highway photo with slow Ken-Burns zoom,
// the ReminderDocs car driving across the road in the foreground, document
// chips floating at different parallax depths, headline on top.
export default function RoadScene() {
  return (
    <section className="hero-scene">
      <Parallax speed={0.07} className="scene-layer">
        <div className="photo-bg hero-photo" role="img" aria-label="Night highway with light trails" />
      </Parallax>
      <div className="photo-veil hero-veil" aria-hidden="true" />
      <div className="scene-glow" aria-hidden="true" />

      {/* The car — middle layer, gently bobbing as it drives */}
      <Parallax speed={-0.05} className="scene-layer">
        <div className="scene-car">
          <CarArt type="car" className="car-art" />
        </div>
      </Parallax>

      {HERO_DOCS.map((doc, i) => (
        <Parallax key={doc.code} speed={-0.08 - i * 0.03} className="scene-layer">
          <div className={`float-chip chip-${i + 1}`} style={{ animationDelay: `${i * 0.7}s` }}>
            <span className="chip-icon" aria-hidden="true">{doc.icon}</span>
            <span>
              <b>{doc.code}</b>
              <small>{doc.name}</small>
            </span>
          </div>
        </Parallax>
      ))}

      <div className="container scene-copy">
        <Reveal className="scene-copy-inner">
          <span className="eyebrow light"><i></i> Built for vehicle owners in India</span>
          <h1>Never miss a renewal.</h1>
          <p>
            RC, insurance, PUC, licence — every document in one place, with reminders
            that reach you before the due date.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-primary" to="/register">Get started →</Link>
            <Link className="btn btn-ghost" to="/#how">Follow the journey ↓</Link>
          </div>
          <div className="trust">
            <span><b className="check">✓</b> Secure &amp; private</span>
            <span><b className="check">✓</b> WhatsApp + Email</span>
            <span><b className="check">✓</b> Multi-vehicle ready</span>
          </div>
        </Reveal>
      </div>

      <div className="scene-scroll-cue" aria-hidden="true"><span></span></div>
      <div className="scene-fade" aria-hidden="true" />
    </section>
  );
}
