import { Story, Meta } from '@storybook/react/types-6-0'
import Textarea, { TextAreaProps } from '.'

export default {
  title: 'Textarea',
  component: Textarea,
  args: {
    initialValue: '',
    placeholder: 'type your message'
  },
  argTypes: {
    onInput: { action: 'changed' }
  }
} as Meta

export const Default: Story<TextAreaProps> = (args) => (
  <div style={{ maxWidth: 500, padding: 15 }}>
    <Textarea {...args} />
  </div>
)

export const withError: Story<TextAreaProps> = (args) => (
  <div style={{ maxWidth: 500, padding: 15 }}>
    <Textarea {...args} />
  </div>
)

withError.args = {
  error: 'Ops...something is wrong'
}

export const withLabel: Story<TextAreaProps> = (args) => (
  <div style={{ maxWidth: 500, padding: 15 }}>
    <Textarea {...args} />
  </div>
)

withLabel.args = {
  label: 'Message',
  name: 'message'
}
