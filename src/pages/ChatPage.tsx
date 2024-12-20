import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { ChatRoomContainer } from "../components/container/ChatRoomContainer";
import { ChatContentContainer } from "../components/container/ChatContentContainer";

const ChatPage = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                width: "100vw",
                height: "100vh",
                margin: "0 !important",
                padding: "0 !important",
                overflow: "hidden",
            }}
        >
            {!isSmallScreen && (
                <Box sx={{ flex: "0 0 30%", height: "100%" }}>
                    <ChatRoomContainer />
                </Box>
            )}
            <Box sx={{ flex: isSmallScreen ? "1 1 100%" : "0 0 70%", height: "100%" }}>
                <ChatContentContainer />
            </Box>
        </Box>
    );
};

export default ChatPage;
