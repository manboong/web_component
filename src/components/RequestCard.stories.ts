import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Card } from './RequestCard';

const meta = {
  title: 'RequestCard',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'TOPIK 감독관',
    subtitle: '관리요원',
    salary: '22000엔',
    location: '사이타마현',
    date: '2024-10-25',
    imageUrl: 'image1',
    onBookmarkClick: fn(),
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBookmark: Story = {
  args: {
    title: 'JLPT 監督官',
    subtitle: '副監督官',
    salary: '150000ウォン',
    location: 'ソウル',
    date: '2024-10-25',
    imageUrl: 'image2',
  },
};
