import { render, screen } from 'utils/test-utils'

import Loading from '.'

describe('Loading component', () => {
  it('should render correctly', () => {
    const { container } = render(<Loading />)

    expect(container.firstChild).toHaveStyle({ width: '120px', height: '75px' })
  })

  it('should render with text', () => {
    render(<Loading text="Loading" />)

    expect(screen.getByText('Loading')).toBeInTheDocument()
  })

  it('should render with no text', () => {
    render(<Loading />)

    expect(screen.queryByText('Loading')).not.toBeInTheDocument()
  })
})
