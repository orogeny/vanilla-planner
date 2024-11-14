import { describe, expect, test } from "vitest";
import { TrackSpec } from "../../data/track_catalog";
import { trackLookup } from "./track_factory";

describe("track types", () => {
  test("should return unknown track", () => {
    const trackFactory = trackLookup([]);

    const result = trackFactory("ZTT", { x: 0, y: 0 });

    expect(result.kind).toBe("unknown");
  });

  test("should return straight track", () => {
    const trackFactory = trackLookup(catalog);

    const track = trackFactory("1", { x: 0, y: 0 });

    expect(track.kind).toBe("straight");
  });
});

describe("track factory converts coords to pose", () => {
  test("should have 2 endpoints", () => {
    const trackFactory = trackLookup(catalog);

    const track = trackFactory("1", { x: 0, y: 0 });

    expect(track.endpoints).toHaveLength(2);
  });

  test("endpoints should be 166 horizontal units apart", () => {
    const trackFactory = trackLookup(catalog);

    const track = trackFactory("1", { x: 0, y: 0 });

    const x0 = track.endpoints[0].vector.x;
    const x1 = track.endpoints[1].vector.x;

    expect(x1 - x0).toBe(166);
  });

  test("endpoints should be 0 vertical units apart", () => {
    const trackFactory = trackLookup(catalog);

    const track = trackFactory("1", { x: 0, y: 0 });

    const y0 = track.endpoints[0].vector.y;
    const y1 = track.endpoints[1].vector.y;

    expect(y1 - y0).toBe(0);
  });
});

describe("UnknownTrack", () => {
  test("has zero endpoints", () => {
    const trackFactory = trackLookup([]);

    expect(trackFactory("ZTT", { x: 0, y: 0 }).endpoints).toHaveLength(0);
  });

  test("has empty outline", () => {
    const trackFactory = trackLookup([]);

    expect(trackFactory("ZTT", { x: 0, y: 0 }).outline).toBe("");
  });
});

describe("track base properties", () => {
  test("track captures colour value", () => {
    const trackFactory = trackLookup([
      {
        id: "2",
        kind: "straight",
        catno: "TT8039",
        label: "332mm",
        colour: "#fe00f6",
        length: 322,
      },
    ]);

    const track = trackFactory("2", { x: 0, y: 0 });

    expect(track.colour).toBe("#fe00f6");
  });
});

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
