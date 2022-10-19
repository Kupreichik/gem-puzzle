import { Game } from "./game-class"
import { shuffleCells } from "./shuffle-cells"
import { gameDraw } from "./game-draw"
import { root } from "./dom-elements"

export function init() {
  let canvas = document.createElement('canvas');
  canvas.width  = 320;
  canvas.height = 320;

  let context = canvas.getContext("2d");
  context.fillRect(0, 0, canvas.width, canvas.height);

  let cellSize = canvas.width / 4;

  let game = new Game(context, cellSize);
  game.shuffleCells(300);
  game.gameDraw();
  root.append(canvas);
}