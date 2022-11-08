import { game, canvas } from "./init";
import { finishMove } from "./finish-move";
import { autoMove } from "./auto-move";

export function onTouchend(event) {
  canvas.removeEventListener('touchmove', game.movingCellDraw);
  canvas.removeEventListener('touchend', onTouchend);
  if (Math.abs(game.mouseDownAt.x - event.changedTouches[0].pageX) < 3 && 
      Math.abs(game.mouseDownAt.y - event.changedTouches[0].pageY) < 3) {
    autoMove();
  } else {
    game.finishMove();
  }
}