import * as board from "./board";
import * as palette from "./palette";
import * as partsBin from "./parts_bin";

window.onload = init;

function init() {
  board.setup();
  palette.setup();
  partsBin.setup();
}
