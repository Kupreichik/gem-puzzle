import { Game } from "./game-class";
import { game, canvas } from "./init";

Game.prototype.movingCellDraw = function(event) {
  game.context.clearRect(0, 0, canvas.width, canvas.height);
  game.context.fillRect(0, 0, canvas.width, canvas.height);
  game.gameDraw()
  game.context.fillRect(
    (event.clientX - canvas.offsetLeft - Math.round(game.cellSize / 2)), 
    (event.clientY - canvas.offsetTop - Math.round(game.cellSize / 2)),
    game.cellSize, 
    game.cellSize
  );
  game.cellView(
    (event.clientX - canvas.offsetLeft - Math.round(game.cellSize / 2)), 
    (event.clientY - canvas.offsetTop - Math.round(game.cellSize / 2))
    );
  game.numView();
  game.context.fillText(
    game.movingNum, 
    (event.clientX - canvas.offsetLeft), 
    (event.clientY - canvas.offsetTop)
  );
}