import { render } from 'utils/test-utils'
import { screen } from '@testing-library/react'

import Home from '.'

jest.mock('components/Main', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Main"></div>
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

jest.mock('components/Services', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Services"></div>
    }
  }
})

describe('Home component', () => {
  it('should render the heading', () => {
    render(<Home />)

    const mainComponent = screen.getByTestId(/Mock Main/i)
    expect(mainComponent).toBeInTheDocument()

    const containerComponent = screen.getByTestId(/Mock Container/i)
    expect(containerComponent).toBeInTheDocument()

    const servicesComponent = screen.getByTestId(/Mock Services/i)
    expect(servicesComponent).toBeInTheDocument()
  })
})