import React from "react"
import { Box, Card, Text, Avatar, Badge, Flex, Inset } from "@radix-ui/themes";

export interface MessageProps {
    content?: string;
    direction: "outgoing" | "inbound";
    contentType?: "image" | "text" | "map" | "file";
    senderName?: string;
    senderImage?: string;
    imageUrl?: string;
    sentAt?: Date;
    unread?: number;
}

const Padding = () => {
    return (
        <Box flexGrow="1" minWidth="20%" />
    )
}

const Profile = ({senderName, senderImage}: {senderName?: string, senderImage?: string}) => {
    return (
        senderName === undefined ?
            <Box minWidth="50px">

            </Box> 
        :   
            <Box minWidth="50px">
                <Avatar fallback={senderName[0]} size="3" src={senderImage} radius="large" />
            </Box>
        
    )
}

const TextContent = ({text}: {text: string}) => {

    return (
        <Text as="p" size="2" wrap="pretty">
            {text}
        </Text>
    )
}

const ImageContent = ({imageUrl}: {imageUrl?: string}) => {
    return (
        <Inset p="current" clip="padding-box">
            <img
                src={imageUrl}
                alt="Bold typography"
                style={{
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                    height: 140,
                    backgroundColor: "var(--gray-5)",
                }}
            />
        </Inset>
    )
}

const renderContent = (props: MessageProps) => {
    let content;

    switch (props.contentType) {
        case "image":
            content = <ImageContent imageUrl={props.imageUrl} />
            break;
        default:
            // @ts-ignore
            content = <TextContent text={props.content} />
            break;
    }

    return (
        <Box maxWidth="70%" flexShrink="1">
            {
            props.senderName === undefined ?
                <></>    
            :
                <Text size="2" weight="medium">{props.senderName}</Text>
            }
            <Card size="1">
                {content}
            </Card>
        </Box>
    )
}

const Footer = ({unread, sentAt, direction}: {unread?: number, sentAt?: Date, direction: "outgoing" | "inbound"}) => {
    const Align = direction === 'outgoing' ? 'end' : 'start';

    return (
        <Flex align={Align} justify="end" direction="column" gap="1" pl="1" pr="1">
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
            <Flex direction="row" pl="2" pr="2">
                <Padding />
                <Footer sentAt={props.sentAt} unread={props.unread} direction={props.direction}/>
                {
                    renderContent(props)
                }
            </Flex>
        :
            <Flex direction="row" pl="2" pr="2">
                <Profile senderName={props.senderName} senderImage={props.senderImage}/>
                {
                    renderContent(props)
                }
                <Footer sentAt={props.sentAt} unread={props.unread} direction={props.direction}/>
                <Padding />
            </Flex>
        )
}

export default Message;