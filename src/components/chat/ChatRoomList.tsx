import React from "react"
import ChatRoom from "./ChatRoom"
import { ScrollArea, Flex } from "@radix-ui/themes"
import { ClickArea } from "@toss/react"

const args = [{
    image: undefined,
    title: "Kang",
    lastMessage: "HHhhhhhhhhhhhhhhhhhhhhhhhhhhhey",
    lastSentAt: new Date(),
    unreadCount: 2,
}, {
    image: undefined,
    title: "Kang",
    lastMessage: "HHhhhhhhhhhhhhhhhhhhhhhhhhhhhey",
    lastSentAt: new Date(),
    unreadCount: 0,
}, {
    image: undefined,
    title: "Kang",
    lastMessage: "Hey",
    lastSentAt: new Date(),
    unreadCount: 2,
}]

const ChatRoomList = () => {

    return(
        <ScrollArea scrollbars="vertical" style={{ width: "300px", maxWidth: "400px"}}>
            <Flex direction="column" gap="2"  >
                {args.map((arg, idx) => (
                    <ChatRoom 
                        image={arg.image}
                        title={arg.title}
                        lastMessage={arg.lastMessage}
                        lastSentAt={arg.lastSentAt}
                        unreadCount={arg.unreadCount}/>
                ))}
            </Flex>
        </ScrollArea>
    )
}

export default ChatRoomList;