import { Meta, StoryObj } from '@storybook/react';
import PageRequestList, { PageRequestListProps } from './PageRequestList';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof PageRequestList> = {
  title: 'Pages/PageRequestList',
  component: PageRequestList,
  argTypes: {
    searchbar: {
      control: 'object',
      description: 'Props for the search bar, including placeholder text and onSearch function.',
    },
    request_card: {
      control: 'object',
      description: 'Array of request cards to display.',
    },
  },
};

export default meta;
type Story = StoryObj<PageRequestListProps>;

export const Default: Story = {
  args: {
    searchbar: {
      placeholder: 'Search for requests...',
      onSearch: action('search'),
    },
    request_card: [
      {
        title: 'TOPIK 감독관',
        subtitle: '관리요원',
        reward_price: 15000,
        currency: 'JPY',
        address: '사이타마현',
        start_date: new Date(),
        link: '',
        logo_image: 'https://via.placeholder.com/150',
      },
      {
        title: 'JLPT 監督官',
        subtitle: '副監督官',
        reward_price: 15000,
        currency: 'JPY',
        address: 'ソウル',
        start_date: new Date(),
        link: '',
        logo_image: 'https://via.placeholder.com/150'
      },
      {
        title: 'TOPIK 감독관',
        subtitle: '관리요원',
        reward_price: 15000,
        currency: 'JPY',
        address: '사이타마현',
        start_date: new Date(),
        link: '',
        logo_image: 'https://via.placeholder.com/150',
      },
      {
        title: 'JLPT 監督官',
        subtitle: '副監督官',
        reward_price: 15000,
        currency: 'JPY',
        address: 'ソウル',
        start_date: new Date(),
        link: '',
        logo_image: 'https://via.placeholder.com/150'
      },
      {
        title: 'TOPIK 감독관',
        subtitle: '관리요원',
        reward_price: 15000,
        currency: 'JPY',
        address: '사이타마현',
        start_date: new Date(),
        link: '',
        logo_image: 'https://via.placeholder.com/150',
      },
      {
        title: 'JLPT 監督官',
        subtitle: '副監督官',
        reward_price: 15000,
        currency: 'JPY',
        address: 'ソウル',
        start_date: new Date(),
        link: '',
        logo_image: 'https://via.placeholder.com/150'
      },
    ],
  },
};
