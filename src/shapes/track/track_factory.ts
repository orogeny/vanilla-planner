import { TrackSpec } from "../../data/track_catalog";
import { Coords, isPose, Pose, Vector } from "../../lib/vector";
import { Straight } from "./straight";
import { Track } from "./track";

function trackLookup(catalog: TrackSpec[]) {
  return (trackId: string, coords: Coords | Pose) => {
    const track = catalog.find((t) => t.id === trackId);

    if (!track) {
      return unknownTrack();
    }

    const connection = isPose(coords)
      ? coords
      : { vector: Vector.of(coords), angle: 0 };

    if (track.kind === "straight") {
      return new Straight(connection, track.colour, track.length);
    }

    return unknownTrack();
  };
}

function unknownTrack() {
  return {
    kind: "unknown",
    colour: "",
    outline: "",
    endpoints: [],
    render: () => {},
  } as Track;
}

export { trackLookup };
