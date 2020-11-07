import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import Pages from './Pages'
import defaultTheme from './theme'
const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
  }
`
ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
