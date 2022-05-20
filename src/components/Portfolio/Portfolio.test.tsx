import 'match-media-mock'
import { render } from 'utils/test-utils'

import Portfolio from '.'

describe('Portfolio component', () => {
  it('should render the heading', () => {
    render(<Portfolio />)
  })
})
