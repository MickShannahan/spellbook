import SpellsService from "../Services/SpellsService.js";
import _store from "../store.js";
import Spell from "../Models/Spell.js";

//Private
function _drawSpellList() {
  let template = ""
  _store.State.spellList.forEach(spell => template += Spell.generateSpellListTemplate(spell))
  document.getElementById("spell-list").innerHTML = template
}


function _drawSpellbook() {
  let template = ""
  _store.State.spellbook.forEach(spell => template += spell.Template)
  document.getElementById("spellbook").innerHTML = template
}


// draws spell selected from the spellbook //
function _drawSelectedSpell() {
  let template = ""
  document.getElementById("selected-spell").innerHTML = _store.State.selectedSpell.SelectedSpellTemplate
}

//Public
export default class SpellsController {
  constructor() {
    _store.subscribe("spellList", _drawSpellList);
    _store.subscribe("spellbook", _drawSpellbook);
    _store.subscribe("selectedSpell", _drawSelectedSpell)

  }

  addSpellToBook(spellId) {
    SpellsService.addSpellToBook(spellId)
  }
}
