import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import IndexCard from '../components/IndexCard';

const meta: Meta<typeof IndexCard> = {
  title: 'components/IndexCard',
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
