import { game, canvas } from "./init"
import { finishMove } from "./finish-move"
import { autoMove } from "./auto-move";

export function onMouseup(event) {
  canvas.removeEventListener('mousemove', game.movingCellDraw);
  canvas.removeEventListener('mouseup', onMouseup);
  if (Math.abs(game.mouseDownAt.x - event.pageX) < 3 && Math.abs(game.mouseDownAt.y - event.pageY) < 3) {
    autoMove();
  } else {
    game.finishMove();
  }
}