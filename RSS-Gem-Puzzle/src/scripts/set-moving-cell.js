import { Game } from "./game-class"

Game.prototype.setMovingCell = function(x, y) {
  this.movingCell = {x: x, y: y};
  this.movingNum = this.state[y][x];
  this.state[y][x] = null;
}