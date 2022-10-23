import { game } from "./init";
import { newGame } from "./new-game";

export function changeSize(event) {
  if(event.target.classList.contains('size')) {
    game.size = +(event.target.getAttribute('id'));
    [...document.querySelectorAll('.size')].forEach(element => element.classList.remove('current-size'));
    event.target.classList.add('current-size');
    game.newGame();
  }
}