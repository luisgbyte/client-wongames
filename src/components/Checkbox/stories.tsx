import Checkbox, { CheckboxProps } from '.'

import { Story, Meta } from '@storybook/react'

export default {
  title: 'Checkbox',
  component: Checkbox
} as Meta

export const Basic: Story<CheckboxProps> = (args) => <Checkbox {...args} />
