import { describe, expect, test } from "vitest";
import { TrackSpec } from "./track_catalog";
import { trackLookup } from "./track_factory";

describe("trackFactory", () => {
  test("should not return track", () => {
    const catalog: TrackSpec[] = [];

    const trackFactory = trackLookup(catalog);

    const result = trackFactory("ZTT");

    expect(result).toBeUndefined();
  });

  test("should return track", () => {
    const catalog: TrackSpec[] = [
      {
        id: "1",
        kind: "straight",
        catno: "TT8002",
        label: "166mm",
        colour: "#0bff01",
        length: 166,
      },
    ];

    const trackFactory = trackLookup(catalog);

    const track = trackFactory("1");

    expect(track).not.toBeUndefined();
    expect(track?.kind).toBe("straight");
  });
});
