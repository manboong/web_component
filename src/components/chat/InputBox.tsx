import React from "react"
import { Flex, IconButton } from "@radix-ui/themes"
import { Textarea } from "@mui/joy"
import { PaperPlaneIcon, Link2Icon } from "@radix-ui/react-icons"

interface InputBoxProps {
    value: string;
    placeholder?: string;
    onAttachClick: React.MouseEventHandler<HTMLButtonElement>;
    onSend: React.MouseEventHandler<HTMLButtonElement>;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    disabled: boolean;
}
const InputBox = (props: InputBoxProps) => { 

    // @ts-ignore
    const handleKeyPress = (evt) => {
        if (
            evt.key === "Enter" &&
            evt.shiftKey === false &&
            props.disabled === false
        ) {
          evt.preventDefault();
          props.onSend(evt);
        }
      };

 

    return (

        <Flex direction="row" align="end" justify="center" gap="2" p="3">
            <IconButton variant="ghost" onClick={(e)=>(props.onAttachClick(e))}>
                <Link2Icon width="22" height="22"/>
            </IconButton>
            <Textarea  name="chatSubmit" sx={{flex: "1"}}  minRows={1} maxRows={3} disabled={props.disabled} 
                    value={props.value}
                    placeholder={props.placeholder} 
                    onChange={props.onChange}
                    onKeyDown={handleKeyPress}
            />
            <IconButton variant="ghost" onClick={(e)=>(props.onSend(e))}>
                <PaperPlaneIcon width="22" height="22"/>
            </IconButton>
        </Flex>
    )
}

export default InputBox;