import { Game } from "./game-class";
import { shuffleCells } from "./shuffle-cells";
import { gameDraw } from "./game-draw";
import { root } from "./dom-elements";
import { onMousedown } from "./onMousedown";
import { onTouchstart } from "./onTouchstart";
import { setStartState } from "./set-start-state";
import { changeSize } from "./change-size";
import { handleBtnClick } from "./handle-btn-click";
import { showTime } from "./show-time";
import { Sound } from "./sound-class";
import { results } from "./results";

export let canvas = document.createElement('canvas');
canvas.width  = 320;
canvas.height = 320;

let context = canvas.getContext("2d");
context.fillRect(0, 0, canvas.width, canvas.height);

export let sizes = document.createElement('div');
sizes.classList.add('container');
sizes.innerHTML = `<div class="size" id="3">3x3</div>
                  <div class="size current-size" id="4">4x4</div>
                  <div class="size" id="5">5x5</div>
                  <div class="size" id="6">6x6</div>
                  <div class="size" id="7">7x7</div>
                  <div class="size" id="8">8x8</div>`;

export let btns = document.createElement('div');
btns.classList.add('container');
btns.innerHTML = `<div class="btn new-game">New Game</div>
<div class="btn save">Save</div>
<div class="btn results">Best Results</div>`;

export let soundBtn = document.createElement('div');
soundBtn.classList.add('btn', 'sound-btn');

let container = document.createElement('div');
container.classList.add('container');

export let time = document.createElement('div');
time.classList.add('time');

export let moves = document.createElement('div');
moves.classList.add('moves');
moves.textContent = `Moves: 0`;

export let game = new Game(context, canvas.width);
export let sound = new Sound("../sounds/chpok.mp3");

export function init() {
  if(localStorage.getItem('game')) {
    let savedGame = JSON.parse(localStorage.getItem('game'));
    game.size = savedGame.size;
    game.startState = savedGame.startState;
    game.state = savedGame.state;
    game.moves = savedGame.moves;
    game.time = savedGame.time;
    game.sound = savedGame.sound;
  } else {
    game.shuffleCells(600);
  }

  game.gameDraw();

  root.append(canvas);
  canvas.before(btns);
  canvas.after(sizes);
  btns.after(container);
  btns.append(soundBtn);
  container.prepend(time);
  container.append(moves);

  moves.textContent = `Moves: ${game.moves}`;
  soundBtn.innerHTML = game.sound ? sound.soundOn : sound.soundOff;
  showTime();

  canvas.addEventListener('mousedown', onMousedown);
  canvas.addEventListener('touchstart', onTouchstart);
  sizes.addEventListener('click', changeSize);
  btns.addEventListener('click', handleBtnClick);

  if(localStorage.getItem('results-p')) {
    results.setResults(JSON.parse(localStorage.getItem('results-p')));
  }
}