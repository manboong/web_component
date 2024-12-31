import React, { ChangeEventHandler, useEffect, useRef, useState } from "react";
import {
    Avatar,
    Typography,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemAvatar,
    Checkbox,
    Badge,
    Stack,
    Box,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import * as EventBlocker from "../EventBlocker";

interface IChatRoom {
    onClick?: React.MouseEventHandler;
    onContextMenu?: React.MouseEventHandler;
    onLongPress?: React.MouseEventHandler;
    onCheckboxToggle?: (
        event: React.ChangeEvent | React.MouseEvent,
        checked: boolean,
    ) => void;
    defaultValue?: boolean;
    checkBoxMode?: boolean;
    selected?: boolean;
    image?: string;
    title?: string;
    disabled?: boolean;
    lastMessage?: string;
    lastSentAt?: Date;
    unreadCount?: number;
}

const ChatRoom = (props: IChatRoom) => {
    const [checked, setChecked] = useState(props.defaultValue ?? false);

    const handleClick = (e: React.MouseEvent) => {
        if (props.checkBoxMode === true) {
            props?.onCheckboxToggle?.(e, !checked);
            setChecked((prev) => !prev);
        } else {
            props?.onClick?.(e);
        }
    };

    const handleCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
        props?.onCheckboxToggle?.(e, e.target.checked);
    };
    return (
        <EventBlocker.LongPress
            onLongPress={props.onLongPress}
            doPropagate={!props.disabled && props.checkBoxMode === true}
        >
            <ListItem disablePadding divider>
                <ListItemButton
                    onClick={handleClick}
                    onContextMenu={props.onContextMenu}
                    disabled={props.disabled ?? false}
                    selected={props.selected}
                    sx={{
                        minWidth: "300px",
                        flexShrink: 1,
                        gap: "3px",
                        background:
                            props.checkBoxMode === false
                                ? undefined
                                : checked
                                  ? "rgb(102, 157, 100)"
                                  : "rgb(102, 157, 246)",
                        padding: "12px",
                        "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.08)",
                        },
                        "&:active": {
                            backgroundColor: "rgba(0, 0, 0, 0.16)",
                        },
                    }}
                >
                    <ListItemAvatar sx={{ flexShrink: 0 }}>
                        {/** undefined when falsy value like '0', undefined */}
                        <Badge
                            badgeContent={props.unreadCount || undefined}
                            color="primary"
                        >
                            <Avatar src={props.image}>
                                {/** when not falsy value. (e.g. "", undefined) */}
                                {props.image || <PersonIcon />}
                            </Avatar>
                        </Badge>
                    </ListItemAvatar>
                    <ListItemText
                        sx={{ flexGrow: 1, flexShrink: 1, flexBasis: "100%" }}
                        primary={
                            <Typography
                                variant="body1"
                                noWrap={true}
                                width="100%"
                                style={{ fontWeight: "bold" }}
                            >
                                {props.title}
                            </Typography>
                        }
                        secondary={
                            <Typography
                                variant="body2"
                                noWrap={true}
                                width="100%"
                                style={{ fontWeight: "bold" }}
                            >
                                {props.lastMessage}
                            </Typography>
                        }
                    />
                    {props.checkBoxMode === true && !props.disabled ? (
                        <Checkbox
                            edge="end"
                            onChange={handleCheckBoxChange}
                            checked={checked}
                        />
                    ) : (
                        <ListItemText
                            sx={{ flexShrink: 1, paddingRight: "7px" }}
                            primary={
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    style={{ whiteSpace: "nowrap" }}
                                >
                                    {elapsedTime(props.lastSentAt)}
                                </Typography>
                            }
                        />
                    )}
                </ListItemButton>
            </ListItem>
        </EventBlocker.LongPress>
    );
};

const elapsedTime = (date?: Date): string => {
    if (!date) {
        return "";
    }

    const start = date;
    const end = new Date();

    const seconds = Math.floor((end.getTime() - start.getTime()) / 1000);
    if (seconds < 60) return "방금 전";

    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;

    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;

    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;

    return `${start.toLocaleDateString()}`;
};

export default ChatRoom;
