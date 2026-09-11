import { range, f2 } from './sceneTimeline.js';

// ACT 2 · EXPIRY (0.20–0.40)
// The Insurance card stays clearly visible while the huge day-count appears
// behind/around it and ticks down 30 → 19, then the whole act scales up and
// dissolves (scale → 1.1) into the Reminder act.
export default function ExpiryScene({ p }) {
  const enter = range(p, 0.18, 0.24);
  const out = range(p, 0.36, 0.42);
  const days = Math.round(30 - 11 * range(p, 0.2, 0.26)); // settles on 19

  const opacity = f2(enter * (1 - out));

  return (
    <div className="cine-scene expiry">
      <div
        className="j-count"
        style={{
          opacity,
          transform: `scale(${f2(0.85 + enter * 0.15 + out * 0.1)}) translateY(${f2((1 - enter) * 40 - out * 30)}px)`,
          filter: out > 0 ? `blur(${f2(out * 6)}px)` : undefined,
        }}
      >
        <strong>{days}</strong>
        <span>DAYS LEFT</span>
      </div>

      <div
        className="j-doc expiry-doc"
        style={{
          opacity,
          transform: `scale(${f2(0.88 + enter * 0.12)}) translateY(${f2(out * -26)}px)`,
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
