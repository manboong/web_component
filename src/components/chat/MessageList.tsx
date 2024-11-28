import React from "react"
import Message, {MessageProps} from "./Message"
import { ScrollArea, Flex, Box } from "@radix-ui/themes"

const args = [{
        content: "This is message content This is message content This is message content",
        direction: "inbound",
        senderName: '강제욱',
        sentAt: new Date(),
        unread: 1,
    }, {
        content: "This is message content This is message content This is message content",
        direction: "outgoing",
        sentAt: new Date(),
        unread: 1
    }, {
        content: "This is message content",
        direction: "inbound",
        senderName: "kang",
        sentAt: new Date(),
        unread: 2
    }, {
        contentType: "image",
        imageUrl: "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        direction: 'outgoing',
        unread: 1,
        sentAt: new Date(),
    }, {
        contentType: "image",
        imageUrl: "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        direction: 'inbound',
        senderName: '강제욱',
        unread: 1,
        sentAt: new Date(),
    }]

interface ListProps {
    children: any[];
}

const MessageList = ({children}: {children: React.ReactNode[]}) => {


    return(
        <ScrollArea scrollbars="vertical">
            <Flex direction="column" gap="4">
                {args.map((arg, idx) => (
                    <Message content={arg.content}
                            direction={arg.direction} 
                            sentAt={arg.sentAt}
                            unread={arg.unread}
                            senderName={arg.senderName}
                            contentType={arg.contentType}
                            imageUrl={arg.imageUrl}/>
                ))}
            </Flex>
        </ScrollArea>
    )

}

export default MessageList;