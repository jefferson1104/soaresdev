import { render, screen } from 'utils/test-utils'

import Contact from '.'

describe('Button component', () => {
  it('should render correctly', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Contato'
    )

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Informações de contato'
    )
  })
})
