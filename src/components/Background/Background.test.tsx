import { render, screen } from '@testing-library/react'

import Background from '.'

describe('MainBackground component', () => {
  it('should render correctly background svg', () => {
    const { container } = render(<Background />)

    const svgImage = screen.getByTestId('svg-hero')
    expect(svgImage).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
