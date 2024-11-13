import { Pose } from "./pose";

type Coords = { x: number; y: number };

class Vector implements Coords {
  x: number;
  y: number;

  static of({ x, y }: Coords) {
    return new Vector(x, y);
  }

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public get XY() {
    return `${this.x.toFixed(0)} ${this.y.toFixed(0)}`;
  }

  add({ x, y }: Coords) {
    return new Vector(this.x + x, this.y + y);
  }

  subtract({ x, y }: Coords) {
    return new Vector(this.x - x, this.y - y);
  }

  multiply(factor: number) {
    return new Vector(this.x * factor, this.y * factor);
  }

  encircles(coords: Coords, proximity = 6) {
    const dx = this.x - coords.x;
    const dy = this.y - coords.y;

    return dx * dx + dy * dy <= proximity * proximity;
  }
}

function isPose(obj: any): obj is Pose {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "angle" in obj &&
    "vector" in obj &&
    isVector(obj.vector)
  );
}

function isVector(obj: any): obj is Vector {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "XY" in obj &&
    "x" in obj &&
    "y" in obj
  );
}

export { Vector, isPose, isVector, type Coords, type Pose };
