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
    this.getSpellbook()
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
  addSpellToBook(spellId) {
    let prop = _store.State.spellbook.find(spell => spell.index == spellId)
    if (prop.index != spellId) {
      _bcwApi.post("mick/spells", _store.State.selectedSpell).then(res => {
        console.log(res);
        this.getSpellbook()
      }).catch(err => console.error(err))
    }
  }
  removeSpellFromBook() {
    let spellToRemove = _store.State.selectedSpell._id
    _bcwApi.delete("mick/spells" + spellToRemove).then(res => {
      console.log(res);
      this.getSpellbook
    }).catch(err => console.error(err))
  }


  getSpellbook() {
    _bcwApi.get("mick/spells").then(res => {
      let spellbook = []
      res.data.data.forEach(spell => spellbook.push(new Spell(spell)))
      _store.commit("spellbook", spellbook)
    }).catch(err => console.error(err))
  }

  // getSelectedSpell(spellName) {
  //   _bcwApi.get("spells/" + spellName).then(res => {

  //   }).catch(err => console.error(err))
  // }


}

const service = new SpellsService();
export default service;
