import { game, canvas } from "./init"
import { finishMove } from "./finish-move"

export function onMouseup() {
  canvas.removeEventListener('mousemove', game.movingCellDraw);
  canvas.removeEventListener('mouseup', onMouseup);
  
  game.finishMove()
}