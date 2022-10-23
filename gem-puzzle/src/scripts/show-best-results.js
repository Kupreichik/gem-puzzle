import { changeShowingRes } from "./change-showing-results";
import { fillBestResults } from "./fill-best-results";
import { btns, game } from "./init";

export function showBestResults() {
  let topRes = document.createElement('div');
  topRes.classList.add('res-container');
  btns.append(topRes);

  let resSizes = document.createElement('div');
  resSizes.classList.add('container');
  resSizes.innerHTML = `<div class="res-size">3x3</div>
                  <div class="res-size">4x4</div>
                  <div class="res-size">5x5</div>
                  <div class="res-size">6x6</div>
                  <div class="res-size">7x7</div>
                  <div class="res-size">8x8</div>`;
  topRes.prepend(resSizes);

  let resHeadings = document.createElement('div');
  resHeadings.classList.add('container', 'res-headings');
  resHeadings.innerHTML = `<div class="res-heading">RATING</div>
  <div class="res-heading">TIME</div>
  <div class="res-heading">MOVES</div>`;
  resSizes.after(resHeadings);

  for(let i = 0; i < 10; i++) {
    let resRow = document.createElement('div');
    resRow.classList.add('container', 'res-row');
    resHeadings.after(resRow);
  };

  let sizesList = [...resSizes.querySelectorAll('.res-size')];
  sizesList.forEach( el => {
    if(el.textContent[0] == game.size) {
      el.classList.add('current-size');
    }
  });


  fillBestResults(game.size);

  resSizes.addEventListener('click', changeShowingRes);
  setTimeout(() => {topRes.classList.add('res-container-active')}, 1);

  document.addEventListener('click', (event) => {
    let el = document.querySelector('.res-container');
    if(el &&
      !event.target.closest('.res-container') &&
      !event.target.classList.contains('results'))
    {
      el.classList.remove('res-container-active');
      setTimeout(() => { el.remove() }, 400)
    };
  });
}