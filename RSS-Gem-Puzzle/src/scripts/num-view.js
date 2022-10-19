import { Game } from "./game-class"

Game.prototype.numView = function() {
  this.context.font = "bold " + (this.cellSize/2) + "px Sans";
  this.context.textAlign = "center";
  this.context.textBaseline = "middle";
  this.context.fillStyle = "#222";
};