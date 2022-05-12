import GameInfo from '.'

import { Story, Meta } from '@storybook/react'

export default {
  title: 'GameInfo',
  component: GameInfo
} as Meta

export const Basic: Story = () => <GameInfo />
