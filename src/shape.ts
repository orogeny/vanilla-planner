import { SLEEPER_LENGTH, track_catalog } from "./track_catalog";

type Shape = {
  id: string;
  render: (ctx: CanvasRenderingContext2D) => void;
  outline: string;
};

function shapeFactory(id: string, x: number, y: number) {
  const track = track_catalog.find((t) => t.id === id);

  if (track === undefined) {
    return { id: "", render: () => {}, outline: "" };
  }

  return {
    id,
    render: (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = track.colour;
      ctx.lineWidth = SLEEPER_LENGTH;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + track.length, y);
      ctx.stroke();
    },
    outline: `M ${x} ${y} L ${x + track.length} ${y}`,
  };
}

export { shapeFactory, type Shape };
