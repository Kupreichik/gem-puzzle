import { game, time } from "./init";

export function showTime() {
  let seconds = game.time % 60;
  let minutes = Math.floor(game.time / 60);
  let strSeconds = seconds < 10 ? '0' + seconds : seconds;
  let strMinutes = minutes < 10 ? '0' + minutes : minutes;
  time.textContent = `Time: ${strMinutes}:${strSeconds}`;
  game.time = game.timeRuns ? game.time + 1 : game.time;
  setTimeout(showTime, 1000);
}