import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('Logo component', () => {
  it('should render logo component with default props values', () => {
    render(<Logo />)

    expect(screen.getByRole('img', { name: /soaresdev/i })).toBeInTheDocument()
  })

  it('should render normal size', () => {
    render(<Logo size="normal" />)

    expect(screen.getByRole('img', { name: /soaresdev/i })).toHaveStyle(
      'width: 35rem'
    )
  })

  it('should render small size', () => {
    render(<Logo size="small" />)

    expect(screen.getByRole('img', { name: /soaresdev/i })).toHaveStyle(
      'width: 20rem'
    )
  })
})
