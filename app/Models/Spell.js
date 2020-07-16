export default class Spell {
    constructor(data) {
        this.title = data.title

    }

    get SelectedSpellTemplate() {
        return `
        <h3 class="col-12 font-title text-center">school</h3>
        <div class="col-12 school-abjuration"></div>
        <h2 class=" col-12 text-center">Title of the spell goes here</h2>
        <h6 class="col-4 text-center font-title border-dark border-right">Casting Time
        </h6>
        <h6 class="col-4 text-center font-title border-dark border-right">components
        </h6>
        <h6 class="col-4 text-center font-title">range</h6>
        <h6 class="col-12 font-handwritten">Lorem, ipsum dolor sit amet consectetur
            adipisicing elit.
            Sapiente odit rerum
            voluptate, earum at facere cumque itaque, ab laboriosam reiciendis totam fuga
            eius expedita nihil quia! Voluptate quos expedita mollitia!</h6>
        `
    }
    static generateSpellListTemplate(spell) {
        return `
        <button class="btn col-12 p-1  text-capitalize"
        onclick="app.spellsController.addSpellToBook('${spell.id}')">
        ~ ${spell.name} ~
    </button>
        `
    }
}