import { Story, Meta } from '@storybook/react/types-6-0'
import PortfolioCard from '.'

export default {
  title: 'PortfolioCard',
  component: PortfolioCard
} as Meta

export const Basic: Story = (args) => <PortfolioCard {...args} />
