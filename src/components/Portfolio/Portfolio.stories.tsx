import { Story, Meta } from '@storybook/react/types-6-0'
import Portfolio from '.'

export default {
  title: 'Portfolio',
  component: Portfolio
} as Meta

export const Basic: Story = (args) => <Portfolio {...args} />
