// RoadSurface — cinematic perspective road plane for the hero.
// Layers (bottom → top): horizon glow → asphalt trapezoid (widens toward the
// viewer) → edge lines → 3D centre dashes flowing toward the camera → sheen.
// Pure CSS/JSX; the forward-motion illusion comes from the animated dashes.
export default function RoadSurface() {
  return (
    <div className="road-stage" aria-hidden="true">
      {/* vanishing-point glow where the road meets the city */}
      <div className="horizon-glow" />
      <div className="horizon-line" />

      {/* asphalt plane — starts narrow at the horizon, widens to the screen */}
      <div className="road-asphalt" />

      {/* solid edge lines following the road sides */}
      <div className="road-edge edge-left" />
      <div className="road-edge edge-right" />

      {/* centre lane markings — 3D-rotated strip, dashes flow toward viewer */}
      <div className="lane-strip" />

      {/* faint light sheen on the asphalt near the foreground */}
      <div className="road-sheen" />

      {/* haze where road dissolves into the distance */}
      <div className="road-haze" />
    </div>
  );
}
