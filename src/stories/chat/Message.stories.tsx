import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Theme, Box, Flex } from "@radix-ui/themes"
import Message from '../../components/chat/Message';
import "@radix-ui/themes/styles.css"

const meta = {
  title: 'ChatComponent/Message',
  component: Message,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <Theme>
            <Flex maxWidth={{initial: '100vw', sm: '500px'}}>
                <Story />
            </Flex>
      </Theme>
    )
  ],
  args: {
    content: "This is message content",
    direction: "outgoing",
  },
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Inbound: Story = {
  args: {
    content: "This is message content",
    direction: "inbound",
    sentAt: new Date(),
    unread: 2,
  },
};

export const LongInbound: Story = {
    args: {
        content: "This is message content This is message content This is message content",
        direction: "inbound",
      sentAt: new Date(),
      unread: 1,
    },
  };

export const LongOutbound: Story = {
    args: {
        content: "This is message content This is message content This is message content",
        direction: "outgoing",
        sentAt: new Date(),
        unread: 1
    },
};

export const WithoutUnread: Story = {
    args: {
        content: 'short message',
        direction: 'outgoing',
        sentAt: new Date(),
    }
}

export const WithoutTime: Story = {
    args: {
        content: 'short message',
        direction: 'outgoing',
        unread: 1,
    }
}