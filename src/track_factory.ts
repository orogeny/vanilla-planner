import { TrackSpec } from "./track_catalog";
import { Pose } from "./vector";

type Track = {
  kind: "straight" | "unknown";
  endpoints: Pose[];
};

function trackLookup(catalog: TrackSpec[]) {
  return (trackId: string) => {
    const track = catalog.find((t) => t.id === trackId);

    if (!track) {
      console.log(`No track with id "${trackId}" was found`);
      return unknownTrack();
    }

    return { kind: "straight", endpoints: [] as Pose[] } as Track;
  };
}

function unknownTrack() {
  return {
    kind: "unknown",
    endpoints: [] as Pose[],
  };
}

export { trackLookup as trackLookup };
