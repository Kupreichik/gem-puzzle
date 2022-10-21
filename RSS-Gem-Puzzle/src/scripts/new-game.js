import { Game } from "./game-class"
import { shuffleCells } from "./shuffle-cells"
import { setStartState } from "./set-start-state"
import { gameDraw } from "./game-draw"
import { canvas } from "./init"

Game.prototype.newGame = function() {
  this.moves = 0;
  this.startState = this.setStartState();
  this.state = JSON.parse(JSON.stringify(this.startState));
  let n = this.size > 5 ? 1000 : 500;
  this.shuffleCells(n);
  this.cellSize = Math.round(canvas.width / this.size);
  this.context.clearRect(0, 0, canvas.width, canvas.height);
  this.context.fillRect(0, 0, canvas.width, canvas.height);
  this.gameDraw()
}