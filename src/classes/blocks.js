import {col, css, row} from "../utils";

class Block {
    constructor(type, value, options) {
        this.type = type;
        this.value = value;
        this.options = options;
    }

    toHtml() {
        throw new Error('You have to extend method [ toHtml ]')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super('title', value, options)
    }

    toHtml() {
        const {tag = 'h1', styles} = this.options;
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super('image', value, options)
    }

    toHtml() {
        const {styles, imgStyles, alt} = this.options;
        return row(`<img src="${this.value}" alt="${alt}" style="${css(imgStyles)}">`, css(styles));
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super('columns', value, options)
    }

    toHtml() {
        const {styles} = this.options;
        const columns = this.value.map(col).join('')
        return row(columns, css(styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super('text', value, options)
    }

    toHtml() {
        const {styles} = this.options;
        return row(col(`<p>${this.value}</p>`), css(styles))
    }
}