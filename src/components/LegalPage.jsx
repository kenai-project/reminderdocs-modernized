import Reveal from '../components/Reveal.jsx';
import { LEGAL_SECTIONS } from '../data/content.js';

// Shared layout for the Privacy Policy and Terms & Conditions pages.
export default function LegalPage({ title, sectionKey }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal><span className="eyebrow">Legal</span></Reveal>
          <Reveal delay={90}><h1>{title}</h1></Reveal>
          <Reveal delay={180}><p>Last updated: September 2026</p></Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container legal-wrap">
          <Reveal delay={120}>
            <div className="legal-card">
              {LEGAL_SECTIONS[sectionKey].map((section) => (
                <div key={section.heading}>
                  <h3>{section.heading}</h3>
                  <p>{section.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
