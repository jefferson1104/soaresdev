import { Story, Meta } from '@storybook/react/types-6-0'
import Technologies from '.'

export default {
  title: 'Technologies',
  component: Technologies
} as Meta

export const Basic: Story = (args) => <Technologies {...args} />
