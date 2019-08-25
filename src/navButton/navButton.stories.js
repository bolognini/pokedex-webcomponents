import { storiesOf } from '@storybook/polymer'
import { withKnobs, boolean, text } from '@storybook/addon-knobs/polymer'
import { withNotes } from '@storybook/addon-notes'
import doc from './README.md'

import './navButton'

storiesOf('NavButton', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('default', () => {
    const el = document.createElement('greg-nav-button')

    if (boolean('Dark Theme', false)) {
      el.setAttribute('dark', true)
    }
    
    if (boolean('Disabled', false)) {
      el.setAttribute('disabled', true)
    }
    
    if (boolean('Large', false)) {
      el.setAttribute('large', true)
    }
    
    if (boolean('Text', false)) {
      el.setAttribute('text', 'Default')
    }
    
    if (boolean('Posição do ícone', false)) {
      el.setAttribute('position', true)
    }

    return el
  }, {
    notes: {
      markdown: doc
    }
  })