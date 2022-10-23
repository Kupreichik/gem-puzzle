import { Game } from "./game-class";
import { getNullCell } from "./get-null-cell";

Game.prototype.moveCell = function(x, y) {
  let nullCell = this.getNullCell();
  let canMoveVertical = (x - 1 == nullCell.x || x + 1 == nullCell.x) && y == nullCell.y;
  let canMoveHorizontal = (y - 1 == nullCell.y || y + 1 == nullCell.y) && x == nullCell.x;

  if (canMoveVertical || canMoveHorizontal) {
    this.state[nullCell.y][nullCell.x] = this.state[y][x];
    this.state[y][x] = 0;
  }
};