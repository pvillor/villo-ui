import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@villo/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/pvillor.png',
    alt: 'Paulo Victor',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
