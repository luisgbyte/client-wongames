import CardList, { CartListProps } from '.'

import { Story, Meta } from '@storybook/react'

import mockItems from './mock'

export default {
  title: 'CardList',
  component: CardList,
  args: {
    items: mockItems,
    total: 'R$ 330, 00'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CardList {...args} />
  </div>
)

export const withButton: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CardList {...args} hasButton />
  </div>
)

export const Empty: Story<CartListProps> = () => (
  <div style={{ maxWidth: 800 }}>
    <CardList />
  </div>
)
