import SpellsService from "../Services/SpellsService.js";
import store from "../store.js";

//Private
function _draw() {
  let spells = store.State.Spells;
  console.log(spells);
}

//Public
export default class SpellsController {
  constructor() {
    store.subscribe("spells", _draw);
  }
}
