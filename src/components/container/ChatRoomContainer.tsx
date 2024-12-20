import React, { useState } from "react";
import ChatRoomHeader from "../chat/ChatRoomHeader";
import ChatRoomList from "../chat/ChatRoomList";
import { Container } from "@mui/material";

export const ChatRoomContainer = () => {
    const [selectedRooms, setSelectedRooms] = useState<string[]>([]);

    const dummyChatRooms = [
        {
            chatRoomId: "1",
            title: "John Doe",
            lastMessage: "Hello, how are you?",
            lastSentAt: new Date(),
            unreadCount: 2,
            image: "https://via.placeholder.com/150",
            enabled: true,
        },
        {
            chatRoomId: "2",
            title: "Jane Smith",
            lastMessage: "Let's schedule a meeting.",
            lastSentAt: new Date(),
            unreadCount: 0,
            image: "https://via.placeholder.com/150",
            enabled: true,
        },
        {
            chatRoomId: "3",
            title: "Acme Corp",
            lastMessage: "Thank you for your application.",
            lastSentAt: new Date(),
            unreadCount: 5,
            image: "https://via.placeholder.com/150",
            enabled: false,
        },
    ];

    const handleCheckboxToggle = (chatRoomId: string, checked: boolean) => {
        if (checked) {
            setSelectedRooms([...selectedRooms, chatRoomId]);
        } else {
            setSelectedRooms(selectedRooms.filter((id) => id !== chatRoomId));
        }
    };

    const handleLongPress = () => {
        console.log("Long press detected");
    };

    const handleContextMenu = () => {
        console.log("Context menu opened");
    };

    const handleClick = () => {
        console.log("Chat room clicked");
    };

    return (
        <Container sx={{padding: "0 !important", margin: "0 !important"}}>
            <ChatRoomHeader 
                title="Chat Room" 
                role="consumer" 
                onBackClick={() => console.log("Back clicked")}
                onHireClick={() => console.log("Hire clicked")}
                onEndHireClick={() => console.log("End Hire clicked")}
            />
            <ChatRoomList 
                isCheckbox={false}
                handleCheckboxToggle={handleCheckboxToggle}
                handleLongPress={handleLongPress}
                handleContextMenu={handleContextMenu}
                handleClick={handleClick}
                chatRooms={dummyChatRooms}
                selectedRooms={selectedRooms}
            />
        </Container>
    );
};
