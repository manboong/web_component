import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@radix-ui/themes';
import ShortTextInput from './ShortTextInput';

const meta = {
  title: 'intput/TextInput',
  component: ShortTextInput,
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
} satisfies Meta<typeof ShortTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};