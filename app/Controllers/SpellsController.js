import SpellsService from "../Services/SpellsService.js";
import _store from "../store.js";
import Spell from "../Models/Spell"

//Private
function _drawSpellList() {
  let template = ""
  _store.State.spellbook.forEach(spellName => template += Spell.generateSpellListTemplate(spellName))
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
  document.getElementById("selected-spell").innerHTML = _store.State.activePokemon.Template
}

//Public
export default class SpellsController {
  constructor() {
    _store.subscribe("spell-list", _drawSpellList);
    _store.subscribe("spells", _drawSpellbook);
    _store.subscribe("selected-spell", _drawSelectedSpell)
   
  }
}
