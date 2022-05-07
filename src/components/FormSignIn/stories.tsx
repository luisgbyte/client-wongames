import FormSignIn from '.'

import { Story, Meta } from '@storybook/react'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn
} as Meta

export const Basic: Story = () => (
  <div style={{ width: 300, margin: 'auto' }}>
    <FormSignIn />
  </div>
)
