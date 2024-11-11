function setup() {
  const items = document.querySelectorAll<HTMLDivElement>(
    ".item[draggable='true']"
  );

  for (const item of items) {
    item.ondragstart = handleDragStart;
  }
}

// Drag Event handlers

function handleDragStart(ev: DragEvent) {
  const item = ev.currentTarget as HTMLDivElement;

  const trackId = item.id;

  ev.dataTransfer!.setData("text/plain", trackId);
}

export { setup };
