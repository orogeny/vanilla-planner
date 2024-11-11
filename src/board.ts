import { track_catalog } from "./track_catalog";

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
  const dropped = ev.dataTransfer!.getData("text/plain");

  const trackId = dropped?.split("#")?.[1] ?? "0";

  const track = track_catalog.find((t) => t.id === trackId);

  if (!track) {
    console.log(`board::unable to identify dropped item: "${dropped}"`);
    return;
  }

  console.log(`successfully dropped: ${track.catno} - ${track.label}`);
}

export { setup };
