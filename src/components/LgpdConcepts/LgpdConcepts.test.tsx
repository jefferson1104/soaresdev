import { render, screen } from 'utils/test-utils'
import { fireEvent } from '@testing-library/react'

import LgpdConcepts from '.'

describe('LgpdConcepts component', () => {
  it('should render correctly', () => {
    render(<LgpdConcepts />)

    expect(
      screen.getByText(/Coletamos cookies para entregar/i)
    ).toBeInTheDocument()
  })

  it('should render without lgpd concepts after clicking the button', () => {
    render(<LgpdConcepts />)

    fireEvent.click(screen.getByRole('button', { name: /aceitar/i }))

    expect(
      screen.queryByText(/Coletamos cookies para entregar/i)
    ).not.toBeInTheDocument()
  })
})
