import React from 'react';
import { Box, Card, Text, Flex, Avatar, Badge } from "@radix-ui/themes"
import { PersonIcon } from '@radix-ui/react-icons';
import { ClickArea } from "@toss/react"

interface IChatRoom {
    onClick: () => void;
    onContextMenu: () => void;
    chatRoomId?: string;
    image?: string;
    title: string;
    enabled?: boolean;
    lastMessage: string;
    lastSentAt: Date;
    unreadCount: number;
}

const ChatRoom = (props: IChatRoom) => {

    // Readings about flex item shrink and ellipsis
    // https://velog.io/@eenaree/flex-item-ellipsis
    // https://css-tricks.com/flexbox-truncated-text/
    return (
        <ClickArea onClick={()=>(props.onClick())} enabled={props.enabled}>
            <Flex display="flex" gap="3" align="center" p="3">
                {
                    props.image === undefined ?
                        <Avatar 
                            size="4"
                            radius="full"
                            fallback={
                            <PersonIcon radius="full"/>
                        }/>
                    :
                        <Avatar
                            size="4"
                            src={props.image}
                            radius="full"
                            fallback={props.title}
                        />
                }
                <Box flexGrow="1" flexShrink="1" minWidth="0">
                    <Text as="p" size="3" weight="bold" truncate>
                        {props.title}
                    </Text>
                    <Text as="p" size="2" color="gray" truncate>
                        {props.lastMessage}
                    </Text>
                </Box>
                <Flex  direction="column" align="end" justify="start" gap="2">
                    <Text as="div" size="1">
                        {props.lastSentAt.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: undefined})}
                    </Text>
                    {
                        props.unreadCount === 0 ?
                            <></>
                        :
                            <Badge radius="full">
                                {props.unreadCount}
                            </Badge>
                    }
                </Flex>
            </Flex>
        </ClickArea>
    )
}

export default ChatRoom;