import { describe, expect, test } from "vitest";
import { Straight } from "./straight";
import { Vector } from "./vector";

describe("Straight", () => {
  test("horizontal endpoints are good", () => {
    const connection = { vector: Vector.of({ x: 100, y: 100 }), angle: 0 };

    const straight = new Straight(connection, 200);

    expect(straight.endpoints).toHaveLength(2);
    expect(straight.endpoints[0].angle).toBe(-180);
    expect(straight.endpoints[0].vector.XY).toBe("100 100");

    expect(straight.endpoints[1].angle).toBe(0);
    expect(straight.endpoints[1].vector.XY).toBe("300 100");
  });
});
