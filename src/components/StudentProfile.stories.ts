import { Meta, StoryObj } from '@storybook/react';
import StudentProfile, { StudentProfileProps } from './StudentProfile';

const meta: Meta<typeof StudentProfile> = {
  title: 'Components/StudentProfile',
  component: StudentProfile,
  argTypes: {
    name: { control: 'text' },
    imageUrl: { control: 'text' },
    nationality: { control: 'text' },
    age: { control: 'text' },
    gender: { control: 'text' },
    phone_number: { control: 'text' },
    emergency_contact: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<StudentProfileProps>;

// 기본 스토리
export const Default: Story = {
  args: {
    name: 'Jane Doe',
    imageUrl: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e', 
    nationality: 'Canadian',
    age: '21',
    gender: 'Female',
    phone_number: '123-456-7890',
    emergency_contact: 'Emergency Contact: 098-765-4321',
    academicHistory: [
      {
        degree: 'Bachelor of Science',
        faculty: 'Computer Science',
        school_name: 'University of Toronto',
        start_date: '2018-09-01',
        end_date: '2022-06-01',
        status: 'Graduated',
      },
      {
        degree: 'Master of Science',
        faculty: 'Artificial Intelligence',
        school_name: 'University of Toronto',
        start_date: '2023-09-01',
        end_date: '2025-06-01',
        status: 'In Progress',
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
  },
};

export const ExtensiveAcademicHistory: Story = {
  args: {
    ...Default.args,
    academicHistory: [
      {
        degree: 'Bachelor of Arts',
        faculty: 'History',
        school_name: 'Harvard University',
        start_date: '2010-09-01',
        end_date: '2014-06-01',
        status: 'Graduated',
      },
      {
        degree: 'Master of Arts',
        faculty: 'Anthropology',
        school_name: 'Harvard University',
        start_date: '2015-09-01',
        end_date: '2017-06-01',
        status: 'Graduated',
      },
      {
        degree: 'PhD in History',
        faculty: 'Modern History',
        school_name: 'Cambridge University',
        start_date: '2018-09-01',
        end_date: '2022-06-01',
        status: 'Graduated',
      },
    ],
  },
};

export const Multilingual: Story = {
  args: {
    ...Default.args,
    languageHistory: [
      {
        language: 'English',
        level: 3,
        exam_name: 'TOEFL',
        exam_result: '120',
      },
      {
        language: 'French',
        level: 2,
        exam_name: 'DALF',
        exam_result: 'C1',
      },
      {
        language: 'Spanish',
        level: 1,
        exam_name: 'DELE',
        exam_result: 'B2',
      },
      {
        language: 'Japanese',
        level: 3,
        exam_name: 'JLPT',
        exam_result: 'N1',
      },
    ],
  },
};
