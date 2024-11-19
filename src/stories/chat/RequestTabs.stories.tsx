import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Theme, Box } from "@radix-ui/themes"
import RequestTabs from '../../components/chat/RequestTabs';
import "@radix-ui/themes/styles.css"

const meta = {
  title: 'ChatComponent/RequestTabs',
  component: RequestTabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <Theme>
        <Box maxHeight="400px">
            <Story />
        </Box>
      </Theme>
    )
  ],
  args: {
    requestList: [1],
    orientation: "horizontal",
  },
} satisfies Meta<typeof RequestTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Horizontal: Story = {
  args: {
    requestList: [1, 2, 3],
    orientation: "horizontal",
  },
};


export const Vertical: Story = {
    args: {
      requestList: [1, 2, 3],
      orientation: "vertical",
    },
  };
  
  