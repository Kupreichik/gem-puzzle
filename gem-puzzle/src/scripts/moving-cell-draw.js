import { Game } from "./game-class";
import { game, canvas } from "./init";

Game.prototype.movingCellDraw = function(event) {
  let x = event.type == 'mousemove' ?
      event.clientX : event.touches[0].clientX;
  let y = event.type == 'mousemove' ?
      event.clientY : event.touches[0].clientY;
  game.context.clearRect(0, 0, canvas.width, canvas.height);
  game.context.fillRect(0, 0, canvas.width, canvas.height);
  game.gameDraw()
  game.context.fillRect(
    (x - canvas.offsetLeft - Math.round(game.cellSize / 2)), 
    (y - canvas.offsetTop - Math.round(game.cellSize / 2)),
    game.cellSize, 
    game.cellSize
  );
  game.cellView(
    (x - canvas.offsetLeft - Math.round(game.cellSize / 2)), 
    (y - canvas.offsetTop - Math.round(game.cellSize / 2))
    );
  game.numView();
  game.context.fillText(
    game.movingNum, 
    (x - canvas.offsetLeft), 
    (y - canvas.offsetTop)
  );
}