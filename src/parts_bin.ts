import { track_catalog } from "./track_catalog";

let partsBin: HTMLDivElement;

function setup() {
  partsBin = document.querySelector<HTMLDivElement>(".parts-bin")!;

  partsBin.ondragover = handleDragOver;
  partsBin.ondrop = handleDrop;
}

// Drag n Drop Event handlers

function handleDragOver(ev: DragEvent) {
  ev.preventDefault();

  ev.dataTransfer!.dropEffect = "copy";
}

function handleDrop(ev: DragEvent) {
  const dropped = ev.dataTransfer!.getData("text/plain") ?? "unknown#0";

  const trackId = dropped.split("#")?.[1] ?? "0";

  const track = track_catalog.find((t) => t.id === trackId);

  if (!track) {
    console.log("unable to identify track");
    return;
  }

  const item = document.createElement("p");
  item.classList.add("part");
  item.innerText = track.catno;
  item.style.cssText = `background-color: ${track.colour};`;

  partsBin.appendChild(item);
}

export { setup };
