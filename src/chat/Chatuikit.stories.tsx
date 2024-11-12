import { Meta, StoryObj } from '@storybook/react';
import { Chatuikit } from './Chatuikit';

const meta: Meta<typeof Chatuikit> = {
  title: 'Chat/Chatuikit',
  component: Chatuikit,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
