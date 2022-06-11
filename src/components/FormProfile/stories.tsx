import FormProfile from '.'

import { Story, Meta } from '@storybook/react'

export default {
  title: 'Form/FormProfile',
  component: FormProfile
} as Meta

export const Basic: Story = () => (
  <div style={{ maxWidth: 860, margin: 'auto' }}>
    <FormProfile />
  </div>
)
