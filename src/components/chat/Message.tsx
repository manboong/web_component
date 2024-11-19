import React from "react"
import { Box, Card, Text, Avatar, Badge, Flex } from "@radix-ui/themes";

interface MessageProps {
    content: string;
    direction: "outgoing" | "inbound";
    sentAt?: Date;
    unread?: number;
}

const Padding = () => {
    return (
        <Box flexGrow="1" minWidth="20vw" />
    )
}

const Profile = ({display}: {display?: "hidden" | "block" }) => {
    return (
        display === "hidden" ?
            <Box minWidth="50px">
                <Avatar fallback="T" size="3" radius="full" />
            </Box>
        :
            <Box minWidth="50px">

            </Box>    
    )
}

const Content = ({text}: {text: string}) => {

    return (
        <Box maxWidth="70%" flexShrink="1">
            <Card size="1">
                <Text as="p" size="2" wrap="pretty">
                    {text}
                </Text>
            </Card>
        </Box>
    )
}

const Footer = ({unread, sentAt, direction}: {unread?: number, sentAt?: Date, direction: "outgoing" | "inbound"}) => {
    const Align = direction === 'outgoing' ? 'end' : 'start';

    return (
        <Flex align={Align} justify="end" direction="column">
            {
                unread === undefined ?
                    <></>
                :
                    <Badge radius="full">{unread}</Badge>
            }
            {
                sentAt === undefined ?
                    <></>
                :
                    <Text size="1" color="gray">{sentAt.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: undefined})}</Text>
            }
        </Flex>
    )
}


const Message = (props: MessageProps) => {
    


    return (
        props.direction === "outgoing" ?
            <>
                <Padding />
                <Footer sentAt={props.sentAt} unread={props.unread} direction={props.direction}/>
                <Content text={props.content} />
            </>
        :
            <>
                <Profile />
                <Content text={props.content} />
                <Footer sentAt={props.sentAt} unread={props.unread} direction={props.direction}/>
                <Padding />
            </>
        )
}

export default Message;