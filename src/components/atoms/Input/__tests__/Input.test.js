import React from 'react'
import 'jest-styled-components'
import {render} from '@testing-library/react'
import {ThemeProvider} from 'styled-components'
import theme from '../../../../styles/theme'
import Input from '..'

describe('Input', () => {
  test('it works default', () => {
    const {container} = render(
      <ThemeProvider theme={theme}>
         <input type="text" name="name" placeholder="Escribe aquí..." />
      </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  test('it works disabled', () => {
    const {container} = render(
      <ThemeProvider theme={theme}>
          <input type="text" name="name" placeholder="Escribe aquí..." />
     </ThemeProvider>
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
