import GameInfo, { GameInfoProps } from '.'

import { Story, Meta } from '@storybook/react'

export default {
  title: 'GameInfo',
  component: GameInfo,
  args: {
    title: 'Borderlands',
    description: 'Game Description',
    price: '210,00'
  }
} as Meta

export const Basic: Story<GameInfoProps> = (args) => (
  <div>
    <GameInfo {...args} />
  </div>
)
