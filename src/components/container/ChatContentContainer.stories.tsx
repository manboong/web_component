import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ChatContentContainer } from './ChatContentContainer';

export default {
    title: 'containers/ChatContentContainer',
    component: ChatContentContainer,
} as Meta;

const Template: StoryFn = () => <ChatContentContainer />;

export const Default = Template.bind({});
