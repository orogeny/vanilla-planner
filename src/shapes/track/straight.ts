import { Track } from "./track";
import { Pose } from "../../lib/pose";
import { Vector } from "../../lib/vector";

class Straight extends Track {
  constructor(connection: Pose, length: number) {
    const unit = Vector.of({
      x: Math.cos((connection.angle * Math.PI) / 180),
      y: Math.sin((connection.angle * Math.PI) / 180),
    });

    const start = {
      vector: connection.vector.add(unit),
      angle: connection.angle - 180,
    };

    const end = {
      vector: start.vector.add(unit.multiply(length)),
      angle: connection.angle,
    };

    super("straight", [start, end]);
  }
}

export { Straight };
