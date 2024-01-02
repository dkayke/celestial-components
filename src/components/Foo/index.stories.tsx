import type { Meta, StoryObj } from '@storybook/react'
import Foo from './'

const meta = {
  title: 'Example/Foo',
  component: Foo,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Foo>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    type: 'A'
  }
}

export const Secondary: Story = {
  args: {
    type: 'B'
  }
}
