import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import CardSlider, { RequestCard } from '../../components/landingpage/CardSlider';

const meta: Meta<typeof CardSlider> = {
  title: 'landing/CardSlider',
  component: CardSlider,
};

export default meta;
type Story = StoryObj<typeof CardSlider>;

const mockRequestCards: RequestCard[] = [
  {
    request_id: 1,
    title: 'First Request',
    reward_price: 1000,
    currency: 'USD',
    address: '123 Street, City, Country',
    start_date: '2025-01-10',
    request_status: 0,
    logo_image: 'https://via.placeholder.com/50',
  },
  {
    request_id: 2,
    title: 'Second Request',
    reward_price: 2000,
    currency: 'USD',
    start_date: '2025-01-15',
    request_status: 3,
    logo_image: 'https://via.placeholder.com/50',
  },
  {
    request_id: 3,
    title: 'Third Request',
    reward_price: 500,
    currency: 'EUR',
    start_date: '2025-02-01',
    request_status: 3,
    logo_image: 'https://via.placeholder.com/50',
  },
  {
    request_id: 1,
    title: 'First Request',
    reward_price: 1000,
    currency: 'USD',
    address: '123 Street, City, Country',
    start_date: '2025-01-10',
    request_status: 0,
    logo_image: 'https://via.placeholder.com/50',
  },
  {
    request_id: 2,
    title: 'Second Request',
    reward_price: 2000,
    currency: 'USD',
    start_date: '2025-01-15',
    request_status: 3,
    logo_image: 'https://via.placeholder.com/50',
  },
  {
    request_id: 3,
    title: 'Third Request',
    reward_price: 500,
    currency: 'EUR',
    start_date: '2025-02-01',
    request_status: 3,
    logo_image: 'https://via.placeholder.com/50',
  },
  {
    request_id: 1,
    title: 'First Request',
    reward_price: 1000,
    currency: 'USD',
    address: '123 Street, City, Country',
    start_date: '2025-01-10',
    request_status: 0,
    logo_image: 'https://via.placeholder.com/50',
  },
  {
    request_id: 2,
    title: 'Second Request',
    reward_price: 2000,
    currency: 'USD',
    start_date: '2025-01-15',
    request_status: 3,
    logo_image: 'https://via.placeholder.com/50',
  },
  {
    request_id: 3,
    title: 'Third Request',
    reward_price: 500,
    currency: 'EUR',
    start_date: '2025-02-01',
    request_status: 3,
    logo_image: 'https://via.placeholder.com/50',
  },
];

export const Default: Story = {
  args: {
    requests: mockRequestCards,
    step: 0.1,
    interval: 30,
    slideWidth: '100%',
    slideHeight: 250,
  },
};
