import { Fragment } from 'react';
import CarArt from './CarArt.jsx';
import Parallax from './Parallax.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { JOURNEY_DOCS } from '../data/story.js';

// Section 2 — the vehicle branches into its documents (RC → Insurance →
// PUC → DL). Each card enters one after another with its own parallax depth.
export default function DocumentChain() {
  return (
    <section className="chain" id="how">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="The vehicle journey"
            title="Everything about your vehicle, in one place"
            subtitle="Add a vehicle once — its documents follow it everywhere."
          />
        </Reveal>

        <Reveal className="chain-node" delay={120}>
          <Parallax speed={-0.04}>
            <div className="vehicle-node">
              <CarArt type="car" />
              <b>KA 01 AB 1234</b>
              <small>Your vehicle</small>
            </div>
          </Parallax>
        </Reveal>

        <div className="chain-docs">
          {JOURNEY_DOCS.map((doc, i) => (
            <Fragment key={doc.code}>
              <Reveal delay={i * 120}>
                <Parallax speed={-0.05 - i * 0.03}>
                  <div className={`doc-card depth-${i % 2}`}>
                    <span className="doc-code">{doc.code}</span>
                    <div>
                      <h3>{doc.name}</h3>
                      <p>{doc.note}</p>
                    </div>
                  </div>
                </Parallax>
              </Reveal>
              {i < JOURNEY_DOCS.length - 1 && <div className="chain-link" aria-hidden="true" />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
