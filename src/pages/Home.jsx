import RoadScene from '../components/RoadScene.jsx';
import DocumentChain from '../components/DocumentChain.jsx';
import CinematicJourney from '../components/cinematic/CinematicJourney.jsx';
import VehicleParade from '../components/VehicleParade.jsx';
import Benefits from '../components/Benefits.jsx';
import KeepMoving from '../components/KeepMoving.jsx';

// Landing page — one continuous cinematic journey:
// road hero → vehicle → documents → [expiry → reminder → notification →
// dashboard] as one pinned scene → vehicle parade → benefits → "Keep moving".
export default function Home() {
  return (
    <>
      <RoadScene />
      <DocumentChain />
      <CinematicJourney />
      <VehicleParade />
      <Benefits />
      <KeepMoving />
    </>
  );
}
