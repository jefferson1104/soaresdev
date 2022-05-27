import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local(''),
      url('/fonts/poppins-v15-latin-300.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''),
      url('/fonts/poppins-v15-latin-regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local(''),
      url('/fonts/poppins-v15-latin-600.woff2') format('woff2');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html, body, #__next {
    height: 100%;
    scroll-behavior: smooth;
  }

  ${({ theme, removeBg }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      ${!removeBg &&
      css`
        background-color: ${theme.colors.mainBg};
        color: ${theme.colors.white};
      `}
    }
    a {
      text-decoration: none;
    }
  `}

  /* CUSTOM SCROLLBAR */
  body::-webkit-scrollbar {
    width: .6rem;
    height: .6rem;
  }

  body::-webkit-scrollbar-track {
    background: #2E2F42;
    // box-shadow: inset 0.05em 0 0 #838383;
  }

  body::-webkit-scrollbar-thumb {
    background: #4bbecf;
    border-radius: 0.5rem;
    box-shadow: inset 0.5rem 0.1rem 0.1rem rgba(255, 255, 255, 0.5), inset -0.5rem -0.1rem -0.1rem  rgba(0, 0, 0, 0.3);
  }
`

export default GlobalStyles
