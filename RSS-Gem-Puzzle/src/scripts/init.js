import { Game } from "./game-class"
import { shuffleCells } from "./shuffle-cells"
import { gameDraw } from "./game-draw"
import { root } from "./dom-elements"
import { onMousedown } from "./onMousedown"
import { onTouchstart } from "./onTouchstart"
import { setStartState } from "./set-start-state"
import { changeSize } from "./change-size"
import { handleBtnClick } from "./handle-btn-click"

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
<div class="btn new-game">Save</div>
<div class="btn new-game">Best Results</div>`

export let game = new Game(context, canvas.width);

export function init() {
  game.shuffleCells(600);
  game.gameDraw();

  root.append(canvas);
  canvas.before(btns);
  canvas.after(sizes);

  canvas.addEventListener('mousedown', onMousedown);
  canvas.addEventListener('touchstart', onTouchstart);
  sizes.addEventListener('click', changeSize);
  btns.addEventListener('click', handleBtnClick);
}