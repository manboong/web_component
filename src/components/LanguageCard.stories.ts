import { Meta, StoryObj } from '@storybook/react';
import LanguageCard, { LanguageCardProps } from './LanguageCard';

const meta: Meta<typeof LanguageCard> = {
  title: 'Components/LanguageCard',
  component: LanguageCard,
  argTypes: {
    level: { control: 'number' },
    exam_name: { control: 'text' },
    exam_result: { control: 'text' },
    language: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<LanguageCardProps>;

export const Default: Story = {
  args: {
    level: 1,
    exam_name: 'JLPT',
    exam_result: 'N2',
    language: '일본어',
  },
};

