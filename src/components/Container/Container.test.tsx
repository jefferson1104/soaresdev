import { render } from '@testing-library/react'

import Container from '.'

describe('Container component', () => {
  it('should render container component', () => {
    const { container } = render(<Container />)

    expect(container.firstChild).toHaveStyle('max-width: 130rem')

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        height: 100%;
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div
        class="c0"
      />
    `)
  })
})
