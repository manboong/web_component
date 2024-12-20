import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ChatPage from './ChatPage';

export default {
    title: 'containers/ChatPage',
    component: ChatPage,
} as Meta;

const Template: StoryFn = () => <ChatPage />;

export const Default = Template.bind({});
