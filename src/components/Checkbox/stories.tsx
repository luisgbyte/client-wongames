import Checkbox, { CheckboxProps } from '.'

import { Story, Meta } from '@storybook/react'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Basic: Story<CheckboxProps> = (args) => (
  <Checkbox isChecked {...args} />
)
