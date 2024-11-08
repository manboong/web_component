import { Meta, StoryObj } from '@storybook/react';
import PageCorpProfile, { PageCorpProfileProps } from '../pages/PageCorpProfile';
import { Theme } from '@radix-ui/themes';

const meta: Meta<typeof PageCorpProfile> = {
  title: 'Pages/PageCorpProfile',
  component: PageCorpProfile,
  argTypes: {
    corp_profile: { control: 'object' },
    review_of_corp: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<PageCorpProfileProps>;

export const Default: Story = {
  args: {
    corp_profile: {
      name: "OpenAI Corporation",
      nationality: "USA",
      corp_address: "San Francisco, CA",
      corp_num: "123-456-7890",
      review_count: 25,
      biz_type: "Artificial Intelligence",
      logo_image: "https://via.placeholder.com/80",
      homepage_url: "https://openai.com",
    },
    review_of_corp: [
      {
        request_card: {
          title: "Sample Project",
          subtitle: "AI Development",
          reward_price: "1000",
          currency: "USD",
          location: "Remote",
          date: "2023-01-01",
          imageURL: "https://via.placeholder.com/80",
        },
        review_text: "Great place to work, collaborative environment, and rewarding projects.",
        prep_requirement: "Medium",
        work_atmosphere: "Friendly",
        sense_of_achive: 4,
        work_intensity: 3,
        pay_satisfaction: 4,
      },
      {
        request_card: {
          title: "Challenging Project",
          subtitle: "AI Research",
          reward_price: "2000",
          currency: "USD",
          location: "On-Site",
          date: "2023-03-15",
          imageURL: "https://via.placeholder.com/80",
        },
        review_text: "Challenging but fulfilling work. The team is supportive and skilled.",
        prep_requirement: "High",
        work_atmosphere: "Competitive",
        sense_of_achive: 5,
        work_intensity: 4,
        pay_satisfaction: 5,
      },
    ],
  },
};
