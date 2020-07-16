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
    _bcwApi.get("spells").then(res => {
    _store.commit("spellList", res.data.data.results.map(rawSpellData => rawSpellData.name))
  }).catch(err => console.error(err))
  }
  getSpellbook() {
    _bcwApi.get("spells").then(res => {
      _store.commit("spellbook", res.data.data.map(rawSpellData => new Spell(rawSpellData)))
    }).catch(err => console.error(err))
  }

  getSelectedSpell(spellName) {
    _bcwApi.get("spells/" + spellName).then(res => {
      
    }).catch(err => console.error(err))
  }

  
}

const service = new SpellsService();
export default service;
