import { Meta, StoryObj } from '@storybook/react';
import RequestProfile from './RequestProfile';

const meta: Meta<typeof RequestProfile> = {
  title: 'Components/RequestProfile',
  component: RequestProfile,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    head_count: { control: 'number' },
    reward_price: { control: 'number' },
    currency: { control: 'radio', options: ['krw', 'jpy', 'usd'] },
    content: { control: 'text' },
    are_needed: { control: 'text' },
    are_required: { control: 'text' },
    start_date: { control: 'date' },
    end_date: { control: 'date' },
    address: { control: 'text' },
    address_coordinate: { control: 'object' },
    provide_food: { control: 'boolean' },
    provide_trans_exp: { control: 'boolean' },
    prep_material: { control: 'text' },
    created_at: { control: 'date' },
  },
};

export default meta;
type Story = StoryObj<typeof RequestProfile>;

export const Default: Story = {
  args: {
    title: '토픽 시험 감독관',
    subtitle: '시험 관리요원 모집',
    head_count: 2,
    reward_price: 22000,
    currency: 'jpy',
    content: '',
    are_needed: 'JLPT N2, 적극성, 성실성',
    are_required: 'JLPT N1, 비즈니스 일본어',
    start_date: new Date('2023-10-01'),
    end_date: new Date('2023-12-01'),
    address: '5 Chome-19-18 Kamiochiai, Chuo Ward, Saitama, 338-0001',
    address_coordinate: { lat: 37.7749, lng: -122.4194 },
    provide_food: true,
    provide_trans_exp: false,
    prep_material: '실내화, 정장, 도장',
    created_at: new Date(),
  },
};
