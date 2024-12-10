//eslint-disable
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import PageCorpProfile, { PageCorpProfileProps } from './PageCorpProfile';
import { Theme } from '@radix-ui/themes';
import { MemoryRouter } from "react-router-dom"; 

const meta: Meta<typeof PageCorpProfile> = {
  title: 'Pages/PageCorpProfile',
  component: PageCorpProfile,
  argTypes: {
    corp_profile: { control: 'object' },
    review_of_corp: { control: 'object' },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Theme><Story /></Theme>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<PageCorpProfileProps>;

export const Default: Story = {
  args: {
    corp_profile: {
      corp_id:1,
      corp_name: "OpenAI Corporation",
      nationality: "USA",
      corp_address: "San Francisco, CA",
      corp_num: 123,
      biz_type: "Artificial Intelligence",
      logo_image: "https://via.placeholder.com/80",
      site_url: "https://openai.com",
    },
    review_of_corp: [
      {
        request_card: {
          title: "Sample Project",
          subtitle: "AI Development",
          reward_price: 20000,
          currency: "USD",
          address: "Remote",
          start_date: new Date(),
          link: "#",
          logo_image: "https://via.placeholder.com/80",
        },
        review_text: "Great place to work, collaborative environment, and rewarding projects.",
        prep_requirement: "Medium",
        work_atmosphere: "Friendly",
        sense_of_achive: 4,
        consumer_id: 3,
        student_id: 1415,
        corp_id: 1,
        request_id: 14,
        request_url: "",
      },
      {
        request_card: {
          title: "Challenging Project",
          subtitle: "AI Research",
          reward_price: 15555,
          currency: "USD",
          address: "On-Site",
          start_date: new Date(),
          link: "#",
          logo_image: "https://via.placeholder.com/80",
        },
        review_text: "Challenging but fulfilling work. The team is supportive and skilled.",
        prep_requirement: "High",
        work_atmosphere: "Competitive",
        sense_of_achive: 5,
        consumer_id: 3,
        student_id: 1415,
        corp_id: 1,
        request_id: 14,
        request_url: "",
      },
    ],
  },
};
