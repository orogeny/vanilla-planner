import { describe, expect, test } from "vitest";
import { Straight } from "./straight";
import { Vector } from "./vector";

describe("Straight", () => {
  test("should have two endpoints", () => {
    const connection = { vector: Vector.of({ x: 100, y: 100 }), angle: 30 };

    const straight = new Straight(connection, 200);

    expect(straight.endpoints).toHaveLength(2);
  });

  test("start should be in opposite direction", () => {
    const connection = { vector: Vector.of({ x: 100, y: 100 }), angle: 60 };

    const straight = new Straight(connection, 200);

    expect(normalizeAngle(straight.endpoints[0].angle)).toBe(240);
  });

  test("end should be in same direction", () => {
    const connection = { vector: Vector.of({ x: 100, y: 100 }), angle: 90 };

    const straight = new Straight(connection, 200);

    expect(normalizeAngle(straight.endpoints[1].angle)).toBe(90);
  });

  test("start should be offset one", () => {
    const connection = { vector: Vector.of({ x: 100, y: 100 }), angle: 0 };

    const straight = new Straight(connection, 200);

    expect(straight.endpoints[0].vector.XY).toBe("101 100");
  });

  test("end should be offset one", () => {
    const connection = { vector: Vector.of({ x: 100, y: 100 }), angle: 0 };

    const straight = new Straight(connection, 200);

    expect(straight.endpoints[1].vector.XY).toBe("301 100");
  });
});

function normalizeAngle(degrees: number) {
  return ((degrees % 360) + 360) % 360;
}
