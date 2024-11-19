import React from 'react';
import { Box, Card, Text, Flex, Avatar, Badge } from "@radix-ui/themes"
import { PersonIcon } from '@radix-ui/react-icons';

interface IChatRoom {
    onClick: () => void;
    onContextMenu: () => void;
    image?: string;
    title: string;
    lastMessage: string;
    lastSentAt: Date;
    unreadCount: number;
}

const ChatRoom = (props: IChatRoom) => {

    // Readings about flex item shrink and ellipsis
    // https://velog.io/@eenaree/flex-item-ellipsis
    // https://css-tricks.com/flexbox-truncated-text/
    return (
        <Flex display="flex" gap="3" align="center" width="300px" maxWidth="400px" p="3">
            {
                props.image === undefined ?
                    <Avatar 
                        size="4"
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
            <Box width="50px">
                <Text as="div" size="1">
                    {props.lastSentAt.toLocaleTimeString()}
                </Text>
                {
                    props.unreadCount === 0 ?
                        <></>
                    :
                        <Badge radius="full">
                            {props.unreadCount}
                        </Badge>
                }
            </Box>
        </Flex>
    )
}

export default ChatRoom;