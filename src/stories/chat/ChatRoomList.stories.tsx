import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Theme, Box, Flex } from "@radix-ui/themes"
import ChatRoomList from '../../components/chat/ChatRoomList';
import "@radix-ui/themes/styles.css"

const meta = {
  title: 'ChatComponent/ChatRoomList',
  component: ChatRoomList,
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
} satisfies Meta<typeof ChatRoomList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
