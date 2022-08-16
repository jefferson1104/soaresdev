export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem',
    bigRadius: '0.8rem'
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxsmall: '1.2rem',
      xsmall: '1.4rem',
      small: '1.6rem',
      medium: '1.8rem',
      mediumSmall: '2.0rem',
      large: '2.5rem',
      xlarge: '3rem',
      xxlarge: '3.5rem',
      huge: '5.0rem'
    }
  },
  colors: {
    primary: '#4bbecf',
    secondary: '#2E2F42',
    mainBg: '#1d1b27',
    lightBg: '#F2F2F2',
    white: '#FAFAFA',
    black: '#05060c',
    darkBlue: '#030517',
    gray: '#8F8F8F',
    lightGray: '#b3b3b3',
    darkGray: '#272530',
    red: '#e74c3c'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    huge: '12rem',
    super: '20rem'
  },
  paddings: {
    xsmall: '0.5rem',
    small: '0.625rem',
    medium: '1.25rem',
    large: '2rem',
    xlarge: '2.5rem',
    huge: '6.5rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.5s all ease-in-out',
    fast: '0.1s ease-in-out'
  }
} as const
