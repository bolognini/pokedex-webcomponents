import css from './style.css'

const template = document.createElement('template')
template.innerHTML = `
  <style>${css}</style>
  <div class='holder'>
    <button>
      <svg viewBox="-2 -1 24 24">
        <path fill-rule="evenodd" d="M6 22c0-.3.1-.5.3-.7l9.3-9.3-9.3-9.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l10 10c.4.4.4 1 0 1.4l-10 10c-.4.4-1 .4-1.4 0-.2-.2-.3-.4-.3-.7z"></path>
      </svg>
    </button>
  </div>
`

class NavButton extends HTMLElement {
  static get observedAttributes() {
    return ['disabled', 'large', 'text', 'position']
  }

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true))
    this._container = this._shadowRoot.querySelector('.holder')
    this._icon = this._shadowRoot.querySelector('svg')
    this._slot = document.createElement('slot')
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue
  }

  get large() {
    return this.hasAttribute('large')
  }

  set large(value) {
    if (this._container.querySelector('slot')) {
      this._container.removeChild(this._slot)
    }
  }

  get text() {
    return this.getAttribute('text')
  }

  set text(value) {
    if (!this.hasAttribute('large')) {
      this._container.appendChild(this._slot).textContent = value
    }
  }

  get position() {
    return this.hasAttribute('position')
  }

  set position(value) {
    this._icon.classList.toggle('turnback')
  }

  get disabled() {
    return this.hasAttribute('disabled')
  }

  set disabled(value) {
    this._container.querySelector('button').disabled = true
  }
}

if (!window.customElements.get('greg-nav-button')) {
  window.customElements.define('greg-nav-button', NavButton)
}
