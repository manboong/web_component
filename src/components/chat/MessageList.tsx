import React from "react";
import Message, { MessageProps } from "./Message";
import { Box, Stack } from "@mui/material";

export interface MessageListProps {
    messages: MessageProps[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    return (
        <Box
            sx={{
                height: "100%",
                overflowY: "auto",
                padding: 2,
                backgroundColor: "#f5f5f5",
                boxShadow: "none",
            }}
        >
            <Stack spacing={2}>
                {messages.map((message, idx) => (
                    <Message
                        key={idx}
                        content={message.content}
                        contentType={message.contentType}
                        imageUrl={message.imageUrl}
                        direction={message.direction}
                        sentAt={message.sentAt}
                        unread={message.unread}
                        senderName={message.senderName}
                        status={message.status}
                    />
                ))}
            </Stack>
        </Box>
    );
};

export default MessageList;
