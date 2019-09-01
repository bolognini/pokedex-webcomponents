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

{/* <div>
  <slot name='name'></slot>
  <slot name='id'></slot>
  <slot name='type0'></slot>
  <slot name='type1'></slot>
  <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png' />
</div> */}

{/* <pokedex-card>
  <span slot='name'>{pokemon.name}</span>
  <span slot='id'>#{pokemon.id}</span>
  {pokemon.types && pokemon.types.map((item, index) => <span slot={`type${index}`}>{item.type.name}</span>)}
</pokedex-card> */}

class Card extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'id', 'source']
  }

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
    this._id = this._shadowRoot.querySelector('.id')
    this._source = this._shadowRoot.querySelector('img')
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue
  }

  set id(value) {
    this._id.innerHTML = `#${value}`
  }

  set source(value) {
    this._source.setAttribute('src', value)
  }
}

if (!window.customElements.get('pokedex-card')) {
  window.customElements.define('pokedex-card', Card)
}
