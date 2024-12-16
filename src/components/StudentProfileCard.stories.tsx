import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import StudentProfileCard, { StudentAttributes } from './StudentProfileCard';

const meta: Meta<typeof StudentProfileCard> = {
  title: 'Components/StudentProfileCard',
  component: StudentProfileCard,
  tags: ['autodocs'],
  argTypes: {
    student_name: { control: 'text' },
    nationality: { control: 'text' },
    age: { control: 'text' },
    phone_number: { control: 'text' },
    emergency_contact: { control: 'text' },
    gender: { control: 'text' },
    image: { control: 'text' },
    has_car: { control: 'boolean' },
    isMypage: { control: 'boolean' },
    onEditClick: { action: 'edit clicked' },
  },
};

export default meta;

const Template: StoryFn<StudentAttributes> = (args) => <StudentProfileCard {...args} />;

export const Default: StoryObj<StudentAttributes> = Template.bind({});
Default.args = {
  student_name: '김철수',
  nationality: '대한민국',
  age: '25',
  gender: '남성',
  image: 'https://via.placeholder.com/150',
  has_car: true,
};

export const MyPageView: StoryObj<StudentAttributes> = Template.bind({});
MyPageView.args = {
  student_name: '박지성',
  nationality: '대한민국',
  age: '30',
  gender: '남성',
  phone_number: '010-1234-5678',
  emergency_contact: '010-8765-4321',
  image: 'https://via.placeholder.com/150',
  has_car: true,
  isMypage: true,
};
