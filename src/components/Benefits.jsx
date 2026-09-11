import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { BENEFITS } from '../data/story.js';

// Section 7 — three benefit cards, each entering from a different direction.
export default function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Why it works"
            title="Three simple benefits"
            subtitle="No spreadsheets, no mental notes, no missed deadlines."
          />
        </Reveal>

        <div className="grid-3">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.num} delay={i * 130} className={benefit.from}>
              <div className="card benefit">
                <div className="icon">{benefit.num}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
