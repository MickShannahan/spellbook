export default class Spell {
    constructor(data) {
        this.name = data.name
        this.index = data.index
        this.school = data.school
        this.casting_time = data.casting_time
        this.range = data.range
        this.components = data.components
        this.duration = data.duration
        this.level = data.level
        this.ritual = data.ritual
        this.concentration = data.concentration
        this.desc = data.desc
    }

    get SelectedSpellTemplate() {
        let template = ''
        template += `
        <h3 class="col-12 font-title text-center">${this.school}</h3>
        <div class="col-12 school-${this.school}"></div>
        <h2 class=" col-12 text-center">${this.name}</h2>
        <h6 class="col-4 text-center font-title border-dark border-right">${this.casting_time}
        </h6>
        <h6 class="col-4 text-center font-title border-dark border-right">`

        this.components.forEach(comp => template += comp)

        template += `</h6>
        <h6 class="col-4 text-center font-title">${this.range}</h6>
        <h6 class="col-4 text-center font-title border-dark border-right">${this.duration}
        </h6>
        <h6 class="col-4 text-center font-title border-dark border-right">${this.concentration}
        </h6>
        <h6 class="col-4 text-center font-title">${this.level}</h6>
        <h6 class="col-12 font-handwritten overflow-auto s s2 description-height">`

        this.desc.forEach(desc => template += desc)

        template += `</h6>`

        return template
    }
    static generateSpellListTemplate(spell) {
        return `
        <button class="btn col-12 p-1 text-capitalize"
        onclick="app.spellsController.selectSpell('${spell.id}')">
        ~ ${spell.name} ~
    </button>
        `
    }
}