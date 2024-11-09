import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Theme } from '@radix-ui/themes';
import RequestCard from './RequestCard';

const meta = {
  title: 'RequestCard',
  component: RequestCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators:[
    (Story) => (
      <Theme>
        <Story/>
      </Theme>
    ),
  ],
  args: {
    title: 'TOPIK 감독관',
    subtitle: '관리요원',
    reward_price: '22000',
    currency: 'JPY',
    location: '사이타마현',
    date: '2024-10-25',
    imageURL: 'image1',
  },
} satisfies Meta<typeof RequestCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBookmark: Story = {
  args: {
    title: 'JLPT 監督官',
    subtitle: '副監督官',
    reward_price: '150000',
    currency: 'KRW',
    location: 'ソウル',
    date: '2024-10-25',
    imageURL: 'image2',
  },
};
