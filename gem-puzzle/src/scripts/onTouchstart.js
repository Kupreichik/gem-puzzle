import { game, canvas, context } from "./init";
import { setMovingCell } from "./set-moving-cell";
import { movingCellDraw } from "./moving-cell-draw";
import { gameDraw } from "./game-draw";
import { canMove } from "./can-move";
import { onTouchend } from "./onTouchend";

export function onTouchstart(event) {
  if(!game.timeRuns) { return false };
  if(game.isEnable) {
    
    let x = (event.touches[0].pageX - canvas.offsetLeft) / game.cellSize | 0;
    let y = (event.touches[0].pageY - canvas.offsetTop) / game.cellSize | 0;

    if (game.canMove(x, y)) {
      game.isEnable = false;
      game.setMovingCell(event.touches[0]);
      canvas.addEventListener('touchmove', game.movingCellDraw);
      canvas.addEventListener('touchend', onTouchend);
    };
    event.preventDefault();
  } else {
    return false;
  }
}