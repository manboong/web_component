import { Meta, StoryObj } from "@storybook/react";
import LanguageCard, {
    LanguageCardProps,
} from "../../components/student/LanguageCard";

const meta: Meta<typeof LanguageCard> = {
    title: "student/LanguageCard",
    component: LanguageCard,
    argTypes: {
        level: { control: "number" },
        exam_name: { control: "text" },
        exam_result: { control: "text" },
        language: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<LanguageCardProps>;

export const Default: Story = {
    args: {
        level: 1,
        exam_name: "JLPT",
        exam_result: "N2",
        language: "일본어",
    },
};

export const Toeic: Story = {
    args: {
        level: 2,
        exam_name: "토익",
        exam_result: "890",
        language: "영어",
    },
};
