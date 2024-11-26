import React from "react";
import { Flex, Separator, Container } from "@radix-ui/themes";
import ChatRoomList from "../components/chat/ChatRoomList";
import MessageList from "../components/chat/MessageList";
import MessageHeader from "../components/chat/MessageHeader";
import InputBox from "../components/chat/InputBox";

const ChatPage = () => {

    return (
        <Flex direction="row" gap="2">
            <Container maxHeight="800px">
                <ChatRoomList />
            </Container>
            <Container maxHeight="800px">
                <Flex direction="column">
                    <MessageHeader />
                    <MessageList />
                    <InputBox />
                </Flex>
            </Container>
        </Flex>
    )
}

export default ChatPage;