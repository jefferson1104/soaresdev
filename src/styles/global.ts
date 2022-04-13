import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    // background-color: #121214;
    background-color: #1d1b27;
    color: #FAFAFA;
  }
`

export default GlobalStyles
