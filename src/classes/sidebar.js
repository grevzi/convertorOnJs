import {block, blockFactory} from "../utils";

export class Sidebar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector);
        this.update = updateCallback

        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.add.bind(this))
    }

    get template() {
        return [
            block('title'),
            block('text'),
        ].join('')
    }

    add(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value

        const block = blockFactory(type, value, {styles})
        this.update(block)

        event.target.reset()
    }
}