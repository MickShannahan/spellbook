import _store from "../store.js";
import Spell from "../Models/Spell.js"

// @ts-ignore
const _bcwApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/",
  timeout: 3000
})

class SpellsService {
  constructor() {
    this.getSpellList()
    // this.getSpellbook()
    // this.getSelectedSpell()
  }

  getSpellList() {
    _bcwApi.get("spells").then(res => {
      console.log(res);
      _store.commit("spellList", res.data.map(rawSpellData => rawSpellData))
    }).catch(err => console.error(err))
  }
  selectSpell(spellId) {
    _bcwApi.get("spells/" + spellId).then(res => {
      console.log(res.data);
      _store.commit("selectedSpell", new Spell(res.data))
      console.log(_store.State.selectedSpell);
    }).catch(err => console.error(err))
  }


  getSpellbook() {
    _bcwApi.get("spells").then(res => {
      _store.commit("spellbook", res.data.results.map(rawSpellData => new Spell(rawSpellData)))
    }).catch(err => console.error(err))
  }

  // getSelectedSpell(spellName) {
  //   _bcwApi.get("spells/" + spellName).then(res => {

  //   }).catch(err => console.error(err))
  // }


}

const service = new SpellsService();
export default service;
