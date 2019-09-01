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
    
    const name = text('Name', 'Gengar')
    const type0 = text('Type 0', 'Poison')
    const type1 = text('Type 1', 'Ghost')
    const source = text('Image', 'https://bit.ly/2LdntMS')

    el.id = text('Id', '094')
    el.source = source

    el.innerHTML = `
      <span slot='name'>${name}</span>
      <span slot='type0'>${type0}</span>
      <span slot='type1'>${type1}</span>
    `

    return el
  }, {
    notes: {
      markdown: doc
    }
  })