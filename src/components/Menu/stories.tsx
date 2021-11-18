import Menu, { MenuProps } from '.'

import { Story, Meta } from '@storybook/react'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Basic: Story<MenuProps> = (args) => <Menu {...args} />

Basic.parameters = {
  layout: 'fullscreen',
  backgrounds: {
    default: 'won-dark'
  }
}
