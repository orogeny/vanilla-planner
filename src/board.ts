import { track_catalog } from "./data/track_catalog";
import { Pose } from "./lib/pose";
import { Coords } from "./lib/vector";
import { Track } from "./shapes/track/track";
import { trackLookup } from "./shapes/track/track_factory";

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

let trackFactory: (id: string, coords: Coords | Pose) => Track;
let laidTrack: Track[] = [];

function setup() {
  trackFactory = trackLookup(track_catalog);

  canvas = document.querySelector<HTMLCanvasElement>("canvas.board")!;
  ctx = canvas.getContext("2d")!;

  const containerRect = canvas.parentElement!.getBoundingClientRect();

  canvas.style.width = `${containerRect.width}px`;
  canvas.style.height = `${containerRect.height}px`;

  canvas.width = containerRect.width;
  canvas.height = containerRect.height;

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

  console.log(
    `dropped "${dropped}" @ (${ev.offsetX}, ${ev.offsetY}) onto canvas`
  );

  const [kind, id] = dropped.split("#");

  if (kind === "track") {
    const track = trackFactory(id, { x: ev.offsetX, y: ev.offsetY });

    if (track.kind !== "unknown") {
      laidTrack.push(track);
    }

    const path = new Path2D(track.outline);
    ctx.stroke(path);
  }
}

export { setup };
