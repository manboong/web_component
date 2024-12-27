import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ChatPage from '../../pages/ChatPage';

const meta = {
  title: 'ChatComponent/ChatPage',
  component: ChatPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {

  },
} satisfies Meta<typeof ChatPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
