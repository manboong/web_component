import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import ChatRoomHeader, { ChatRoomHeaderProps } from "./ChatRoomHeader";
import {
    Box,
    IconButton,
    Button,
    Snackbar,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@mui/material";
import type { SnackbarCloseReason } from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import * as MenuButton from "./MenuButton";

export default {
    title: "Components/ChatRoomHeader",
    component: ChatRoomHeader,
    decorators: [
        (StoryFn) => (
            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {StoryFn()}
            </Box>
        ),
    ],
} as Meta;

const AlertDialogMenuItem = ({ close }: { close?: boolean }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (e: React.MouseEvent) => {
        setOpen(true);
    };

    const handleClose = (e: React.MouseEvent) => {
        setOpen(false);
        console.log(
            "Handle alert dialog close",
            e.currentTarget.getAttributeNames(),
        );
        console.log(e.bubbles);
    };
    const AlertDiagram = (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                인원 모집 마감하기
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"고용완료 확인하기"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        고용 완료 후에는 학생을 바꾸기 어렵습니다. 요청을
                        수락하시겠습니까?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>미동의</Button>
                    <Button onClick={handleClose} autoFocus>
                        동의
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );

    return (
        <MenuButton.MenuButton trigger={<MenuIcon />}>
            <MenuButton.Item>{AlertDiagram}</MenuButton.Item>
        </MenuButton.MenuButton>
    );
};

const SnackbarMenuItem = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick: React.MouseEventHandler = (e) => {
        setOpen(true);
    };

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
        setTimeout(() => {
            // @ts-ignore
            handleCloseMenu(undefined);
        }, 200);
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <MenuButton.MenuButton trigger={<MenuIcon />}>
            <MenuButton.Item>
                <>
                    <Button onClick={handleClick}>Open Snackbar</Button>
                    <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Note archived"
                        action={action}
                    />
                </>
            </MenuButton.Item>
        </MenuButton.MenuButton>
    );
};
const Template: StoryFn<ChatRoomHeaderProps> = (args) => {
    return (
        <Box maxWidth="500px">
            <ChatRoomHeader {...args} />
        </Box>
    );
};

const TestText = ({ close }: { close?: boolean }) => {
    return (
        <MenuButton.MenuButton trigger={<MenuIcon />}>
            <MenuButton.Item>
                <button>Test</button>
            </MenuButton.Item>
        </MenuButton.MenuButton>
    );
};

export const Default = Template.bind({});
Default.args = {
    title: "Provider",
    menuItemList: [<TestText />],
    onBackClick: () => alert("Back button clicked"),
};

export const LongTitle = Template.bind({});
LongTitle.args = {
    title: "This is long title test this is long title testing",
    menuItemList: [<TestText />],
    onBackClick: () => alert("Back button clicked"),
};

export const WithDialogItem = Template.bind({});
WithDialogItem.args = {
    title: "Provider",
    menuItemList: [<AlertDialogMenuItem close />],
    onBackClick: () => alert("Back button clicked"),
};

export const WithSnackBarItem = Template.bind({});
WithSnackBarItem.args = {
    title: "Provider",
    menuItemList: [<SnackbarMenuItem />],
    onBackClick: () => alert("Back button clicked"),
};

export const MoreThanTwoItem = Template.bind({});
MoreThanTwoItem.args = {
    title: "Provider",
    menuItemList: [
        <SnackbarMenuItem />,
        <Button color="inherit">Button</Button>,
    ],
    onBackClick: () => alert("Back button clicked"),
};
