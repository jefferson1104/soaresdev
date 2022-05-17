import { render } from 'utils/test-utils'

import PortfolioCard from '.'

const mockInfo = {
  name: 'soaresdev',
  description:
    'Uma linda landing page para uma empresa de desenvolvimento de sistemas',
  image:
    'https://images.unsplash.com/photo-1577741314755-048d8525d31e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  github: 'https://github.com',
  link: 'https://google.com'
}

jest.mock('components/Container', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Container">{children}</div>
    }
  }
})

describe('PortfolioCard component', () => {
  it('should render correctly', () => {
    render(
      <PortfolioCard
        name={mockInfo.name}
        description={mockInfo.description}
        image={mockInfo.image}
        github={mockInfo.github}
        link={mockInfo.link}
      />
    )
  })
})
