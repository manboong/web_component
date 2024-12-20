import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProfileSetup from './ProfileSetup';

export default {
    title: 'pages/ProfileSetup',
    component: ProfileSetup,
} as Meta;

const Template: StoryFn = () => {
    return (
        <ProfileSetup />
    );
};

export const Default = Template.bind({});
