import { Story, Meta } from '@storybook/react'
import CardsList, { CardsListProps } from '.'

import cardsMock from 'components/PaymentOptions'

export default {
  title: 'Profile/CardsList',
  component: CardsList,
  args: {
    cards: cardsMock
  }
} as Meta

export const Basic: Story<CardsListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CardsList {...args} />
  </div>
)
