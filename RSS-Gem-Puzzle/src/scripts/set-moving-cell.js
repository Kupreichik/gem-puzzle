import { Game } from "./game-class"
import { canvas } from "./init"

Game.prototype.setMovingCell = function(event) {
  let x = (event.pageX - canvas.offsetLeft) / this.cellSize | 0;
  let y = (event.pageY - canvas.offsetTop) / this.cellSize | 0;
  this.movingCell = {x: x, y: y};
  this.movingNum = this.state[y][x];
  this.state[y][x] = null;
  this.positionX = this.movingCell.x * this.cellSize;
  this.positionY = this.movingCell.y * this.cellSize;
  this.mouseDownAt = {x: event.pageX, y: event.pageY};
}