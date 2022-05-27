import { Story, Meta } from '@storybook/react/types-6-0'
import Input, { InputProps } from '.'

export default {
  title: 'Input',
  component: Input,
  args: {
    initialValue: '',
    placeholder: 'john.doe@example.com'
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta

export const Default: Story<InputProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <Input {...args} />
  </div>
)

export const withError: Story<InputProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <Input {...args} />
  </div>
)

withError.args = {
  error: 'Ops...something is wrong'
}

export const withLabel: Story<InputProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <Input {...args} />
  </div>
)

withLabel.args = {
  label: 'E-mail',
  name: 'email'
}
