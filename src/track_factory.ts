import { TrackSpec } from "./track_catalog";
import { Pose, Vector } from "./vector";

type Track = {
  kind: "straight" | "unknown";
  endpoints: Pose[];
};

function trackLookup(catalog: TrackSpec[]) {
  return (trackId: string) => {
    const track = catalog.find((t) => t.id === trackId);

    if (!track) {
      return unknownTrack();
    }

    return {
      kind: "straight",
      endpoints: [
        { vector: Vector.of({ x: 0, y: 0 }), angle: 0 },
        { vector: Vector.of({ x: 100, y: 0 }), angle: 180 },
      ] as Pose[],
    } as Track;
  };
}

function unknownTrack() {
  return {
    kind: "unknown",
    endpoints: [] as Pose[],
  };
}

export { trackLookup as trackLookup };
