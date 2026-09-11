import { Link } from 'react-router-dom';
import Parallax from './Parallax.jsx';
import Reveal from './Reveal.jsx';

// S6 — the road calms: a real open-road photo with a slow zoom, dark veil,
// and the closing message + CTA.
export default function KeepMoving() {
  return (
    <section className="keep-moving">
      <Parallax speed={0.07} className="scene-layer">
        <div className="photo-bg km-photo" role="img" aria-label="Open road ahead" />
      </Parallax>
      <div className="photo-veil km-veil" aria-hidden="true" />

      <div className="container km-copy">
        <Reveal>
          <span className="eyebrow light"><i></i> The road ahead</span>
          <h2>Keep moving.</h2>
          <p>
            Your vehicle should keep moving.<br />
            Your documents should too.
          </p>
          <Link className="btn btn-primary big" to="/register">Get started →</Link>
        </Reveal>
      </div>
    </section>
  );
}
