import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Theme, Box, Flex } from "@radix-ui/themes"
import ChatPage from '../../pages/ChatPage';
import "@radix-ui/themes/styles.css"

const meta = {
  title: 'ChatComponent/ChatPage',
  component: ChatPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <Theme>
            <Story />
      </Theme>
    )
  ],
  args: {

  },
} satisfies Meta<typeof ChatPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
