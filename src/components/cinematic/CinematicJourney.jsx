import { useRef } from 'react';
import useScrollProgress from '../../hooks/useScrollProgress.js';
import Reveal from '../Reveal.jsx';
import SectionHeading from '../SectionHeading.jsx';
import MovingCar from './MovingCar.jsx';
import DocumentScene from './DocumentScene.jsx';
import ExpiryScene from './ExpiryScene.jsx';
import ReminderScene from './ReminderScene.jsx';
import NotificationScene from './NotificationScene.jsx';
import DashboardScene from './DashboardScene.jsx';
import { range, f2 } from './sceneTimeline.js';
import '../../styles/cinematic.css';

const STAGES = ['Document', 'Expiry', 'Reminder', 'Notification', 'Dashboard'];

// CinematicJourney — the ONE scroll controller for the renewal story.
// Responsibilities (only these):
//   1. measure normalized scroll progress p (0→1) across the 500vh section
//   2. render ONE sticky viewport containing every act, stacked
//   3. pass p to each scene component + drive the stage indicator
// Each act owns its own opacity/translateY/scale/blur maths (sceneTimeline).
export default function CinematicJourney() {
  const ref = useRef(null);
  const p = useScrollProgress(ref);

  // The car bridges the hero into the story: it drives the bottom of the
  // viewport through the Document act, then exits as Expiry takes over.
  const carOut = range(p, 0.22, 0.3);

  const active = p < 0.2 ? 0 : p < 0.4 ? 1 : p < 0.6 ? 2 : p < 0.78 ? 3 : 4;

  return (
    <section className="cine" ref={ref}>
      <div className="scene-glow" aria-hidden="true" />

      {/* the single sticky viewport — every act lives in here */}
      <div className="cine-pin">
        <div className="scene-head small">
          <Reveal>
            <SectionHeading eyebrow="From document to reminder" title="Watch a renewal happen" />
          </Reveal>
        </div>

        <div className="cine-stage">
          <div className="cine-car" style={{ opacity: f2(1 - carOut), transform: `translateY(${f2(carOut * 24)}px)` }} aria-hidden="true">
            <MovingCar />
          </div>

          <DocumentScene p={p} />
          <ExpiryScene p={p} />
          <ReminderScene p={p} />
          <NotificationScene p={p} />
          <DashboardScene p={p} />
        </div>

        <div className="story-steps" aria-hidden="true">
          {STAGES.map((label, i) => (
            <span key={label} className={i === active ? 'on' : ''}>{label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
