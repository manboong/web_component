import React from 'react';
import { ListItem, ListItemButton, ListItemAvatar, Avatar, Tooltip } from "@mui/material";

export interface RequestRoomProps {
    title: string;
    logo_image?: string;
    onClick: () => void;
}

const RequestRoom = (props: RequestRoomProps) => {
    return (
        <ListItem
            disablePadding
        >
            <Tooltip title={props.title}>
                <ListItemButton onClick={props.onClick}>
                    <ListItemAvatar>
                        <Avatar src={props.logo_image} />
                    </ListItemAvatar>
                </ListItemButton>
            </Tooltip>
        </ListItem>
    );
};

export default RequestRoom;
