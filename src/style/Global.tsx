import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    min-width: 100%;
  }

  html {
    font-family: ${({ theme }) => theme.fontFamily['sans-serif']};
    font-size: 12pt;
  }
`
