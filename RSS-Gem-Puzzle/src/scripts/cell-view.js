import { Game } from "./game-class"

Game.prototype.cellView = function(x, y) {
  this.context.fillStyle = this.color;
  this.context.fillRect(
    x + 1, 
    y + 1, 
    this.cellSize - 2, 
    this.cellSize - 2
  );
};