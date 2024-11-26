import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Theme, Box, Flex } from "@radix-ui/themes"
import InputBox from '../../components/chat/InputBox';
import "@radix-ui/themes/styles.css"

const meta = {
  title: 'ChatComponent/InputBox',
  component: InputBox,
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
    onChange: (e) => (console.log(e.target.value)),
    onSend: (e) => {console.log("Send")},
    placeholder: "type here",
    disabled: false,
  },
} satisfies Meta<typeof InputBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
