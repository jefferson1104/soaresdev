import { Story, Meta } from '@storybook/react/types-6-0'
import Services from '.'

export default {
  title: 'Services',
  component: Services
} as Meta

export const Basic: Story = (args) => <Services {...args} />
