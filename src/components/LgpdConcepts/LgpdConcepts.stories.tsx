import { Story, Meta } from '@storybook/react/types-6-0'
import LgpdConcepts from '.'

export default {
  title: 'LgpdConcepts',
  component: LgpdConcepts
} as Meta

export const Basic: Story = (args) => <LgpdConcepts {...args} />
