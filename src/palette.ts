function setup() {
  const items = document.querySelectorAll<HTMLDivElement>(
    ".item[draggable='true']"
  );

  for (const item of items) {
    item.ondragstart = onDragStart;
  }
}

// Drag Event handlers

function onDragStart(ev: DragEvent) {
  const trackId = ev.currentTarget.id;

  ev.dataTransfer.setData("text/plain", trackId);
}

export { setup };
