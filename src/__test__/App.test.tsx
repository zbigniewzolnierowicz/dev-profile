/* eslint-disable @typescript-eslint/no-unused-vars */
import { cleanup, render, RenderResult } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { ThemeProvider } from 'styled-components'
import { App } from '../App'
import { theme } from '../style/Theme'
expect.extend(toHaveNoViolations)

describe('App component', () => {
  let wrapper: RenderResult

  beforeEach(() => {
    wrapper = render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    )
  })

  afterEach(() => {
    cleanup()
  })

  it("Doesn't have any accessibility issues", async () => {
    const { container } = wrapper
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })

  it('Has the correct title', () => {
    expect(document.title).toBe("Zbigniew Żołnierowicz")
  })
})

export {}
