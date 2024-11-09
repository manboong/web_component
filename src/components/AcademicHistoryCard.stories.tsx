import { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@radix-ui/themes';
import AcademicHistoryCard, { AcademicHistoryCardProps } from './AcademicHistoryCard';

const meta: Meta<typeof AcademicHistoryCard> = {
  title: 'Components/AcademicHistoryCard',
  component: AcademicHistoryCard,
  args: {
    degree: 'Bachelor of Science',
    faculty: 'Computer Science',
    school_name: 'Stanford University',
    start_date: '2018-09-01',
    end_date: '2022-06-15',
    status: 'Graduated',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Seal_of_Leland_Stanford_Junior_University.svg',
  },
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
};

export default meta;
type Story = StoryObj<AcademicHistoryCardProps>;

export const Default: Story = {};
