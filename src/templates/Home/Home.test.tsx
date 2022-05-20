import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import Home from '.'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Main', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Main"></div>
    }
  }
})

jest.mock('components/Services', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Services"></div>
    }
  }
})

jest.mock('components/About', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock About"></div>
    }
  }
})

jest.mock('components/Technologies', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Technologies"></div>
    }
  }
})

jest.mock('components/Portfolio', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Portfolio"></div>
    }
  }
})

describe('Home component', () => {
  it('should render correctly', () => {
    render(<Home />)

    const checkMainComponent = screen.getByTestId(/Mock Main/i)
    expect(checkMainComponent).toBeInTheDocument()

    const checkServicesComponent = screen.getByTestId(/Mock Services/i)
    expect(checkServicesComponent).toBeInTheDocument()

    const checkAboutComponent = screen.getByTestId(/Mock About/i)
    expect(checkAboutComponent).toBeInTheDocument()

    const checkTechnologies = screen.getByTestId(/Mock Technologies/i)
    expect(checkTechnologies).toBeInTheDocument()

    const checkPortfolio = screen.getByTestId(/Mock Portfolio/i)
    expect(checkPortfolio).toBeInTheDocument()
  })
})
