import Dropdown, { DropdownProps } from '.'

import { Story, Meta } from '@storybook/react'

export default {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<DropdownProps> = (args) => <Dropdown {...args} />

Basic.args = {
  title: 'Click here',
  children: 'content'
}
