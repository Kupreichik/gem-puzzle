import { game, canvas } from "./init"
import { finishMove } from "./finish-move"
import { autoMove } from "./auto-move";

export function onTouchend(event) {
  canvas.removeEventListener('touchmove', function(event) { game.movingCellDraw(event.touches[0]); });
  canvas.removeEventListener('touchend', onTouchend);
  if (Math.abs(game.mouseDownAt.x - event.changedTouches[0].pageX) < 2 && 
      Math.abs(game.mouseDownAt.y - event.changedTouches[0].pageY) < 2) {
    autoMove();
  } else {
    game.finishMove();
  }
}