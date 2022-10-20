export function Game(context, cellSize) {
  this.state = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,0]
  ];
  this.movingNum;
  this.movingCell;

  this.color = "#00e2bb";
  this.context = context;
  this.cellSize = cellSize;
  this.moves = 0;
}