import { Meta, StoryObj } from '@storybook/react';
import ReviewOfStudent, { ReviewOfStudentProps } from './ReviewOfStudent';
import { Theme } from '@radix-ui/themes';
const meta: Meta<typeof ReviewOfStudent> = {
  title: 'Components/ReviewOfStudent',
  component: ReviewOfStudent,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
  argTypes: {
    was_late: { control: 'number', min: 0, max: 10 },
    was_proactive: { control: 'number', min: 0, max: 10 },
    was_diligent: { control: 'number', min: 0, max: 10 },
    commu_ability: { control: 'number', min: 0, max: 10 },
    lang_fluent: { control: 'number', min: 0, max: 10 },
    goal_fulfillment: { control: 'number', min: 0, max: 10 },
    want_cowork: { control: 'number', min: 0, max: 10 },
  },
};

export default meta;
type Story = StoryObj<ReviewOfStudentProps>;

export const Default: Story = {
  args: {
    request_card: {
      title: 'Translation',
      subtitle: 'Looking for ',
      reward_price: '1500',
      currency: 'USD',
      location: 'Remote',
      date: '2023-11-01',
      imageURL: 'https://via.placeholder.com/150',
    },
    was_late: 2,
    was_proactive: 8,
    was_diligent: 9,
    commu_ability: 7,
    lang_fluent: 8,
    goal_fulfillment: 9,
    want_cowork: 8,
  },
};

export const HighEvaluation: Story = {
  args: {
    request_card: {
      title: 'Technical Writing Assistance',
      subtitle: 'Experienced technical writer required for documentation.',
      reward_price: '2000',
      currency: 'USD',
      location: 'On-Site',
      date: '2023-12-15',
      imageURL: 'https://via.placeholder.com/150',
    },
    was_late: 1,
    was_proactive: 9,
    was_diligent: 10,
    commu_ability: 9,
    lang_fluent: 10,
    goal_fulfillment: 10,
    want_cowork: 9,
  },
};

export const LowEvaluation: Story = {
  args: {
    request_card: {
      title: 'Data Entry for Survey Results',
      subtitle: 'Looking for data entry specialists.',
      reward_price: '500',
      currency: 'USD',
      location: 'Office',
      date: '2023-11-20',
      imageURL: 'https://via.placeholder.com/150',
    },
    was_late: 8,
    was_proactive: 3,
    was_diligent: 4,
    commu_ability: 5,
    lang_fluent: 6,
    goal_fulfillment: 4,
    want_cowork: 5,
  },
};
