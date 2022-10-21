import { game } from "./init";
import { newGame } from "./new-game"

export function handleBtnClick(event) {
  if(event.target.classList.contains('new-game')) {
    game.newGame();
  }
}