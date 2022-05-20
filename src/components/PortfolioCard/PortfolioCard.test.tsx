import { render, screen } from 'utils/test-utils'

import PortfolioCard from '.'

const mockInfo = {
  image:
    'https://images.unsplash.com/photo-1577741314755-048d8525d31e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  title: 'soaresdev',
  description:
    'Uma linda landing page para uma empresa de desenvolvimento de sistemas',

  github: 'https://github.com',
  link: 'https://google.com'
}

describe('PortfolioCard component', () => {
  it('should render correctly', () => {
    render(
      <PortfolioCard
        image={mockInfo.image}
        title={mockInfo.title}
        description={mockInfo.description}
      />
    )

    const checkImage = screen.getByAltText('soaresdev')
    expect(checkImage).toBeInTheDocument()

    const checkTitle = screen.getByRole('heading', { name: /soaresdev/i })
    expect(checkTitle).toBeInTheDocument()

    const checkDescription = screen.getByText(/Uma linda landing page/i)
    expect(checkDescription).toBeInTheDocument()
  })

  it('should render with a links', () => {
    render(
      <PortfolioCard
        image={mockInfo.image}
        title={mockInfo.title}
        description={mockInfo.description}
        github={mockInfo.github}
        link={mockInfo.link}
      />
    )

    const checkGithubLink = screen.getByRole('link', { name: /Github/i })
    expect(checkGithubLink).toBeInTheDocument()

    const checkLink = screen.getByRole('link', { name: /Acesse/i })
    expect(checkLink).toBeInTheDocument()
  })

  it('should render with small size', () => {
    const { container } = render(
      <PortfolioCard
        image={mockInfo.image}
        title={mockInfo.title}
        description={mockInfo.description}
        github={mockInfo.github}
        link={mockInfo.link}
        size="small"
      />
    )

    expect(container.firstChild).toHaveStyle({
      width: '320px',
      height: '430px'
    })

    expect(screen.getByRole('heading', { name: /soaresdev/i })).toHaveStyle({
      fontSize: '2.0rem'
    })

    expect(screen.getByText(/Uma linda landing page/i)).toHaveStyle({
      fontSize: '1.6rem'
    })
  })
})
