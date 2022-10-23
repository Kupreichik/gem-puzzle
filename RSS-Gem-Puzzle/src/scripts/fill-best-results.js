import { results } from "./results";

export function fillBestResults(size) {
  let elts = [...document.querySelectorAll('.res-row')];
  for( let i = 0; i < 10; i++) {
    if( results[size][i] ) {
      let seconds = results[size][i].time % 60;
      let minutes = Math.floor(results[size][i].time / 60);
      let strSeconds = seconds < 10 ? '0' + seconds : seconds;
      let strMinutes = minutes < 10 ? '0' + minutes : minutes;
  
      elts[i].innerHTML = `<span class="row">${i + 1}</span>
      <span class="row">${strMinutes}:${strSeconds}</span>
      <span class="row">${results[size][i].moves}</span>`;
    } else {
      elts[i].innerHTML = '';
    }
  }
}