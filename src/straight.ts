import { Pose } from "./vector";

class Straight {
  endpoints: Pose[];

  constructor(connection: Pose, length: number) {
    const start = { vector: connection.vector, angle: connection.angle - 180 };
    const end = {
      vector: connection.vector.add({ x: length, y: 0 }),
      angle: connection.angle,
    };

    this.endpoints = [start, end];
  }
}

export { Straight };
