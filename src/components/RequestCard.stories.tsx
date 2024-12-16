import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import RequestCard, { RequestCardProps } from './RequestCard';

const meta: Meta<typeof RequestCard> = {
  title: 'Components/RequestCard',
  component: RequestCard,
  tags: ["autodocs"],
  argTypes: {
    title: { control: 'text' },
    reward_price: { control: 'number' },
    currency: { control: 'text' },
    address: { control: 'text' },
    start_date: { control: 'date' },
    renderLogo: { control: 'boolean' },
    logo_image: { control: 'text' },
  },
};

export default meta;

const Template: StoryFn<RequestCardProps> = (args) => <RequestCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "TOPIK 시험감독관 및 관리요원 모집",
  reward_price: 20000,
  currency: "JPY",
  address: "사이타마현 슈쿠토쿠요노 고등학교",
  start_date: new Date(),
};

export const WithLogo: StoryObj = {
  args: {
    title: "TOPIK 시험감독관 및 관리요원 모집",
    reward_price: 20000,
    currency: "JPY",
    address: "사이타마현 슈쿠토쿠요노 고등학교",
    start_date: new Date(),
    request_status: 3,
    renderLogo: true,
    logo_image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Vulfpeck_Logo.jpg"
  }
}