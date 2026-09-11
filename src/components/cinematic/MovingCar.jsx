import CarArt from '../CarArt.jsx';

// MovingCar — the foreground subject of the hero journey.
// Composition: lane-drift wrapper (slow horizontal settle) → suspension
// wrapper (2px micro-movement only, never a bounce) → speed streaks behind,
// the SVG car, and a contact shadow pinned to the wheels so the car sits
// ON the road instead of floating above it.
export default function MovingCar() {
  return (
    <div className="moving-car">
      <div className="car-susp">
        {/* motion streaks trailing the car */}
        <span className="speed-streak s1" aria-hidden="true" />
        <span className="speed-streak s2" aria-hidden="true" />
        <span className="speed-streak s3" aria-hidden="true" />

        <CarArt type="car" className="car-art" />

        {/* ground-contact shadow under the wheels */}
        <div className="car-contact" aria-hidden="true" />
      </div>
    </div>
  );
}
