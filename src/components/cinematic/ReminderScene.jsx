import { range, f2 } from './sceneTimeline.js';
import PhoneMock from './PhoneMock.jsx';

// ACT 3 · REMINDER (0.40–0.60)
// The insurance card shrinks away as the phone slides in from the right, the
// notification seats itself ("Insurance renewal — expires in 18 days."), and
// the "Reminder scheduled — WhatsApp + Email" pill confirms. Exits left as
// the Notification act takes focus.
export default function ReminderScene({ p }) {
  const enter = range(p, 0.38, 0.44);
  const out = range(p, 0.56, 0.62);
  const cardAway = range(p, 0.4, 0.48); // insurance card folds into the phone
  const noteT = range(p, 0.46, 0.52);
  const schedT = range(p, 0.53, 0.59);

  return (
    <div className="cine-scene reminder">
      {/* insurance card handing off into the phone */}
      <div
        className="j-doc handoff-doc"
        style={{
          opacity: f2((1 - cardAway) * (1 - out)),
          transform: `scale(${f2(1 - cardAway * 0.18)}) translateY(${f2(cardAway * -26)}px)`,
          filter: cardAway > 0 ? `blur(${f2(cardAway * 4)}px)` : undefined,
        }}
      >
        <span className="doc-code big" aria-hidden="true">INS</span>
        <div>
          <h3>Insurance</h3>
          <p>Expires: 18 Oct 2026</p>
        </div>
      </div>

      <div
        className="j-phone"
        style={{
          opacity: f2(enter * (1 - out)),
          transform: `translateX(${f2((1 - enter) * 150 - out * 180)}px) scale(${f2(0.94 + enter * 0.06)})`,
          filter: out > 0 ? `blur(${f2(out * 4)}px)` : undefined,
        }}
      >
        <PhoneMock noteT={noteT} />
      </div>

      <div
        className="j-sched"
        style={{
          opacity: f2(schedT * (1 - out)),
          transform: `translateY(${f2((1 - schedT) * 34 - out * 40)}px) scale(${f2(0.96 + schedT * 0.04)})`,
        }}
      >
        <b className="check">✓</b> Reminder scheduled — WhatsApp + Email
      </div>
    </div>
  );
}
