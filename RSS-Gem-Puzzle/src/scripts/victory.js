import { Game } from "./game-class"

Game.prototype.victory = function() {
  let combination = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,0]];
  let res = true;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (combination[i][j] != this.state[i][j]) {
        res = false;
        break;
      }
    }
  }
  return res;
};