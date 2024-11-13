import { describe, expect, test } from "vitest";
import { TrackSpec } from "./track_catalog";
import { trackLookup } from "./track_factory";
import { Vector } from "./vector";

describe("trackFactory - types", () => {
  test("should return unknown track", () => {
    const trackFactory = trackLookup([]);

    const result = trackFactory("ZTT", { x: 0, y: 0 });

    expect(result.kind).toBe("unknown");
  });
});

describe("trackFactory - unknown", () => {
  test("unknow track has zero endpoints", () => {
    const trackFactory = trackLookup([]);

    expect(trackFactory("ZTT", { x: 0, y: 0 }).endpoints).toHaveLength(0);
  });
});

describe("trackFactory - track", () => {
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

  test("should accept coords", () => {
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

    expect(track.endpoints[0].angle).toBe(-180);
    expect(track.endpoints[0].vector.XY).toBe("1 0");

    expect(track.endpoints[1].angle).toBe(0);
    expect(track.endpoints[1].vector.XY).toBe("167 0");
  });

  test("should accept pose", () => {
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

    const verticalPose = { vector: Vector.of({ x: 0, y: 0 }), angle: 90 };

    const track = trackFactory("1", verticalPose);

    expect(track.endpoints[0].angle).toBe(-90);
    expect(track.endpoints[0].vector.XY).toBe("0 1");

    expect(track.endpoints[1].angle).toBe(90);
    expect(track.endpoints[1].vector.XY).toBe("0 167");
  });
});
