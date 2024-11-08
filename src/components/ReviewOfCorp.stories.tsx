import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ReviewOfCorp, { ReviewOfCorpProps } from './ReviewOfCorp';
import { RequestCardProps } from './RequestCard';

const meta: Meta<typeof ReviewOfCorp> = {
  title: 'Components/ReviewOfCorp',
  component: ReviewOfCorp,
  argTypes: {
    review_text: { control: 'text' },
    prep_requirement: { control: 'text' },
    work_atmosphere: { control: 'text' },
    sense_of_achive: { control: { type: 'range', min: 0, max: 10 } },
    work_intensity: { control: { type: 'range', min: 0, max: 10 } },
    pay_satisfaction: { control: { type: 'range', min: 0, max: 10 } },
  },
};

export default meta;

const requestCardExample: RequestCardProps = {
  title: 'Web Development Project',
  subtitle: 'Looking for a Frontend Developer',
  reward_price: '3000',
  currency: 'USD',
  location: 'Remote',
  date: '2024-01-10',
  imageURL: 'https://via.placeholder.com/150',
};

export const Default: StoryFn<ReviewOfCorpProps> = (args) => (
  <ReviewOfCorp {...args} request_card={requestCardExample} />
);

Default.args = {
  review_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  prep_requirement: 'Basic knowledge of React and TypeScript.',
  work_atmosphere: 'Friendly and collaborative',
  sense_of_achive: 8,
  work_intensity: 6,
  pay_satisfaction: 9,
};

