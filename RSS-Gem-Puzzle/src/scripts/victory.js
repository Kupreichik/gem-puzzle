import { Game } from "./game-class"

Game.prototype.victory = function() {
  let res = true;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (this.startState[i][j] != this.state[i][j]) {
        res = false;
        break;
      }
    }
  }
  return res;
};