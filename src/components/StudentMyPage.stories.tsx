import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import StudentMypage from './StudentMypage';

const meta: Meta<typeof StudentMypage> = {
  title: 'Components/StudentMypage',
  component: StudentMypage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template: StoryFn = () => <StudentMypage />;

export const Default = Template.bind({});
