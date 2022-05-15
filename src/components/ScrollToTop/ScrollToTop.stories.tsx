import { Story, Meta } from '@storybook/react/types-6-0'
import ScrollToTop from '.'

export default {
  title: 'ScrollToTop',
  component: ScrollToTop,
  args: {
    scrollState: true
  }
} as Meta

export const Basic: Story = (args) => (
  <div style={{ height: '100rem' }}>
    <ScrollToTop {...args} />
  </div>
)
