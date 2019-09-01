import { storiesOf } from '@storybook/polymer'
import { withKnobs, boolean, text } from '@storybook/addon-knobs/polymer'
import { withNotes } from '@storybook/addon-notes'
import doc from './README.md'

import './card'

storiesOf('Pokedex Card', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('Default', () => {
    const el = document.createElement('pokedex-card')
    const holder = document.querySelector('#root')
    
    const name = text('Name', 'Gengar')
    const type0 = text('Type 0', 'poison')
    const type1 = text('Type 1', 'ghost')
    const source = text('Image', 'https://bit.ly/2UmleKc')

    el.id = text('Id', '094')
    el.source = source
    el.alt = name
    el.setAttribute('background', 'poison')
    
    el.innerHTML = `
    <span slot='name'>${name}</span>
    <span slot='type0'>${type0}</span>
    <span slot='type1'>${type1}</span>
    `
    el.setAttribute('background',
      el.shadowRoot.querySelector('[name=type0]').assignedElements()[0].textContent
    )

    holder.style.width = text('Width', '400px')
    holder.style.height = text('Height', '230px')

    return el
  }, {
    notes: {
      markdown: doc
    }
  })