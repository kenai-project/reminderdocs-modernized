import { Link } from 'react-router-dom';
import RoadSurface from './cinematic/RoadSurface.jsx';
import MovingCar from './cinematic/MovingCar.jsx';
import Parallax from './Parallax.jsx';
import Reveal from './Reveal.jsx';
import { HERO_DOCS } from '../data/story.js';

// S1 — cinematic journey hero. Depth stack (slowest → fastest):
//   city photo (Ken-Burns, slowest parallax) → road plane (medium) →
//   document chips (depth accents) → the car (foreground, controlled drift).
// The car travels ON the RoadSurface plane; lane dashes flowing toward the
// viewer create the forward-motion feeling.
export default function RoadScene() {
  return (
    <section className="hero-scene">
      {/* BACKGROUND — city/sky, slowest */}
      <Parallax speed={0.05} className="scene-layer">
        <div className="photo-bg hero-photo" role="img" aria-label="City skyline at dusk above a highway" />
      </Parallax>
      <div className="photo-veil hero-veil" aria-hidden="true" />

      {/* MIDGROUND — the perspective road the car drives on */}
      <Parallax speed={0.11} className="scene-layer">
        <RoadSurface />
      </Parallax>

      {/* DOCUMENT CARDS — anchored around the journey, not random floats */}
      {HERO_DOCS.map((doc, i) => (
        <Parallax key={doc.code} speed={-0.07 - i * 0.03} className="scene-layer">
          <div className={`float-chip chip-${i + 1}`} style={{ animationDelay: `${i * 0.7}s` }}>
            <span className="chip-icon" aria-hidden="true">{doc.icon}</span>
            <span>
              <b>{doc.code}</b>
              <small>{doc.name}</small>
            </span>
          </div>
        </Parallax>
      ))}

      {/* FOREGROUND — the car, travelling on the road */}
      <Parallax speed={-0.1} className="scene-layer">
        <MovingCar />
      </Parallax>

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
