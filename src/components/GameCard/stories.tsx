import GameCard, { GameCardProps } from '.'

import { Story, Meta } from '@storybook/react'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstart Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200,00'
  },
  argTypes: {
    onFav: { action: 'clickd' }
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Basic: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <GameCard {...args} />
  </div>
)
