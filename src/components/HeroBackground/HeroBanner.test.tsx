import { render, screen } from '@testing-library/react'

import HeroBanner from '.'

describe('HeroBanner component', () => {
  it('should render correctly background svg', () => {
    const { container } = render(<HeroBanner />)

    const svgImage = screen.getByTestId('svg-hero')
    expect(svgImage).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
