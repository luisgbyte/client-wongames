import Highlight, { HighlightProps } from '.'

import { Story, Meta } from '@storybook/react'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: `Read dead it's back`,
    subtitle: `Come see John's new adventures`,
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
} as Meta

export const Basic: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
