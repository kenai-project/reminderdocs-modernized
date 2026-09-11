import { range, f2 } from './sceneTimeline.js';
import PhoneMock from './PhoneMock.jsx';

// ACT 4 · NOTIFICATION (0.60–0.78)
// The notification becomes the single focus: an enlarged, sharp copy sits in
// front while the phone itself recedes into a dimmed, blurred background —
// so no earlier scene remains strongly visible underneath.
export default function NotificationScene({ p }) {
  const enter = range(p, 0.58, 0.64);
  const out = range(p, 0.74, 0.8);

  return (
    <div className="cine-scene notif">
      {/* the phone drops back — background, not a competing scene */}
      <div
        className="notif-phone-bg"
        style={{
          opacity: f2(enter * (1 - out) * 0.32),
          transform: `scale(${f2(0.92 + enter * 0.02 - out * 0.06)}) translateX(${f2(-out * 70)}px)`,
          filter: `blur(${f2(2 + out * 4)}px)`,
        }}
      >
        <PhoneMock noteT={1} />
      </div>

      {/* the notification, enlarged and in focus */}
      <div
        className="notif-focus"
        style={{
          opacity: f2(enter * (1 - out)),
          transform: `scale(${f2(0.9 + enter * 0.1 + out * 0.05)}) translateY(${f2((1 - enter) * 34 - out * 26)}px)`,
          filter: out > 0 ? `blur(${f2(out * 4)}px)` : undefined,
        }}
      >
        <span className="notif-bell" aria-hidden="true">🔔</span>
        <div>
          <b>Insurance renewal</b>
          <small>Your insurance expires in 18 days.</small>
          <span className="notif-cta">Renew now →</span>
        </div>
      </div>
    </div>
  );
}
