import { useRef } from 'react';
import useScrollProgress from '../hooks/useScrollProgress.js';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';
import { DASHBOARD_VEHICLES } from '../data/story.js';

const clamp01 = (v) => Math.min(1, Math.max(0, v));
const range = (p, a, b) => clamp01((p - a) / (b - a));

// S3 — ONE continuous pinned scene covering the whole renewal story:
// document grows toward you → "18 DAYS LEFT" → reminder scheduled →
// phone slides in with the notification → phone exits → dashboard rises.
// Every scroll range overlaps the next, so something is always moving.
export default function JourneyScene() {
  const ref = useRef(null);
  const p = useScrollProgress(ref);

  // Document: partially visible the moment the scene enters, drives toward
  // the user, then fades as the countdown takes over
  const docIn = 0.45 + 0.55 * range(p, 0, 0.1);
  const docDrive = range(p, 0.16, 0.3);
  const docOut = range(p, 0.26, 0.34);
  // Countdown: ticks 30 → 18, then hands off to the reminder chip
  const countIn = range(p, 0.22, 0.34);
  const countOut = range(p, 0.4, 0.46);
  const days = Math.round(30 - 12 * range(p, 0.22, 0.38));
  // Reminder scheduled
  const schedIn = range(p, 0.44, 0.54);
  const schedOut = range(p, 0.6, 0.66);
  // Phone: slides in, notification pops, then exits toward the dashboard
  const phoneIn = range(p, 0.56, 0.68);
  const noteIn = range(p, 0.68, 0.76);
  const phoneOut = range(p, 0.84, 0.9);
  // Dashboard: rises as the phone leaves
  const dashIn = range(p, 0.84, 0.96);
  const row1 = range(p, 0.88, 0.95);
  const row2 = range(p, 0.92, 0.99);

  const stages = ['Document', 'Expiry', 'Reminder', 'Notification', 'Dashboard'];
  const active = p < 0.18 ? 0 : p < 0.42 ? 1 : p < 0.62 ? 2 : p < 0.84 ? 3 : 4;

  return (
    <section className="journey-story" ref={ref}>
      <div className="scene-glow" aria-hidden="true" />
      <div className="scene-pin">
        <div className="scene-head small">
          <Reveal>
            <SectionHeading eyebrow="From document to reminder" title="Watch a renewal happen" />
          </Reveal>
        </div>

        <div className="journey-stage">
          <div
            className="j-doc"
            style={{
              opacity: docIn * (1 - docOut),
              transform: `scale(${(1 + docDrive * 0.45 - docOut * 0.1).toFixed(3)}) translateY(${(-docDrive * 16).toFixed(1)}px)`,
            }}
          >
            <span className="doc-code big" aria-hidden="true">INS</span>
            <div>
              <h3>Insurance</h3>
              <p>Expires: 18 Oct 2026</p>
            </div>
          </div>

          <div
            className="j-count"
            style={{
              opacity: countIn * (1 - countOut),
              transform: `translateY(${((1 - countIn) * 40 - countOut * 30).toFixed(1)}px)`,
            }}
          >
            <strong>{days}</strong>
            <span>DAYS LEFT</span>
          </div>

          <div
            className="j-sched"
            style={{
              opacity: schedIn * (1 - schedOut),
              transform: `translateY(${((1 - schedIn) * 34 - schedOut * 26).toFixed(1)}px) scale(${(0.96 + schedIn * 0.04).toFixed(3)})`,
            }}
          >
            <b className="check">✓</b> Reminder scheduled — WhatsApp + Email
          </div>

          <div
            className="j-phone"
            style={{
              opacity: phoneIn * (1 - phoneOut),
              transform: `translateX(${((1 - phoneIn) * 150 - phoneOut * 180).toFixed(1)}px) scale(${(0.94 + phoneIn * 0.06).toFixed(3)})`,
            }}
          >
            <div className="phone">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="phone-app">
                  <span className="logo" aria-hidden="true">R</span> ReminderDocs
                </div>
                <div
                  className="phone-notif"
                  style={{
                    opacity: noteIn,
                    transform: `translateX(${((1 - noteIn) * 130).toFixed(1)}%)`,
                  }}
                >
                  <span className="notif-bell" aria-hidden="true">🔔</span>
                  <div>
                    <b>Insurance renewal</b>
                    <small>Your insurance expires in 18 days.</small>
                    <span className="notif-cta">Renew now →</span>
                  </div>
                </div>
                <div className="phone-dots" aria-hidden="true"><i /><i /><i /></div>
              </div>
            </div>
          </div>

          <div
            className="j-dash"
            style={{
              opacity: dashIn,
              transform: `scale(${(0.9 + dashIn * 0.1).toFixed(3)}) translateY(${((1 - dashIn) * 44).toFixed(1)}px)`,
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
                      opacity: 0.15 + t * 0.85,
                      transform: `translateY(${((1 - t) * 24).toFixed(1)}px)`,
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
        </div>

        <div className="story-steps" aria-hidden="true">
          {stages.map((label, i) => (
            <span key={label} className={i === active ? 'on' : ''}>{label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

