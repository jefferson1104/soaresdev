import { render, screen } from '@testing-library/react'

import Background from '.'

describe('Background component', () => {
  it('should render correctly background svg', () => {
    const { container } = render(<Background />)

    const svgImage = screen.getByTestId('svg-hero')
    expect(svgImage).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
