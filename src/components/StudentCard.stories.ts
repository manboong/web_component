import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { StudentCard } from './StudentCard';

const meta = {
  title: 'StudentCard',
  component: StudentCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    name: 'John Doe',
    nationality: 'American',
    school: 'Harvard University',
    major: 'Computer Science',
    languages: ['English', 'Spanish'],
    imageUrl: 'https://via.placeholder.com/120',
    onBookmarkClick: fn(),
  },
} satisfies Meta<typeof StudentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MultiLanguage: Story = {
  args: {
    name: 'Jane Smith',
    nationality: 'Canadian',
    school: 'University of Toronto',
    major: 'Physics',
    languages: ['English', 'French', 'Japanese'],
    imageUrl: 'https://via.placeholder.com/120',
  },
};

export const DifferentMajor: Story = {
  args: {
    name: 'Alice Kim',
    nationality: 'South Korean',
    school: 'Korea University',
    major: 'International Relations',
    languages: ['Korean', 'English'],
    imageUrl: 'https://via.placeholder.com/120',
  },
};
