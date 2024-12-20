import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ChatRoomContainer } from './ChatRoomContainer';

export default {
    title: 'containers/ChatRoomContainer',
    component: ChatRoomContainer,
} as Meta;

const Template: StoryFn = () => <ChatRoomContainer />;

export const Default = Template.bind({});
