import { Game } from "./game-class"
import { game, canvas, context } from "./init"
import { setMovingCell } from "./set-moving-cell"
import { movingCellDraw } from "./moving-cell-draw"
import { gameDraw } from "./game-draw"
import { onMouseup } from "./onMouseup"
import { canMove } from "./can-move"
import { autoMove } from "./auto-move"

export function onMousedown(event) {
  let x = (event.pageX - canvas.offsetLeft) / game.cellSize | 0;
  let y = (event.pageY - canvas.offsetTop) / game.cellSize | 0;

  if (game.canMove(x, y)) {
    game.setMovingCell(event);
    canvas.addEventListener('mousemove', game.movingCellDraw);
    canvas.addEventListener('mouseup', onMouseup);
  }
}