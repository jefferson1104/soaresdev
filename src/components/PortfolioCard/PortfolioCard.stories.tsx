import { Story, Meta } from '@storybook/react/types-6-0'
import PortfolioCard, { PortfolioCardProps } from '.'

const mockInfo = {
  image:
    'https://images.unsplash.com/photo-1577741314755-048d8525d31e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  title: 'soaresdev',
  description:
    'Uma linda landing page para uma empresa de desenvolvimento de sistemas',

  github: 'https://github.com',
  link: 'https://google.com'
}

export default {
  title: 'PortfolioCard',
  component: PortfolioCard
} as Meta

export const Default: Story<PortfolioCardProps> = (args) => (
  <PortfolioCard {...args} />
)

Default.args = {
  image: mockInfo.image,
  title: mockInfo.title,
  description: mockInfo.description
}

export const withLinks: Story<PortfolioCardProps> = (args) => (
  <PortfolioCard {...args} />
)

withLinks.args = {
  image: mockInfo.image,
  title: mockInfo.title,
  description: mockInfo.description,
  github: mockInfo.github,
  link: mockInfo.link
}
