import { fixture, expect, assert } from '@open-wc/testing'
import { spy } from 'sinon'
import './button.js'

describe('greg-button', () => {
  it('Should render a text inside the button', async () => {
    const el = await fixture('<greg-button>Hello</greg-button>')
    const text = el.shadowRoot.querySelector('slot').assignedNodes()[0].data

    expect(text).to.equal('Hello')
  })

  it('Should trigger click event', async () => {
    const el = await fixture('<greg-button></greg-button>')
    const callback = spy()

    el.addEventListener('click', callback)
    el.click()

    assert(callback.calledOnce)
  })

  it('Should not trigger click event when disabled', async () => {
    const el = await fixture('<greg-button disabled></greg-button>')
    const callback = spy()

    el.addEventListener('click', callback)
    el.click()

    assert(callback.notCalled)
  })
})
