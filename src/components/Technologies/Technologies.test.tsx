import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import Technologies from '.'

describe('Technologies component', () => {
  it('should render correctly', () => {
    const { container } = render(<Technologies />)

    const checkSectionId = container.querySelector('section')
    expect(checkSectionId).toHaveAttribute('id', 'technologies')

    const checkSectionTitle = screen.getByRole('heading', {
      name: /tecnologias/i
    })
    expect(checkSectionTitle).toBeInTheDocument()

    const checkCardTitle = screen.getByRole('heading', {
      name: /nodejs/i
    })
    expect(checkCardTitle).toBeInTheDocument()

    const checkCardSubtitle = screen.getByRole('heading', {
      name: /back-end/i
    })
    expect(checkCardSubtitle).toBeInTheDocument()

    const checkCardParagraph = screen.getByText(
      /Node.js, an event-driven asynchronous/i
    )
    expect(checkCardParagraph).toBeInTheDocument()
  })
})
