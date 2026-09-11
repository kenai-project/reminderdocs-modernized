import CarArt from './CarArt.jsx';
import Parallax from './Parallax.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { PARADE_VEHICLES } from '../data/story.js';

// Section 6 — vehicles appear at different parallax depths; as you scroll,
// each drifts at a different speed, then converges toward the dashboard chip.
export default function VehicleParade() {
  return (
    <section className="parade">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="One account. Every vehicle."
            title="From one car to the whole garage"
            subtitle="Each vehicle moves at its own pace — they all end up in the same dashboard."
          />
        </Reveal>

        <div className="parade-row">
          {PARADE_VEHICLES.map((vehicle, i) => (
            <Reveal key={vehicle.type} delay={i * 110}>
              <Parallax speed={-0.05 - i * 0.045}>
                <div className="parade-vehicle">
                  <CarArt type={vehicle.type} />
                  <small>{vehicle.label}</small>
                </div>
              </Parallax>
            </Reveal>
          ))}
        </div>

        <Reveal delay={220}>
          <div className="parade-converge">↓ All of them, one dashboard</div>
        </Reveal>
      </div>
    </section>
  );
}
