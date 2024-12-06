import type { Meta, StoryObj } from '@storybook/react';
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
    reward_price: 22000,
    currency: 'JPY',
    address: '사이타마현',
    start_date: new Date(),
    logo_image: 'image1',
  },
} satisfies Meta<typeof RequestCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
