/* eslint-disable @typescript-eslint/no-unused-vars */
import { cleanup, render, RenderResult } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header'
import { theme } from '../style/Theme'
expect.extend(toHaveNoViolations)

describe('Header component', () => {
  let wrapper: RenderResult

  beforeEach(() => {
    wrapper = render(
      <ThemeProvider theme={theme}>
        <Header />
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

  describe('Name and tagline', () => {
    it('Has info about me', () => {
      const name = wrapper.getByTestId('name')
      const tagline = wrapper.getByTestId('tagline')

      expect(name.textContent).toBe('Zbigniew Żołnierowicz')
      expect(tagline.textContent).toBe('One hell of a web developer')
    })

    it('My name has a class making it big', () => {
      const name = wrapper.getByTestId('name')

      expect(name.className).toBe('big')
    })

    it('My tagline has a class making it small', () => {
      const name = wrapper.getByTestId('tagline')

      expect(name.className).toBe('small')
    })
  })

  describe('My face', () => {
    it('Has a proper src', () => {
      const image = wrapper.getByTestId('face')
      expect(image.attributes.getNamedItem('src')?.value).toBe('https://placekitten.com/200/200')
    })

    it('Has a proper alt', () => {
      const image = wrapper.getByTestId('face')
      expect(image.attributes.getNamedItem('alt')?.value)
        .toBe('face of the creator of this website')
    })

    it('Has the proper size attributes', () => {
      const image = wrapper.getByTestId('face')
      expect(image.attributes.getNamedItem('width')?.value).toBe('200')
      expect(image.attributes.getNamedItem('height')?.value).toBe('200')
    })
  })
})

export {}
