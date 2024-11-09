import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@radix-ui/themes';
import RequestInput from './RequestInput';

const meta = {
    title: 'intput/RequestInput',
    component: RequestInput,
    tags: ['autodocs'],
    parameters: {
      layout: 'centered',
    },
    decorators:[
      (Story) => (
        <Theme>
          <Story/>
        </Theme>
      ),
    ],
    argTypes: {
        placeholder: { control: 'text' },
        title: { control: 'text' },
        subtitle: { control: 'text' },
        head_count: { control: 'number' },
        reward_price: { control: 'number' },
        currency: { 
          control: { type: 'select' },
          options: ['USD', 'JPY', 'KRW', '']
        },
        content: { control: 'text' },
        are_needed: { control: 'text' },
        are_required: { control: 'text' },
        date: { control: 'date' },
        start_time: { control: 'text' },
        end_time: { control: 'text' },
        address: { control: 'text' },
        provide_food: { control: 'boolean' },
        provide_trans_exp: { control: 'boolean' },
        prep_material: { control: 'text' },
        created_at: { control: 'date' },
        address_coordinate: {
          lat: { control: 'number' },
          lng: { control: 'number' }
        }
      }
  } satisfies Meta<typeof RequestInput>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const Default: Story = {};