type Shape = {
  render: (ctx: CanvasRenderingContext2D) => void;
  outline: string;
};

function shapeFactory(x: number, y: number) {
  return {
    render: (ctx: CanvasRenderingContext2D) => {
      ctx.strokeStyle = "orange";
      ctx.lineWidth = 12;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + 100, y);
      ctx.lineTo(x + 100, y + 100);
      ctx.stroke();
    },
    outline: `M ${x} ${y} L ${x + 100} ${y + 100}`,
  };
}

export { type Shape, shapeFactory };
