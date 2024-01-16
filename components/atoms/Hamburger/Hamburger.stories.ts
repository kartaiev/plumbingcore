import type { Meta, StoryObj } from '@storybook/react'

import { Hamburger } from '.'

const meta = {
  title: 'atoms/Hamburger',
  component: Hamburger,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hamburger>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
