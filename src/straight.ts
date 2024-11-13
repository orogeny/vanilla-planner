import { Track } from "./track";
import { Pose } from "./vector";

class Straight extends Track {
  constructor(connection: Pose, length: number) {
    const start: Pose = {
      vector: connection.vector,
      angle: connection.angle - 180,
    };
    const end: Pose = {
      vector: connection.vector.add({ x: length, y: 0 }),
      angle: connection.angle,
    };

    super("straight", [start, end]);
  }
}

export { Straight };
