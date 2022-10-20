import { game, canvas } from "./init"

export function autoMove() {
  try {
    let x1 = game.movingCell.x;
    let y1 = game.movingCell.y;
    let nullCell = game.getNullCell();
    let x2 = nullCell.x;
    let y2 = nullCell.y;
    let nX = x2 - x1;
    let nY = y2 - y1;

    game.context.clearRect(0, 0, canvas.width, canvas.height);
    game.context.fillRect(0, 0, canvas.width, canvas.height);
    game.gameDraw()
    game.cellView(
      game.positionX, 
      game.positionY
      );
    game.numView();
    game.context.fillText(
      game.movingNum, 
      (game.positionX + game.cellSize / 2), 
      (game.positionY + game.cellSize / 2),
    );
    game.positionX = game.positionX + 2 * nX;
    game.positionY = game.positionY + 2 * nY;

    if(game.positionX !== (x2 * game.cellSize) || game.positionY !== (y2 * game.cellSize)) {
      setTimeout(autoMove, 1);
    } else {
      game.finishMove();
    }
  } catch {
    console.log('Ошибка обработана')
  }
}