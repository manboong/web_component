import { Meta, StoryObj } from '@storybook/react';
import AcademicHistoryCard, { AcademicHistoryCardProps } from './AcademicHistoryCard';

const meta: Meta<typeof AcademicHistoryCard> = {
  title: 'Components/AcademicHistoryCard',
  component: AcademicHistoryCard,
  argTypes: {
    degree: { control: 'text' },
    faculty: { control: 'text' },
    school_name: { control: 'text' },
    start_date: { control: 'date' },
    end_date: { control: 'date' },
    status: {
      control: 'radio',
      options: ['Graduated', 'In Progress', 'Withdrawn'],
    },
    logo: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<AcademicHistoryCardProps>;

export const Default: Story = {
  args: {
    degree: 'Bachelor of Science',
    faculty: 'Computer Science',
    school_name: 'Stanford University',
    start_date: '2018-09-01',
    end_date: '2022-06-15',
    status: 'Graduated',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Seal_of_Leland_Stanford_Junior_University.svg',
  },
};
