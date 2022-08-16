import { render, screen } from 'utils/test-utils'
import 'jest-styled-components'

import About from '.'

describe('About component', () => {
  it('should render correctly', () => {
    const { container } = render(<About />)

    const checkSectionId = container.querySelector('section')
    expect(checkSectionId).toHaveAttribute('id', 'about')

    const checkTitle = screen.getByRole('heading', { name: /sobre/i })
    expect(checkTitle).toBeInTheDocument()

    const checkParagraph = screen.getByText(
      /iniciei minha jornada como programador na web em 2011/i
    )
    expect(checkParagraph).toBeInTheDocument()

    const checkBackgroundImage = screen.getByRole('img', {
      name: /parallax-banner/i
    })
    expect(checkBackgroundImage).toBeInTheDocument()
  })
})
