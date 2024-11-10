import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@radix-ui/themes';
import StudentProfileSetup from './StudentProfileSetup';

const meta: Meta<typeof StudentProfileSetup> = {
  title: 'StudentProfile/StudentProfileSetup',
  component: StudentProfileSetup,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
