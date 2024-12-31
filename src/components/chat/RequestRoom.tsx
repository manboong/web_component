import React from "react";
import {
    ListItem,
    ListItemButton,
    ListItemAvatar,
    Avatar,
    Tooltip,
} from "@mui/material";

export interface RequestRoomProps {
    title: string;
    image?: string;
    selected?: boolean;
    onClick: () => void;
}

const RequestRoom = (props: RequestRoomProps) => {
    return (
        <Tooltip title={props.title}>
            <ListItem divider disablePadding>
                <ListItemButton
                    onClick={props.onClick}
                    disableGutters
                    dense
                    selected={props.selected}
                >
                    <Avatar src={props.image} />
                </ListItemButton>
            </ListItem>
        </Tooltip>
    );
};

export default RequestRoom;
