import GameItem, { GameItemProps } from '.'

import { Story, Meta } from '@storybook/react'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} as Meta

export const Basic: Story<GameItemProps> = (args) => <GameItem {...args} />
