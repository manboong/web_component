import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Theme, Box, Flex, Container } from "@radix-ui/themes"
import MessageList from '../../components/chat/MessageList';
import "@radix-ui/themes/styles.css"

const meta = {
  title: 'ChatComponent/MessageList',
  component: MessageList,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <Theme>
          <Container size={{initial: "1", xs: "2"}}>
            <Box flexGrow="1" flexShrink="1">
              <Story />
            </Box>
          </Container>
      </Theme>
    )
  ],
  args: {

  },
} satisfies Meta<typeof MessageList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
