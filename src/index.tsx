import React from 'react'
import { render } from 'react-snapshot'
import { App } from './App'
import reportWebVitals from './reportWebVitals'
import { Global } from './style/Global'
import { ThemeProvider } from 'styled-components'
import { theme } from './style/Theme'
import 'typeface-space-mono'
import ReactDOM from 'react-dom'

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

if (process.env.NODE_ENV !== 'production') {
  import('@axe-core/react').then(({ default: axe }) => {
    axe(React, ReactDOM, 1000)
  })
  reportWebVitals(console.log)
}
