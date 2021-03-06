import '../.jest/next-image.mock'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../src/styles/global'
import theme from 'styles/theme'

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: theme.colors.white,
      },
      {
        name: 'dark',
        value: theme.colors.mainBg,
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
