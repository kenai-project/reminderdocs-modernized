// Shared timing helpers for the cinematic scroll timeline.
// Every scene derives its opacity/transform/filter from the SAME normalized
// progress `p` (0→1) computed once by CinematicJourney.

export const clamp01 = (v) => Math.min(1, Math.max(0, v));

// Normalized 0→1 ramp between scroll points a and b.
export const range = (p, a, b) => clamp01((p - a) / (b - a));

// Linear interpolation.
export const lerp = (a, b, t) => a + (b - a) * t;

// Round to 2 decimals so inline styles stay short.
export const f2 = (v) => Number(v.toFixed(2));

// Scene act boundaries on the master timeline (must sum to the whole story):
// 0.00–0.20 Document · 0.20–0.40 Expiry · 0.40–0.60 Reminder ·
// 0.60–0.78 Notification · 0.78–1.00 Dashboard
export const ACTS = {
  document: [0.0, 0.2],
  expiry: [0.2, 0.4],
  reminder: [0.4, 0.6],
  notification: [0.6, 0.78],
  dashboard: [0.78, 1.0],
};
