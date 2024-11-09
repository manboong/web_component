import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@radix-ui/themes';
import LongTextInput from './LongTextInput';

const meta = {
  title: 'intput/LongTextInput',
  component: LongTextInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators:[
    (Story) => (
      <Theme>
        <Story/>
      </Theme>
    ),
  ],
  args: {
    placeholder: "placeholder",
    maxwidth: "480px",
    size: "2",
  },
} satisfies Meta<typeof LongTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};