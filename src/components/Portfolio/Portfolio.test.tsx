import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import Portfolio from '.'

jest.mock('components/Container', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Container">{children}</div>
    }
  }
})

jest.mock('components/PortfolioCard', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock PortfolioCard"></div>
    }
  }
})

describe('Portfolio component', () => {
  it('should render correctly', () => {
    render(<Portfolio />)

    const containerComponent = screen.getByTestId(/Mock Container/i)
    expect(containerComponent).toBeInTheDocument()

    const porfolioCardComponent = screen.getAllByTestId(/Mock PortfolioCard/i)
    expect(porfolioCardComponent).toHaveLength(10)

    expect(
      screen.getByRole('heading', { name: /Portfolio/i })
    ).toBeInTheDocument()
  })
})
