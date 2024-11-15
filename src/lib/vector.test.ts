import { describe, expect, test } from "vitest";
import { isPose, isVector, Vector } from "./vector";

describe("Coordinates", () => {
  test("should create vector from coordinates", () => {
    const vector = Vector.of({ x: 1, y: 2 });

    expect(vector.x).toBe(1);
    expect(vector.y).toBe(2);
  });

  test("should add two vectors", () => {
    const sum = Vector.of({ x: 3, y: 0 }).add({ x: 0, y: -4 });

    expect(sum.x).toBe(3);
    expect(sum.y).toBe(-4);
  });

  test("should subtract one vector from another", () => {
    const result = Vector.of({ x: 5, y: 4 }).subtract({ x: -2, y: 10 });

    expect(result.x).toBe(7);
    expect(result.y).toBe(-6);
  });

  test("should extend a vector", () => {
    const vector = Vector.of({ x: 3, y: 4 }).multiply(10);

    expect(vector.x).toBe(30);
    expect(vector.y).toBe(40);
  });

  test("should produce SVG coords", () => {
    expect(Vector.of({ x: -50, y: 100 }).XY).toBe("-50 100");
  });
});

describe("Pose guard", () => {
  test("should be a pose", () => {
    const pose = { vector: Vector.of({ x: 10, y: 10 }), angle: 90 } as unknown;

    expect(isPose(pose)).toBeTruthy();
  });

  test("should not be a pose", () => {
    const lookalike = { vector: { x: 5, y: 5 }, angle: 20 };

    expect(isPose(lookalike)).toBeFalsy();
  });
});

describe("Vector guard", () => {
  test("should be vector", () => {
    const vector = Vector.of({ x: 0, y: 0 });

    expect(isVector(vector)).toBeTruthy();
  });

  test("should not be vector", () => {
    const location = { x: 10, y: 10 };

    expect(isVector(location)).toBeFalsy();
  });

  describe("encircles", () => {
    test("should encircle point", () => {
      expect(
        Vector.of({ x: 0, y: 0 }).encircles({ x: 10, y: 0 }, 10)
      ).toBeTruthy();
    });

    test("should not encircle point", () => {
      expect(
        Vector.of({ x: 0, y: 0 }).encircles({ x: 0, y: 11 }, 10)
      ).toBeFalsy();
    });
  });
});
