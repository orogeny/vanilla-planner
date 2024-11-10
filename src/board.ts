function setup() {
  const canvas = document.querySelector<HTMLCanvasElement>("canvas.board");

  if (!canvas) {
    console.log("canvas not there yet");
    return;
  }

  const { clientWidth, clientHeight } = canvas.parentElement!;

  canvas.style.width = `${clientWidth}px`;
  canvas.style.height = `${clientHeight}px`;

  canvas.width = clientWidth;
  canvas.height = clientHeight;
}

export { setup };
