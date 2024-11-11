import { describe, expect, test } from "vitest";
import { Vector } from "./vector";

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
    const point = Vector.of({ x: 3, y: 4 }).multiply(10);

    expect(point.x).toBe(30);
    expect(point.y).toBe(40);
  });

  test("should produce SVG coords", () => {
    expect(Vector.of({ x: -50, y: 100 }).XY).toBe("-50 100");
  });
});
