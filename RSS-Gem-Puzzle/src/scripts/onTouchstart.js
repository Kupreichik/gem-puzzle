import { game, canvas, context } from "./init"
import { setMovingCell } from "./set-moving-cell"
import { movingCellDraw } from "./moving-cell-draw"
import { gameDraw } from "./game-draw"
import { canMove } from "./can-move"
import { onTouchend } from "./onTouchend"

export function onTouchstart(event) {
  let x = (event.touches[0].pageX - canvas.offsetLeft) / game.cellSize | 0;
  let y = (event.touches[0].pageY - canvas.offsetTop) / game.cellSize | 0;

  if (game.canMove(x, y)) {
    game.setMovingCell(event.touches[0]);
    canvas.addEventListener('touchmove', function(event) { game.movingCellDraw(event.touches[0]); });
    canvas.addEventListener('touchend', onTouchend);
  };
  event.preventDefault();
}