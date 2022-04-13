import { render, screen } from '@testing-library/react'

import Main from '.'

describe('Main component', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /SoaresDev.com/i })
    ).toBeInTheDocument()
  })

  /* it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#fff' })
  }) */
})
