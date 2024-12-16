import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RequestPage from './RequestPage';

const meta: Meta<typeof RequestPage> = {
  title: 'Components/RequestPage',
  component: RequestPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template: StoryFn = () => <RequestPage />;

export const Default = Template.bind({});
