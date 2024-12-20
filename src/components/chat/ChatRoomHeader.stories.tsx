import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ChatRoomHeader, { ChatRoomHeaderProps } from './ChatRoomHeader';
import { Box } from '@mui/material';

export default {
    title: 'Components/ChatRoomHeader',
    component: ChatRoomHeader,
    decorators: [
        (StoryFn) => (
            <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
                {StoryFn()}
            </Box>
        ),
    ],
} as Meta;

const Template: StoryFn<ChatRoomHeaderProps> = (args) => <ChatRoomHeader {...args} />;

export const ProviderRole = Template.bind({});
ProviderRole.args = {
    title: 'Provider',
    role: 'provider',
    onBackClick: () => alert('Back button clicked'),
    onHireClick: () => alert('Hire button clicked'),
    onEndHireClick: () => alert('End Hire button clicked'),
};

export const ConsumerRole = Template.bind({});
ConsumerRole.args = {
    title: 'Consumer',
    role: 'consumer',
    onBackClick: () => alert('Back button clicked'),
    onHireClick: () => {}, 
    onEndHireClick: () => {}, 
};