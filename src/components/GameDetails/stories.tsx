import GameDetails from '.'

import { Story, Meta } from '@storybook/react'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails />
  </div>
)
