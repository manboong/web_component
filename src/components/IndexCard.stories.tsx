import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import IndexCard from './IndexCard';

const meta: Meta<typeof IndexCard> = {
  title: 'Components/IndexCard',
  component: IndexCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const Template: StoryFn = (args) => <IndexCard {...args} />;

export const Default = Template.bind({});
Default.args = {};
