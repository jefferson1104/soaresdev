import { Story, Meta } from '@storybook/react/types-6-0'
import { User } from '@styled-icons/boxicons-solid'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'My Button'
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  children: 'My button',
  icon: <User />
}

export const withSmall: Story = (args) => <Button {...args} />

withSmall.args = {
  children: 'My button',
  size: 'small'
}

export const withSecondaryColor: Story = (args) => <Button {...args} />

withSecondaryColor.args = {
  children: 'My button',
  color: 'secondary'
}

export const asLink: Story = (args) => <Button {...args} />

asLink.args = {
  children: 'Link button',
  as: 'a',
  href: '/link'
}
