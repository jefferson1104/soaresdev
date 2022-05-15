import { render, screen } from 'utils/test-utils'
import 'jest-styled-components'

import About from '.'

describe('About component', () => {
  it('should render correctly', () => {
    render(<About />)

    const checkTitle = screen.getByRole('heading', { name: /sobre nós/i })
    const checkParagraph = screen.getByText(/Lorem Ipsum is/i)
    const checkBackgroundImage = screen.getByRole('img', {
      name: /parallax-banner/i
    })

    expect(checkTitle).toBeInTheDocument()
    expect(checkParagraph).toBeInTheDocument()
    expect(checkBackgroundImage).toBeInTheDocument()
  })

  // it('should render with mobile params', () => {
  //   render(<About />)

  //   const checkParagraphSize = screen.getByText(/Lorem Ipsum is/i)
  //   expect(checkParagraphSize).toHaveStyleRule('font-size', '1.6rem', {
  //     media: '(max-width: 768px)'
  //   })
  // })
})
