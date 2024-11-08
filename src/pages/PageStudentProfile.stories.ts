import { Meta, StoryObj } from '@storybook/react';
import PageStudentProfile, { PageStudentProfileProps } from '../pages/PageStudentProfile';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof PageStudentProfile> = {
  title: 'Pages/PageStudentProfile',
  component: PageStudentProfile,
  argTypes: {
    student_profile: { control: 'object' },
    review_of_student: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<PageStudentProfileProps>;

export const Default: Story = {
  args: {
    student_profile: {
      name: 'Jane Doe',
      imageUrl: 'https://via.placeholder.com/150',
      nationality: 'Canadian',
      age: '28',
      gender: 'Female',
      academicHistory: [
        {
          degree: 'Bachelor of Science',
          faculty: 'Computer Science',
          school_name: 'University of Toronto',
          start_date: '2018-09-01',
          end_date: '2022-06-01',
          status: 'Graduated',
          logo: 'https://upload.wikimedia.org/wikipedia/en/0/04/Utoronto_coa.svg'
        },
        {
          degree: 'Master of Science',
          faculty: 'Artificial Intelligence',
          school_name: 'ETH Zurich',
          start_date: '2023-09-01',
          end_date: '2025-06-01',
          status: 'In Progress',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/ETH_Z%C3%BCrich_wordmark.svg'
        },
      ],
      languageHistory: [
        {
          language: 'English',
          level: 3,
          exam_name: 'TOEFL',
          exam_result: '120',
        },
        {
          language: 'French',
          level: 1,
          exam_name: 'DELF',
          exam_result: 'B2',
        },
      ],
      past_activity: 'Volunteer experience in community services',
    },
    review_of_student: [
        {
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
          {
            request_card: {
              title: 'Technical Writing Assistance',
              subtitle: 'Experienced technical writer required for documentation.',
              reward_price: '2000',
              currency: 'USD',
              location: 'On-Site',
              date: '2023-12-15',
              imageURL: 'https://via.placeholder.com/150',
            },
            was_late: 3,
            was_proactive: 9,
            was_diligent: 10,
            commu_ability: 9,
            lang_fluent: 10,
            goal_fulfillment: 10,
            want_cowork: 9,
          },
    ],
  },
};
