import { storiesOf } from '@storybook/polymer'
import { withKnobs, boolean, text } from '@storybook/addon-knobs/polymer'
import { withNotes } from '@storybook/addon-notes'
import { action } from '@storybook/addon-actions'
import doc from './README.md'

import './button'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .add('default', () => {
    const el = document.createElement('greg-button')

    el.innerHTML = text('Text', 'Hello world')

    if (boolean('Secondary', false)) {
      el.setAttribute('secondary', true)
    }

    if (boolean('Dark Theme', false)) {
      el.setAttribute('dark', true)
    }

    if (boolean('Disabled', false)) {
      el.setAttribute('disabled', true)
    }

    if (boolean('Loading', false)) {
      el.setAttribute('loading', true)
    }

    if (boolean('Small', false)) {
      el.setAttribute('small', true)
    }

    el.addEventListener('click', e => {
      action('click')(e)
    })

    return el
  }, {
    notes: {
      markdown: doc
    }
  })