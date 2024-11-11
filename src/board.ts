import { shapeFactory } from "./shape";

let canvas: HTMLCanvasElement;

function setup() {
  canvas = document.querySelector<HTMLCanvasElement>("canvas.board")!;

  const { clientWidth, clientHeight } = canvas.parentElement!;

  canvas.style.width = `${clientWidth}px`;
  canvas.style.height = `${clientHeight}px`;

  canvas.width = clientWidth;
  canvas.height = clientHeight;

  canvas.ondragover = handleDragOver;
  canvas.ondrop = handleDrop;
}

// Drag n Drop Event handlers

function handleDragOver(ev: DragEvent) {
  ev.preventDefault();

  ev.dataTransfer!.dropEffect = "copy";
}

function handleDrop(ev: DragEvent) {
  let dropped = ev.dataTransfer!.getData("text/plain") ?? "unknown#0";

  console.log(`dropped "${dropped}" onto canvas`);

  const [_, id] = dropped.split("#");

  const shape = shapeFactory(id, ev.offsetX, ev.offsetY);

  const ctx = canvas.getContext("2d")!;

  shape.render(ctx);
}

export { setup };
