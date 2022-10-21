import { Game } from "./game-class"
import { getNullCell } from "./get-null-cell"
import { gameDraw } from "./game-draw"
import { canvas } from "./init"

Game.prototype.finishMove = function() {
  let nullCell = this.getNullCell();
  this.state[nullCell.y][nullCell.x] = this.movingNum;
  this.state[this.movingCell.y][this.movingCell.x] = 0;
  this.moves++;
  this.movingNum = null;
  this.movingCell = null;
  this.context.clearRect(0, 0, canvas.width, canvas.height);
  this.context.fillRect(0, 0, canvas.width, canvas.height);
  this.gameDraw()
  this.positionX = 0;
  this.positionY = 0;
  this.mouseDownAt = 0;
}