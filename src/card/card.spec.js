import { fixture, expect } from '@open-wc/testing'
import './card'

describe('pokedex-card', () => {
  it('should render component without crashing', async () => {
    const el = await fixture(`
      <pokedex-card>
        <span slot='type0'></span>
        <span slot='type1'></span>
      </pokedex-card>
    `)
    expect(el).dom.to.equal(`
      <pokedex-card>
        <span slot='type0' type='type0'></span>
        <span slot='type1' type='type1'></span>
      </pokedex-card>
    `)
  })

  it('should set pokémon name when component receive name attribute', async () => {
    const el = await fixture(`
      <pokedex-card name='Gengar'>
        <span slot='type0'></span>
        <span slot='type1'></span>
      </pokedex-card>
    `)

    const name = el.name

    expect(name).to.equal('Gengar')
  })
  
  it('should set pokémon id when component receive id attribute', async () => {
    const el = await fixture(`
      <pokedex-card id='94'>
        <span slot='type0'></span>
        <span slot='type1'></span>
      </pokedex-card>
    `)

    const id = el.id

    expect(id).to.equal('94')
  })
  
  it('should set img src when component receive source attribute', async () => {
    const el = await fixture(`
      <pokedex-card source='https://bit.ly/2UmleKc'>
        <span slot='type0'></span>
        <span slot='type1'></span>
      </pokedex-card>
    `)

    const source = el.source
    const img = el.shadowRoot.querySelector('img').getAttribute('src')

    expect(source).to.equal('https://bit.ly/2UmleKc')
    expect(source).to.equal(img)
  })
  
  it('should set img alt when component receive alt attribute', async () => {
    const el = await fixture(`
      <pokedex-card alt='Gengar'>
        <span slot='type0'></span>
        <span slot='type1'></span>
      </pokedex-card>
    `)

    const alt = el.alt
    const imgAlt = el.shadowRoot.querySelector('img').getAttribute('alt')

    expect(alt).to.equal('Gengar')
    expect(alt).to.equal(imgAlt)
  })

  it(`should not render types when component doesn't use slot elements`, async () => {
    const el = await fixture(`
      <pokedex-card></pokedex-card>
    `)

    const type0 = el.shadowRoot.querySelector('[name=type0]')
    const slot0 = type0.assignedElements().length

    expect(slot0).to.equal(0)
  })
})