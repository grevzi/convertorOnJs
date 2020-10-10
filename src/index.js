import {model} from './model'
import {templates} from './templates'
import './styles/main.css'

const $site = document.querySelector('#site');

model.forEach(block => {
    if (templates.hasOwnProperty(block.type)) {
        $site.insertAdjacentHTML('beforeend', templates[block.type](block))

    }
})