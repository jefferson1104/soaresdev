import { render } from 'utils/test-utils'
import { screen } from '@testing-library/react'

import Services from '.'

describe('Services component', () => {
  it('should render the heading', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', { name: /serviços/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /front-end/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /back-end/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /ui/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /seo/i })).toBeInTheDocument()
  })
})
