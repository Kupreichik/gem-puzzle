import { fillBestResults } from "./fill-best-results";

export function changeShowingRes(event) {
  if(event.target.classList.contains('res-size')) {
    [...document.querySelectorAll('.res-size')].forEach(element => element.classList.remove('current-size'));
    event.target.classList.add('current-size');
    fillBestResults(+event.target.textContent[0]);
  }
}