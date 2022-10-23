import { Game } from "./game-class";

Game.prototype.setStartState = function() {
  let state = [];
  let n = 1;
  for( let i = 0; i < this.size; i++) {
    let row = [];
    for( let j = 0; j < this.size; j++) {
      row.push(n);
      n++;
    };
    state[i] = row;
  }
  state[state.length-1][state.length-1] = 0;
  return state;
}