import { Story, Meta } from '@storybook/react'
import TextContent, { TextContentProps } from '.'
import textMock from './mock'

export default {
  title: 'TextContent',
  component: TextContent,
  args: textMock,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Basic: Story<TextContentProps> = (args) => (
  <TextContent {...args} />
)
