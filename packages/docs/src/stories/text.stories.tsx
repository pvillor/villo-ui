import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@villo/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, porro labore quidem excepturi error soluta culpa necessitatibus laudantium voluptatum illo eveniet impedit veritatis deleniti reiciendis nisi inventore, tempora natus exercitationem!',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
