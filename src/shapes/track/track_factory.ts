import { Straight } from "./straight";
import { Track } from "./track";
import { TrackSpec } from "../../data/track_catalog";
import { Coords, isPose, Pose, Vector } from "../../lib/vector";

function trackLookup(catalog: TrackSpec[]) {
  return (trackId: string, coords: Coords | Pose) => {
    const track = catalog.find((t) => t.id === trackId);

    if (!track) {
      return new UnknownTrack();
    }

    const connection = isPose(coords)
      ? coords
      : { vector: Vector.of(coords), angle: 0 };

    if (track.kind === "straight") {
      return new Straight(connection, track.length);
    }

    return new UnknownTrack();
  };
}

class UnknownTrack extends Track {
  constructor() {
    super("unknown", []);
  }
}

export { trackLookup };
