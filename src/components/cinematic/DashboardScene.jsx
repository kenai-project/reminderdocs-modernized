import { range, f2 } from './sceneTimeline.js';
import { DASHBOARD_VEHICLES } from '../../data/story.js';

// ACT 5 · DASHBOARD (0.78–1.00)
// Rises into full view (opacity 0→1, scale 0.8→1, translateY 100px→0) once
// the notification has dissolved; the vehicle rows stagger in so the
// dashboard ends fully readable.
export default function DashboardScene({ p }) {
  const enter = range(p, 0.76, 0.86);
  const row1 = range(p, 0.84, 0.92);
  const row2 = range(p, 0.88, 0.96);

  return (
    <div
      className="cine-scene dash"
      style={{
        opacity: f2(enter),
        transform: `scale(${f2(0.8 + enter * 0.2)}) translateY(${f2((1 - enter) * 100)}px)`,
      }}
    >
      <div className="dash-frame">
        <div className="dash-frame-head">
          <span>MY VEHICLES</span>
          <span className="avatar" aria-hidden="true">NK</span>
        </div>
        {DASHBOARD_VEHICLES.map((vehicle, i) => {
          const t = i === 0 ? row1 : row2;
          return (
            <div
              key={vehicle.plate}
              className="dash-vehicle"
              style={{
                opacity: f2(0.15 + t * 0.85),
                transform: `translateY(${f2((1 - t) * 24)}px)`,
              }}
            >
              <div className="dv-head">
                <span className="dv-icon" aria-hidden="true">{vehicle.icon}</span>
                <b>{vehicle.plate}</b>
              </div>
              <div className="dv-docs">
                {vehicle.docs.map((doc) => (
                  <div className="dv-row" key={doc.name}>
                    <span>{doc.name}</span>
                    <em className={doc.status}>{doc.status === 'ok' ? '✓ Active' : '⚠ Due soon'}</em>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        <div className="dash-foot">3 upcoming renewals · 1 active reminder</div>
      </div>
    </div>
  );
}
