import { Game } from "./game-class"

Game.prototype.getNullCell = function(){
  for (let i = 0; i<4; i++){
    for (let j=0; j<4; j++){
      if(this.state[j][i] === 0){
        return {x: i, y: j};
      }
    }
  }
};