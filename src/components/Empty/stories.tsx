import Empty, { EmptyProps } from '.'

import { Story, Meta } from '@storybook/react'

export default {
  title: 'Empty',
  component: Empty,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<EmptyProps> = (args) => <Empty {...args} />

Basic.args = {
  title: 'Your wishlist is empty',
  description: 'Games added to your wishlist will appear here',
  hasLink: true
}
