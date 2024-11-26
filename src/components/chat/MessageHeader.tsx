import React, { MouseEventHandler } from "react"
import { Text, Box, Flex, Separator } from "@radix-ui/themes"
import { ArrowLeftIcon, DotsVerticalIcon} from "@radix-ui/react-icons"
import { Button } from "@mui/joy"
interface MessageHeaderProps {
    username: string;
    onClickArrow: MouseEventHandler;
    onClickMenu: MouseEventHandler;
}


const MessageHeader = (props: MessageHeaderProps) => {
    const {username, onClickArrow, onClickMenu} = props;
    return (
        <Box pb="2">
            <Flex direction="row" gapX="2" align="center" justify="between" pb="4">

                <Button startDecorator={<ArrowLeftIcon />} onClick={onClickArrow} /> 

                <Text>{username}</Text>

                {/* gap */}
                <Box flexGrow="1" />
                
                <Button startDecorator={<DotsVerticalIcon />} onClick={onClickMenu} />
            </Flex>
            <Separator orientation="horizontal" size="4" />
        </Box>
    )
}

export default MessageHeader;