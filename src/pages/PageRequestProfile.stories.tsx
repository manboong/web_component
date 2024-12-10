import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@radix-ui/themes';
import PageRequestProfile, { PageRequestProfileProps } from './PageRequestProfile';

const meta: Meta<typeof PageRequestProfile> = {
  title: 'Pages/PageRequestProfile',
  component: PageRequestProfile,
  decorators: [
      (Story) => (
          <Theme>
              <Story />
          </Theme>
      ),
  ],
  argTypes: {
    request_profile: { control: 'object' },
    sticky_button: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<PageRequestProfileProps>;

export const Default: Story = {
  args: {
    request_profile: {
      title: 'JLPT 시험 감독관',
      subtitle: '관리요원',
      head_count: 5,
      reward_price: 30000,
      currency: 'KRW',
      content: 'JLPT 시험 감독관의 업무를 수행합니다.',
      are_needed: '기본 일본어 지식',
      are_required: 'JLPT N1 자격증 소지자',
      start_date: new Date(2024-12-10),
      start_time: '09:00',
      end_time: '17:00',
      address: '서울시 중구 을지로 5가',
      address_coordinate: { lat: 37.5665, lng: 126.978 },
      provide_food: true,
      provide_trans_exp: true,
      prep_material: '필기 도구, 노트북',
      created_at: new Date(2024-10-10),
    },
    sticky_button: {
      viewerType: 1,
      innerText: '신청하기',
    },
  },
};
