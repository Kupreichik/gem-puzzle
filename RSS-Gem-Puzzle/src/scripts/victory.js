import { Game } from "./game-class"

Game.prototype.victory = function() {
  for (let i = 0; i < this.size; i++) {
    for (let j = 0; j < this.size; j++) {
      if (this.startState[i][j] != this.state[i][j]) {
        return false;
      }
    }
  }
  return true;
};