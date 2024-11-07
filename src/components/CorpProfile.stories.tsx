import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CorpProfile, { CorpProfileProps } from './CorpProfile';

const meta: Meta<typeof CorpProfile> = {
  title: 'Components/CorpProfile',
  component: CorpProfile,
  argTypes: {
    name: { control: 'text' },
    nationality: { control: 'text' },
    corp_address: { control: 'text' },
    biz_type: { control: 'text' },
    logo_image: { control: 'text' },
    review_count: {control: 'number'},
    homepage_url: { control: 'text'}
  },
};

export default meta;

const Template: StoryFn<CorpProfileProps> = (args) => <CorpProfile {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Tech Innovations Inc.',
  nationality: 'USA',
  corp_address: '서울시',
  biz_type: 'Software Development',
  review_count: 5,
  logo_image: 'https://via.placeholder.com/150',
  homepage_url: '#',
};
