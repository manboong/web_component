import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import RequestCard from "./RequestCard";
import { Theme } from "@radix-ui/themes";


const meta = {
  title: "RequestCard",
  component: RequestCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
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
  args: {
    title: "TOPIK 감독관 및 관리요원",
    subtitle: "관리요원",
    reward_price: 22000,
    currency: "JPY",
    address: "사이타마현",
    start_date: new Date(),
    logo_image: "https://via.placeholder.com/50", 
    link: "#",
  },
} satisfies Meta<typeof RequestCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongContent: Story = {
  args: {
    title: "TOPIK 감독관 - 매우 길고 길어진 제목의 예제입니다",
    subtitle: "관리요원의 상세한 직책 및 요구사항에 대한 예제",
    address: "사이타마현, 아주 상세한 위치와 정보를 포함한 주소입니다",
  },
};

export const WithoutImage: Story = {
  args: {
    logo_image: undefined,
  },
};
