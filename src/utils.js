export function row(content, styles) {
    return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`
}

export function css(styles = {}) {
    return Object.keys(styles).map(key => `${key}:${styles[key]}`).join(';')
}