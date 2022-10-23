import { game, sound, soundBtn } from "./init";
import { newGame } from "./new-game";
import { showBestResults } from "./show-best-results";

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
  };

  if(event.target.classList.contains('results')) {
    if(document.querySelector('.res-container')) {
      let el = document.querySelector('.res-container');
      el.classList.remove('res-container-active');
      setTimeout(() => { el.remove() }, 400)
    } else {
      showBestResults();
    }
  };
}