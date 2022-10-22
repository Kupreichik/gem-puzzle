import { Game } from "./game-class"
import { shuffleCells } from "./shuffle-cells"
import { setStartState } from "./set-start-state"
import { gameDraw } from "./game-draw"
import { canvas, time, moves } from "./init"
import { showTime } from "./show-time"

Game.prototype.newGame = function() {
  this.moves = 0;
  this.time = 1;
  time.textContent = `Time: 00:00`;
  moves.textContent = `Moves: ${this.moves}`;
  this.startState = this.setStartState();
  this.state = JSON.parse(JSON.stringify(this.startState));
  let n = this.size > 5 ? 1000 : 500;
  this.shuffleCells(n);
  this.cellSize = Math.round(canvas.width / this.size);
  this.context.clearRect(0, 0, canvas.width, canvas.height);
  this.context.fillStyle = "#222";
  this.context.fillRect(0, 0, canvas.width, canvas.height);
  this.gameDraw();
  this.timeRuns = true;
}