import { SLEEPER_LENGTH } from "../../data/track_catalog";
import { Pose } from "../../lib/pose";
import { Vector } from "../../lib/vector";
import { Track } from "./track_lookup";

class Straight implements Track {
  readonly kind = "straight";
  readonly colour: string;
  readonly outline: string;
  readonly endpoints: Pose[];

  constructor(connection: Pose, colour: string, length: number) {
    this.colour = colour;

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

    const ou = {
      x: (-unit.y * SLEEPER_LENGTH) / 2,
      y: (unit.x * SLEEPER_LENGTH) / 2,
    };

    this.outline = [
      `M ${start.vector.subtract(ou).XY}`,
      `L ${end.vector.subtract(ou).XY}`,
      `L ${end.vector.add(ou).XY}`,
      `L ${start.vector.add(ou).XY}`,
      "Z",
    ].join(" ");

    this.endpoints = [start, end];
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = this.colour;
    ctx.lineWidth = SLEEPER_LENGTH;

    ctx.beginPath();

    ctx.moveTo(this.endpoints[0].vector.x, this.endpoints[0].vector.y);
    ctx.lineTo(this.endpoints[1].vector.x, this.endpoints[1].vector.y);

    ctx.stroke();
  }
}

export { Straight };
