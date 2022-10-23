import { results } from "./results";

export function setLocalStorage() {
  let text = JSON.stringify(results);
  localStorage.setItem('results-p', text);
}