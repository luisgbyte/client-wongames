import OrdersList, { OrdersListProps } from '.'

import { Story, Meta } from '@storybook/react'

import itemsMock from './mock'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: itemsMock
  }
} as Meta

export const Basic: Story<OrdersListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
)
