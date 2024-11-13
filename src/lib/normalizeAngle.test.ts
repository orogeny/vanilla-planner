import { describe, expect, test } from "vitest";
import { normalizeAngle } from "./utils";

describe("normalize angles to range 0 and 360", () => {
  test.each([
    [0, 0],
    [30, 30],
    [60, 60],
    [90, 90],
    [120, 120],
    [150, 150],
    [180, 180],
    [210, 210],
    [240, 240],
    [270, 270],
    [300, 300],
    [330, 330],
    [360, 0],
    [-0, 0],
    [730, 10],
    [-30, 330],
    [-60, 300],
    [-90, 270],
    [-120, 240],
    [-150, 210],
    [-180, 180],
    [-210, 150],
    [-240, 120],
    [-270, 90],
    [-300, 60],
    [-330, 30],
    [-360, 0],
    [-730, 350],
  ])("angle %i should be normalized to %i", (given, normalized) => {
    expect(normalizeAngle(given)).toBe(normalized);
  });
});
