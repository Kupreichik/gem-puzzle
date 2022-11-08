import { init } from "./scripts/init";
import { setLocalStorage } from "./scripts/set-local-storage";

window.onload = init;
window.addEventListener('beforeunload', setLocalStorage);