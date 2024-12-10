import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import RequestProfile from './RequestProfile';
import { MemoryRouter } from "react-router-dom";
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';


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
    start_date: { control: 'text' },
    start_time: { control: 'text' },
    end_time: { control: 'text' },
    address: { control: 'text' },
    address_coordinate: { control: 'object' },
    provide_food: { control: 'boolean' },
    provide_trans_exp: { control: 'boolean' },
    prep_material: { control: 'text' },
    created_at: { control: 'date' },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Theme>
          <Story />
        </Theme>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RequestProfile>;

export const Default: Story = {
  args: {
    title: '2024년도 제97회 토픽 PBT 시험 감독관',
    subtitle: '시험 관리요원 모집',
    head_count: 2,
    reward_price: 22000,
    currency: 'JPY',
    content: '군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등 직무집행과 관련하여 받은 손해에 대하여는 법률이 정하는 보상외에 국가 또는 공공단체에 공무원의 직무상 불법행위로 인한 배상은 청구할 수 없다. 누구든지 체포 또는 구속의 이유와 변호인의 조력을 받을 권리가 있음을 고지받지 아니하고는 체포 또는 구속을 당하지 아니한다. 체포 또는 구속을 당한 자의 가족등 법률이 정하는 자에게는 그 이유와 일시·장소가 지체없이 통지되어야 한다.교육의 자주성·전문성·정치적 중립성 및 대학의 자율성은 법률이 정하는 바에 의하여 보장된다. 모든 국민은 법률이 정하는 바에 의하여 공무담임권을 가진다. 헌법에 의하여 체결·공포된 조약과 일반적으로 승인된 국제법규는 국내법과 같은 효력을 가진다. 국가안전보장회의는 대통령이 주재한다. 형사피의자 또는 형사피고인으로서 구금되었던 자가 법률이 정하는 불기소처분을 받거나 무죄판결을 받은 때에는 법률이 정하는 바에 의하여 국가에 정당한 보상을 청구할 수 있다.',
    are_needed: 'JLPT N2, 적극성, 성실성',
    are_required: 'JLPT N1, 비즈니스 일본어',
    start_date: new Date('2023-10-01'),
    start_time: '09:00',
    end_time: '17:00',
    address: '5 Chome-19-18 Kamiochiai, Chuo Ward, Saitama, 338-0001',
    address_coordinate: { lat: 37.7749, lng: -122.4194 },
    provide_food: true,
    provide_trans_exp: false,
    prep_material: '실내화, 정장, 도장',
    created_at: new Date(),
  },
};
