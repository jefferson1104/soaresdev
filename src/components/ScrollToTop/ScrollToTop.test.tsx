import { render, screen, fireEvent } from 'utils/test-utils'

import ScrollToTop from '.'

describe('ScrollToTop component', () => {
  it('should render correctly', () => {
    render(<ScrollToTop />)

    const checkSVG = screen.getByTitle(/subir para o topo/i)
    expect(checkSVG).toBeInTheDocument()
  })

  it('should click to scroll to top', () => {
    window.scrollTo = jest.fn()

    render(<ScrollToTop />)

    const scroll = screen.getByTitle(/subir para o topo/i)
    fireEvent.click(scroll)

    expect(window.scrollTo).toBeCalled()
  })
})
