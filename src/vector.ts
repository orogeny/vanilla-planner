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

export { Vector, type Coords };
