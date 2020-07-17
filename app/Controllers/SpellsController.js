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
  console.log(_store.State);
  _store.State.spellbook.forEach(spell => template += spell.SpellBookTemplate)
  template += `<button class="btn btn-block border-danger px-5 mx-5 my-2"
  onclick="app.spellsController.removeSpellFromBook()">Remove spell from book</button>`
  document.getElementById("my-spells").innerHTML = template
}


// draws spell selected from the spellbook //
function _drawSelectedSpell() {
  document.getElementById("selected-spell").innerHTML = _store.State.selectedSpell.SelectedSpellTemplate
}

//Public
export default class SpellsController {
  constructor() {
    _store.subscribe("spellList", _drawSpellList);
    _store.subscribe("spellbook", _drawSpellbook);
    _store.subscribe("selectedSpell", _drawSelectedSpell)

  }

  selectSpell(spellId) {
    SpellsService.selectSpell(spellId)
  }

  addSpellToBook(spellId) {
    SpellsService.addSpellToBook(spellId)
  }

  removeSpellFromBook() {
    SpellsService.removeSpellFromBook()
  }
}
