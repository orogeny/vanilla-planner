import { TrackSpec } from "./track_catalog";

type Track = {
  kind: "straight" | "unknown";
};

function trackLookup(catalog: TrackSpec[]) {
  return (trackId: string) => {
    const track = catalog.find((t) => t.id === trackId);

    if (!track) {
      console.log(`No track with id "${trackId}" was found`);
      return track;
    }

    return { kind: "straight" } as Track;
  };
}

export { trackLookup as trackLookup };
