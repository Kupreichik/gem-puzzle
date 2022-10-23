import { game, sound, soundBtn } from "./init";
import { newGame } from "./new-game";

export function handleBtnClick(event) {
  if(event.target.classList.contains('new-game')) {
    game.newGame();
    localStorage.removeItem('game');
  };

  if(event.target.closest('.sound-btn')) {
    game.sound = game.sound ? false : true;
    soundBtn.innerHTML = game.sound ? sound.soundOn : sound.soundOff;
  };

  if(event.target.classList.contains('save')) {
    localStorage.setItem('game', JSON.stringify(game));
  }
}