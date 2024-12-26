import React, { useEffect, useState } from 'react';
import ChatRoom from './ChatRoom';
import { List, Checkbox } from '@mui/material';
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: 'Components/ChatRoom',
    component: ChatRoom,
    argTypes: {
        title: {type: "string"},
        lastSentMessage: {type: "string"},
        unreadCount: {type: "number"},
        disalbed: {type: 'boolean'},
        selected: {type: 'boolean'},
        checkBoxMode: {type: 'boolean'},
        lastSentAt: {type: Date},
        onClick: { action: 'clicked' },
        onContextMenu: { action: 'context menu' },
        onLongPress: { action: 'long press' },
        onCheckboxToggle: { action: 'checkbox toggled' },
    },
} as Meta;

const Template: StoryFn = (args) => {
    const [checkBoxMode, setCheckBoxMode] = useState(args.checkBoxMode as boolean ?? false);
    const [checked, setChecked] = useState(false);

    useEffect(()=>{
        const preventBack = () => {
            // save state when checkbox mode on
            if(checkBoxMode === true){
                window.history.pushState(null, '', window.location.href);
                setCheckBoxMode((prev) => !prev);
            }
        }
            window.addEventListener('popstate', preventBack)
        return () => {
            window.removeEventListener('popstate', preventBack)
        }
    }, [])
    
    const handleCheckboxToggle = (newChecked: any) => {
        console.log("chatroom id", args.chatRoomId)
        console.log(newChecked)
    };
    
    return (
        <List dense sx={{width: "100%", maxWidth: '500px'}}>
            <ChatRoom
                key={args.chatRoomId}
                title={args.title}
                lastMessage={args.lastMessage}
                lastSentAt={args.lastSentAt}
                unreadCount={args.unreadCount}
                image={args.image}
                disabled={args.disabled}
                selected={args.selected}
                checkBoxMode={checkBoxMode}
                onCheckboxToggle={handleCheckboxToggle}
                onLongPress={() => setCheckBoxMode((prev) => !prev)}
            />
        </List>
    );
};


export const Default = Template.bind({});
Default.args = {
    title: 'Chat Room Title',
    lastMessage: 'This is the last message in the chat room.',
    lastSentAt: new Date(),
    unreadCount: 3,
    chatRoomId: '123',
    checkBoxMode: false,
    disabled: false,
    image: '',
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
    ...Default.args,
    image: 'https://via.placeholder.com/40',
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    disabled: true,
};

export const CheckboxEnabled = Template.bind({});
CheckboxEnabled.args = {
    ...Default.args,
    checkBoxMode: true,
    checked: false,
};

export const Selected = Template.bind({});
Selected.args = {
    ...Default.args,
    selected: true,
};
