import { fixture, expect } from '@open-wc/testing'
import './navButton'

describe('greg-nav-button', () => {
  it('should mount component without crashing', async () => {
    const el = await fixture('<greg-nav-button></greg-nav-button>')
    expect(el).dom.to.equal(`
      <greg-nav-button></greg-nav-button>
    `)
  })

  it('should render a text inside slot when component hasn\'t large attribute and has text attribute', async () => {
    const el = await fixture(`<greg-nav-button text='Hello'></greg-nav-button>`)

    const text = el.text

    expect(text).to.equal('Hello')
  })
 
  it('should not render a text inside slot when component has large attribute', async () => {
    const el = await fixture(`<greg-nav-button text='Hello' large></greg-nav-button>`)

    const slot = el._container.childElementCount
    const large = el.large

    expect(slot).to.equal(1)
    expect(large).to.equal(true)
  })
  
  it('should change icon direction when component has position attribute', async () => {
    const el = await fixture(`<greg-nav-button position></greg-nav-button>`)

    const iconClass = el.shadowRoot.querySelector('svg').classList[0]
    const position = el.position

    expect(iconClass).to.equal('turnback')
    expect(position).to.equal(true)
  })
 
  it('should set disabled on button when component has disabled attribute', async () => {
    const el = await fixture(`<greg-nav-button disabled></greg-nav-button>`)

    const button = el.shadowRoot.querySelector('button').disabled
    const disabled = el.disabled

    expect(button).to.equal(true)
    expect(disabled).to.equal(true)
  })
})
