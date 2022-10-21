import { Game } from "./game-class"
import { shuffleCells } from "./shuffle-cells"
import { gameDraw } from "./game-draw"
import { root } from "./dom-elements"
import { onMousedown } from "./onMousedown"
import { onTouchstart } from "./onTouchstart"

export let canvas = document.createElement('canvas');
canvas.width  = 320;
canvas.height = 320;

let context = canvas.getContext("2d");
context.fillRect(0, 0, canvas.width, canvas.height);

let cellSize = canvas.width / 4;

export let game = new Game(context, cellSize);

export function init() {
  game.shuffleCells(300);
  game.gameDraw();
  canvas.classList.add('canvas')
  root.append(canvas);

  canvas.addEventListener('mousedown', onMousedown);
  canvas.addEventListener('touchstart', onTouchstart);
}