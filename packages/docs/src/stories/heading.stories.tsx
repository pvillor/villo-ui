import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@villo/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'h1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, heading will always be `h2`, but we can change it with property `as`',
      },
    },
  },
}