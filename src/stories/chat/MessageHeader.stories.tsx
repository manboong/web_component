import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Theme, Box, Flex } from "@radix-ui/themes"
import MessageHeader from '../../components/chat/MessageHeader';
import "@radix-ui/themes/styles.css"

const meta = {
  title: 'ChatComponent/MessageHeader',
  component: MessageHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <Theme>
        <Box width="200px">
            <Story />
        </Box>
      </Theme>
    )
  ],
  args: {
    onClickArrow: () => alert('test'),
    username: "User name"
  },
} satisfies Meta<typeof MessageHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
