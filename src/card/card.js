import css from './style.css'

const template = document.createElement('template')
template.innerHTML = `
  <style>${css}</style>
  <div>
    <slot name='name'></slot>
    <slot name='id'></slot>
    <slot name='type0'></slot>
    <slot name='type1'></slot>
  </div>
`

class Card extends HTMLElement {
  static get observedAttributes() {
    return ['disabled']
  }

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue
  }
}

if (!window.customElements.get('pokedex-card')) {
  window.customElements.define('pokedex-card', Card)
}
