import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CorpProfile, { CorpProfileProps } from './CorpProfile';

const meta: Meta<typeof CorpProfile> = {
  title: 'Components/CorpProfile',
  component: CorpProfile,
  argTypes: {
    name: { control: 'text' },
    nationality: { control: 'text' },
    ceo_name: { control: 'text' },
    corp_address: { control: 'text' },
    corp_num: { control: 'text' },
    biz_started_at: { control: 'date' },
    biz_type: { control: 'text' },
    logo_image: { control: 'text' },
  },
};

export default meta;

const Template: StoryFn<CorpProfileProps> = (args) => <CorpProfile {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Tech Innovations Inc.',
  nationality: 'USA',
  ceo_name: 'John Doe',
  corp_address: '1234 Silicon Valley Blvd, CA',
  corp_num: '123-45-6789',
  biz_started_at: new Date('2010-05-20'),
  biz_type: 'Software Development',
  logo_image: 'https://via.placeholder.com/150',
};
