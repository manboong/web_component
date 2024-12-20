import MessageHeader from "../chat/MessageHeader";
import MessageList from "../chat/MessageList";
import InputBox from "../chat/InputBox";
import { Container } from "@mui/material";

const dummyMessageHeader = {
    username: "John Doe",
    onClickArrow: () => console.log("Arrow clicked"),
    onClickUser: () => console.log("User clicked"),
};

const dummyMessages = [
    {
        content: "Hello, how are you?",
        direction: "inbound",
        contentType: "text",
        senderName: "Jane Smith",
        senderImage: "https://via.placeholder.com/40",
        sentAt: new Date(),
        unread: 2,
        status: 1,
    },
    {
        content: "I'm fine, thank you!",
        direction: "outgoing",
        contentType: "text",
        sentAt: new Date(),
        unread: 0,
        status: 1,
    },
    {
        contentType: "image",
        imageUrl: "https://via.placeholder.com/200",
        direction: "inbound",
        senderName: "Jane Smith",
        senderImage: "https://via.placeholder.com/40",
        sentAt: new Date(),
        unread: 1,
        status: 0,
    },
];

const dummyInputBox = {
    value: "",
    placeholder: "Type a message...",
    onAttachClick: () => console.log("Attach clicked"),
    onSend: () => console.log("Send clicked"),
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => console.log("Message changed:", e.target.value),
    disabled: false,
};


export const ChatContentContainer = () => {
    return (
        <Container sx={{padding: "0 !important", margin: "0 !important"}} >
            <MessageHeader {...dummyMessageHeader} />
            <MessageList messages={dummyMessages} />
            <InputBox {...dummyInputBox} />
        </Container>
    );
};