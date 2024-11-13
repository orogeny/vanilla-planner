import { describe, expect, test } from "vitest";
import { TrackSpec } from "./track_catalog";
import { trackLookup } from "./track_factory";

describe("trackFactory", () => {
  test("should return unknown track", () => {
    const trackFactory = trackLookup([]);

    const result = trackFactory("ZTT", { x: 0, y: 0 });

    expect(result.kind).toBe("unknown");
  });

  test("unknow track has zero endpoints", () => {
    const trackFactory = trackLookup([]);

    expect(trackFactory("ZTT", { x: 0, y: 0 }).endpoints).toHaveLength(0);
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

    const track = trackFactory("1", { x: 0, y: 0 });

    expect(track).not.toBeUndefined();
    expect(track.kind).toBe("straight");
  });

  test("should return a straight", () => {
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

    const track = trackFactory("1", { x: 0, y: 0 });

    expect(track.kind).toBe("straight");
    expect(track.endpoints).toHaveLength(2);
  });
});
