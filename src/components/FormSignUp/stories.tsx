import FormSignUp from '.'

import { Story, Meta } from '@storybook/react'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp
} as Meta

export const Basic: Story = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignUp />
  </div>
)
