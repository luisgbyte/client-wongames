import CartIcon, { CartIconsProps } from '.'

import { Story, Meta } from '@storybook/react'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story = () => <CartIcon />

export const withItems: Story<CartIconsProps> = (args) => <CartIcon {...args} />

withItems.args = {
  quantity: 5
}
