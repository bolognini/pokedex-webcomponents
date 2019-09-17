import css from './style.css'

const template = document.createElement('template')
template.innerHTML = `
  <style>${css}</style>
  <div class='holder'>
    <slot name='name'></slot>
    <div class='id'></div>
    <div class='types'>
      <slot name='type0'></slot>
      <slot name='type1'></slot>
    </div>
    <img />
  </div>
`

class Card extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'id', 'source', 'alt', 'background']
  }

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
    this._name = this._shadowRoot.querySelector('[name=name]')
    this._id = this._shadowRoot.querySelector('.id')
    this._img = this._shadowRoot.querySelector('img')
    this._type0 = this._shadowRoot.querySelector('[name=type0]')
    this._type1 = this._shadowRoot.querySelector('[name=type1]')
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue
  }

  connectedCallback() {
    if (this._type0.assignedElements().length > 0) {
      this._type0.assignedElements()[0].setAttribute('type', 'type0')
    }
    if (this._type1.assignedElements().length > 0) {
      this._type1.assignedElements()[0].setAttribute('type', 'type1')
    }
  }

  set name(value) {
    this._name.innerHTML = value
  }

  get name() {
    return this.getAttribute('name')
  }

  set id(value) {
    this._id.innerHTML = `#${value}`
  }

  get id() {
    return this.getAttribute('id')
  }

  set source(value) {
    this._img.setAttribute('src', value)
  }

  get source() {
    return this.getAttribute('source')
  }

  set alt(value) {
    this._img.setAttribute('alt', value)
  }

  get alt() {
    return this.getAttribute('alt')
  }
}

window.customElements.define('pokedex-card', Card)
