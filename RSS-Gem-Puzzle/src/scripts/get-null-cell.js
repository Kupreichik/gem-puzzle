import { Game } from "./game-class"

Game.prototype.getNullCell = function(){
  for (let i = 0; i < this.size; i++) {
    for (let j = 0; j < this.size; j++) {
      if(this.state[j][i] === 0) {
        return {x: i, y: j};
      }
    }
  }
};