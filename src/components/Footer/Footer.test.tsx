import { render, screen } from 'utils/test-utils'

import Footer from '.'

describe('Footer component', () => {
  it('should render correctly', () => {
    render(<Footer />)

    expect(
      screen.getByRole('img', { name: /Logo soaresdev/i })
    ).toBeInTheDocument()
    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(
      screen.getByText(/Todos os direitos reservados./i)
    ).toBeInTheDocument()
  })
})
