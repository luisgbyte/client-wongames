import PaymentOptions, { PaymentOptionsProps } from '.'

import { Story, Meta } from '@storybook/react'

import cardsMock from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: cardsMock
  }
} as Meta

export const Basic: Story<PaymentOptionsProps> = (args) => (
  <PaymentOptions {...args} />
)
