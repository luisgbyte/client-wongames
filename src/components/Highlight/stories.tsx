import Highlight, { HighlightProps } from '.'

import { Story, Meta } from '@storybook/react'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: `Read dead it's back`,
    subtitle: `Come see John's new adventures`,
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
} as Meta

export const Basic: Story<HighlightProps> = (args) => <Highlight {...args} />
