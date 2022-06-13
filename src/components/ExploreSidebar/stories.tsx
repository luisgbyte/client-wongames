import ExploreSidebar from '.'

import { Story, Meta } from '@storybook/react'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story = () => <ExploreSidebar />
