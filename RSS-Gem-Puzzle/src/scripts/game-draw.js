import { Game } from "./game-class"
import { cellView } from "./cell-view"
import { numView } from "./num-view"

Game.prototype.gameDraw = function() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (this.state[i][j] > 0) {
        this.cellView(
          j * this.cellSize, 
          i * this.cellSize
        );
        this.numView();
        this.context.fillText(
          this.state[i][j], 
          j * this.cellSize + this.cellSize / 2,
          i * this.cellSize + this.cellSize / 2
        );
      }
    }
  }
};