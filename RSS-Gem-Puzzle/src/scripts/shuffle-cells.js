import { Game } from "./game-class"
import { getRandomBool } from "./get-random-bool"
import { getNullCell } from "./get-null-cell"
import { moveCell } from "./move-cell"

Game.prototype.shuffleCells = function(count) {
  let x, y;
  for (let i = 0; i < count; i++) {
    let nullCell = this.getNullCell();

    let verticalMove = getRandomBool();
    let upLeft = getRandomBool();

    if (verticalMove) {
      x = nullCell.x; 
      if (upLeft) {
        y = nullCell.y - 1;
      } else {
        y = nullCell.y + 1;
      }
    } else {
      y = nullCell.y; 
      if (upLeft) {
        x = nullCell.x - 1;
      } else {
        x = nullCell.x + 1;
      }
    }

    if (0 <= x && x <= this.size - 1 && 0 <= y && y <= this.size - 1) {
      this.moveCell(x, y);
    }
  }
  this.clicks = 0;
};