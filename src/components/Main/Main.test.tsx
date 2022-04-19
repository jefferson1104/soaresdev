import { render } from 'utils/test-utils'
import { screen } from '@testing-library/react'

import Main from '.'

jest.mock('components/Background', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Background"></div>
    }
  }
})

jest.mock('components/Container', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Container">{children}</div>
    }
  }
})

jest.mock('components/Logo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Logo"></div>
    }
  }
})

describe('Main component', () => {
  it('should render correctly', () => {
    render(<Main />)

    const mainBackgroundComponent = screen.getByTestId(/Mock Background/i)
    expect(mainBackgroundComponent).toBeInTheDocument()

    const containerComponent = screen.getByTestId(/Mock Container/i)
    expect(containerComponent).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Desenvolvimento de software/i
      })
    ).toBeInTheDocument()
  })
})
