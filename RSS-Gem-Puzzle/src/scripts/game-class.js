export function Game(context, width) {
  this.size = 4;
  this.startState = this.setStartState()
  this.state = JSON.parse(JSON.stringify(this.startState));
  this.movingNum;
  this.movingCell;

  this.color = "#00e2bb";
  this.context = context;
  this.cellSize = Math.round(width / this.size);
  
  this.moves = 0;
  this.time = 0;
  this.sound = true;
}