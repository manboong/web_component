import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';
import ChipInput, { ChipInputProps } from '../../components/input/ChipInput';

export default {
    title: 'inputs/ChipInput',
    component: ChipInput,
} as Meta;

const Template: StoryFn = (args) => {
    const { control, handleSubmit } = useForm<ChipInputProps>();

    const onSubmit = (data: ChipInputProps) => {
        console.log('Submitted Data:', data);
    };

    return (
        <ChipInput
        />
    );
};

export const Default = Template.bind({});
