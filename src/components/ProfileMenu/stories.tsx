import ProfileMenu from '.'

import { Story, Meta } from '@storybook/react'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story = () => <ProfileMenu />
