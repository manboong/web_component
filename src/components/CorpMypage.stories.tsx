import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CorpMypage from './CorpMyPage';

const meta: Meta<typeof CorpMypage> = {
  title: 'Components/CorpMypage',
  component: CorpMypage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template: StoryFn = () => <CorpMypage />;

export const Default = Template.bind({});
