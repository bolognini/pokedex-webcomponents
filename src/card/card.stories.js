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

    return el
  }, {
    notes: {
      markdown: doc
    }
  })