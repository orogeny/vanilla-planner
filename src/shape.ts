import { SLEEPER_LENGTH, track_catalog } from "./track_catalog";
import { Coords, isPose, Pose, Vector } from "./vector";

type Shape = {
  id: string;
  connectors: Pose[];
  render: (ctx: CanvasRenderingContext2D) => void;
  outline: string;
};

function shapeFactory(id: string, connection: Coords | Pose) {
  const track = track_catalog.find((t) => t.id === id);

  if (track === undefined) {
    return { id: "", connectors: [], render: () => {}, outline: "" };
  }

  const { vector: start, angle } = isPose(connection)
    ? connection
    : {
        vector: Vector.of(connection).subtract({
          x: track.length / 2 - 1,
          y: 0,
        }),
        angle: 0,
      };

  const unit = Vector.of({
    x: Math.cos((angle * Math.PI) / 180),
    y: Math.sin((angle * Math.PI) / 180),
  });

  const ep1: Pose = { vector: start.add(unit), angle: angle - 180 };

  const ep2: Pose = {
    vector: start.add(unit.multiply(track.length)),
    angle,
  };

  const ou = {
    x: (-unit.y * SLEEPER_LENGTH) / 2,
    y: (unit.x * SLEEPER_LENGTH) / 2,
  };

  const topLeft = ep1.vector.subtract(ou);
  const bottomLeft = ep1.vector.add(ou);
  const topRight = ep2.vector.subtract(ou);
  const bottomRight = ep2.vector.add(ou);

  const outlineInstructions = [
    `M ${topLeft.XY}`,
    `L ${topRight.XY}`,
    `L ${bottomRight.XY}`,
    `L ${bottomLeft.XY}`,
    "Z",
  ];

  return {
    id,
    connectors: [ep1, ep2],
    render: (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = track.colour;
      ctx.lineWidth = SLEEPER_LENGTH;
      ctx.beginPath();
      ctx.moveTo(ep1.vector.x, ep1.vector.y);
      ctx.lineTo(ep2.vector.x, ep2.vector.y);
      ctx.stroke();
    },
    outline: outlineInstructions.join(" "),
  };
}

export { shapeFactory, type Shape };
