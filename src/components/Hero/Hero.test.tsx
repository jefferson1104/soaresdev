import { render, screen } from 'utils/test-utils'

import Hero from '.'

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

describe('Hero component', () => {
  it('should render correctly', () => {
    render(<Hero />)

    const heroBackgroundComponent = screen.getByTestId(/Mock Background/i)
    expect(heroBackgroundComponent).toBeInTheDocument()

    const containerComponent = screen.getByTestId(/Mock Container/i)
    expect(containerComponent).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Desenvolvimento de software/i
      })
    ).toBeInTheDocument()
  })
})
