type Coords = { x: number; y: number };
type Pose = { point: Vector; angle: number };

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
    return `${this.x} ${this.y}`;
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
}

function isPose(obj: any): obj is Pose {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "angle" in obj &&
    "point" in obj &&
    isVector(obj.point)
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
