import { render, screen } from 'utils/test-utils'
import { User } from '@styled-icons/boxicons-solid'

import Button from '.'

describe('Button component', () => {
  it('should render the medium size by default', () => {
    render(<Button>Buy now</Button>)

    const button = screen.getByRole('button', { name: /Buy now/i })

    expect(button).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.6rem'
    })
  })

  it('should render the small size', () => {
    render(<Button size="small">Buy now</Button>)

    const button = screen.getByRole('button', { name: /Buy now/i })

    expect(button).toHaveStyle({
      height: '3rem',
      'font-size': '1.4rem'
    })
  })

  it('should render the large size', () => {
    render(<Button size="large">Buy now</Button>)

    const button = screen.getByRole('button', { name: /Buy now/i })

    expect(button).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.8rem'
    })
  })

  it('should render fullWidth version', () => {
    render(<Button fullWidth>Buy now</Button>)

    const button = screen.getByRole('button', { name: /Buy now/i })

    expect(button).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    render(<Button icon={<User data-testid="icon" />}>Buy now</Button>)

    const button = screen.getByText(/buy now/i)
    const icon = screen.getByTestId('icon')

    expect(button).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('should render a minimal version', () => {
    render(
      <Button icon={<User data-testid="icon" />} minimal>
        Buy now
      </Button>
    )

    const button = screen.getByRole('button', { name: /buy now/i })
    expect(button).toHaveStyleRule('filter', 'none', { modifier: ':hover' })
  })

  it('should render a disabled button', () => {
    render(<Button disabled>Buy now</Button>)

    const button = screen.getByRole('button', { name: /buy now/i })

    expect(button).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled'
    })
  })

  it('should render button as a link', () => {
    render(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    const button = screen.getByRole('link', { name: /buy now/i })

    expect(button).toHaveAttribute('href', '/link')
  })
})
