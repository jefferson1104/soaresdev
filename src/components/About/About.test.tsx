import { render, screen } from 'utils/test-utils'
import 'jest-styled-components'

import About from '.'

describe('About component', () => {
  it('should render correctly', () => {
    const { container } = render(<About />)

    const checkSectionId = container.querySelector('section')
    expect(checkSectionId).toHaveAttribute('id', 'about')

    const checkTitle = screen.getByRole('heading', { name: /sobre nós/i })
    expect(checkTitle).toBeInTheDocument()

    const checkParagraph = screen.getByText(/Lorem Ipsum is/i)
    expect(checkParagraph).toBeInTheDocument()

    const checkBackgroundImage = screen.getByRole('img', {
      name: /parallax-banner/i
    })
    expect(checkBackgroundImage).toBeInTheDocument()
  })
})
