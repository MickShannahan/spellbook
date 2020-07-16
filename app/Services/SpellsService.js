import _store from "../store.js";
import store from "../store.js";
import Spell from "../Models/Spell.js"

// @ts-ignore
const _bcwApi = axios.create( {
  baseURL: "//bcw-sandbox.hero.herokuapp.com/api/",
  timeout: 3000
})

class SpellsService {
  constructor() {
    this.getSpellList()
    this.getSpellbook()
    this.getSelectedSpell()
  }

  getSpellList() {

  }

  get Spellbook() {

  }

  get SelectedSpell {

  }

  
}

const service = new SpellsService();
export default service;
