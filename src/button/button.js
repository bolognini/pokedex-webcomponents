import css from './style.css'

class Button extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: 'open' })
    this.addEventListener('click', this.handleClick)

    this._disabled = false
  }

  static get observedAttributes() {
    return ['disabled']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._disabled = newValue !== null
    this.render()
  }

  connectedCallback() {
    this._disabled = this.getAttribute('disabled') !== null
    this.render()
  }

  handleClick(event) {
    if (this._disabled) {
      event.stopImmediatePropagation()
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
     <style>${css}</style>
     <button ${this._disabled ? 'disabled' : ''}><slot></slot></button>
    `
  }
}

if (!window.customElements.get('greg-button')) {
  window.customElements.define('greg-button', Button)
}
