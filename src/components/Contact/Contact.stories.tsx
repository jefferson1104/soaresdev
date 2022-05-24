import { Story, Meta } from '@storybook/react/types-6-0'
import Contact from '.'

export default {
  title: 'Contact',
  component: Contact
} as Meta

export const Basic: Story = (args) => <Contact {...args} />
