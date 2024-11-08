import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from './SearchBar';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    placeholder: 'Search...',
    onSearch: action('searched'),
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Type your query here...',
  },
};

export const SearchFunctionality: Story = {
  args: {
    placeholder: 'Search here...',
    onSearch: (query) => {
      alert(`Search query: ${query}`);
    },
  },
};
