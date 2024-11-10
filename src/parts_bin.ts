function setup() {
  const partsBin = document.querySelector<HTMLDivElement>(".parts-bin");

  if (partsBin) {
    partsBin.ondragover = handleDragOver;
    partsBin.ondrop = handleDrop;
  }
}

// Drag/Drop Event handlers

function handleDragOver(ev: DragEvent) {
  ev.preventDefault();

  ev.dataTransfer!.dropEffect = "copy";
}

function handleDrop(ev: DragEvent) {
  const trackId = ev.dataTransfer!.getData("text/plain") ?? "unknown";

  console.log(`dropped ${trackId} in parts bin`);
}

export { setup };
