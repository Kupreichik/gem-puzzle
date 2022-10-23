import { game, canvas } from "./init";
import { Sound } from "./sound-class";

export function congratulation() {
  localStorage.removeItem('game');
  game.context.clearRect(0, 0, canvas.width, canvas.height);
  game.context.fillRect(0, 0, canvas.width, canvas.height);
  game.context.font = "24px sans-serif";
  game.context.textAlign = "center";
  game.context.textBaseline = "middle";
  game.context.fillStyle = "#00e2bb";

  let seconds = game.time % 60;
  let minutes = Math.floor(game.time / 60);
  let strSeconds = seconds < 10 ? '0' + seconds : seconds;
  let strMinutes = minutes < 10 ? '0' + minutes : minutes;
  let text = `in ${strMinutes}:${strSeconds} and ${game.moves} moves!`;

  game.context.fillText('Hooray!', 
    Math.round(canvas.width / 2),
    Math.round(canvas.height / 2) - 50);
  game.context.fillText('You solved the puzzle', 
    Math.round(canvas.width / 2),
    Math.round(canvas.height / 2));
  game.context.fillText(text, 
    Math.round(canvas.width / 2),
    Math.round(canvas.height / 2) + 50);

  game.timeRuns = false;
  if(game.sound) {
    let victorySound = new Sound("../sounds/zvuk-fanfar.mp3");
    victorySound.play();
  }
}