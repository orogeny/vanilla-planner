import { track_catalog } from "./data/track_catalog";
import { Pose } from "./lib/pose";
import { Coords } from "./lib/vector";
import { Track, trackLookup } from "./shapes/track/track_factory";

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;

let trackFactory: (id: string, coords: Coords | Pose) => Track;
let laidTrack: Track[] = [];

let requestAnimation = false;

function setup() {
  addOnOffToggle();

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

function addOnOffToggle() {
  const sidebar = document.querySelector<HTMLDivElement>(".sidebar")!;

  const button = document.createElement("button");
  button.style.padding = "8px 0";
  button.innerText = "Start";

  sidebar.appendChild(button);

  button.onclick = () => {
    if (requestAnimation) {
      requestAnimation = false;
      button.innerText = "Start";
    } else {
      requestAnimation = true;
      button.innerText = "Stop";
      requestAnimationFrame(animate);
    }
  };
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
  }
}

function animate(time: number) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const track of laidTrack) {
    ctx.save();

    track.render(ctx);

    ctx.restore();
  }

  if (requestAnimation) {
    requestAnimationFrame(animate);
  }
}

export { setup };
