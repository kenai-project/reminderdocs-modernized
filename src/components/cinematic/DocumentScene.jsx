import { range, f2 } from './sceneTimeline.js';
import { JOURNEY_DOCS } from '../../data/story.js';

// ACT 1 · DOCUMENT (0.00–0.20)
// The four document pills appear in order (RC → INS → PUC → DL), condense
// toward the centre, and hand off to the Insurance card, which then exits
// upward (scale 1 → 0.85, translateY 0 → -120px) for the Expiry act.
export default function DocumentScene({ p }) {
  const out = range(p, 0.14, 0.2); // shared exit for the whole act
  const cardIn = range(p, 0.04, 0.1);
  const condense = range(p, 0.05, 0.12);

  return (
    <div
      className="cine-scene doc"
      style={{
        opacity: f2(1 - out),
        transform: `scale(${f2(1 - out * 0.15)}) translateY(${f2(-out * 120)}px)`,
        filter: out > 0 ? `blur(${f2(out * 5)}px)` : undefined,
      }}
    >
      <div className="doc-chips">
        {JOURNEY_DOCS.map((doc, i) => {
          const t = range(p, 0.004 + i * 0.014, 0.05 + i * 0.014);
          return (
            <div
              className="doc-chip"
              key={doc.code}
              style={{
                opacity: f2(t * (1 - condense)),
                transform: `translateY(${f2((1 - t) * 26 - condense * 12)}px) scale(${f2(1 - condense * 0.12)})`,
              }}
            >
              <b>{doc.code}</b>
              <span>{doc.name}</span>
            </div>
          );
        })}
      </div>

      <div
        className="j-doc"
        style={{
          opacity: f2(cardIn),
          transform: `scale(${f2(0.9 + cardIn * 0.1)}) translateY(${f2((1 - cardIn) * 30)}px)`,
        }}
      >
        <span className="doc-code big" aria-hidden="true">INS</span>
        <div>
          <h3>Insurance</h3>
          <p>Expires: 18 Oct 2026</p>
        </div>
      </div>
    </div>
  );
}
