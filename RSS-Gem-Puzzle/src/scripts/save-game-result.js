import { game } from "./init";
import { results } from "./results";

export function saveGameResult() {
  let gameRes = {};
  gameRes['time'] = game.time;
  gameRes['moves'] = game.moves;
  results[game.size].push(gameRes);
  results[game.size].sort((a, b) => a.time > b.time ? 1 : -1);
  if( results[game.size].length > 10) {
    results[game.size].pop();
  }
}