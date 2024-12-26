import React, { useState } from 'react';
import { 
    useTheme,     
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    useMediaQuery
} from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import MenuIcon from "@mui/icons-material/Menu"

import * as MenuButton from './MenuButton'

export interface ChatRoomHeaderProps {
    title: string;
    menuItemList: React.ReactElement[];
    onBackClick: () => void;
}

const ChatRoomHeader: React.FC<ChatRoomHeaderProps> = ({ title, menuItemList, onBackClick }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <>
            <AppBar position="static" >
                <Toolbar>
                    {!isMobile && (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="back"
                            onClick={onBackClick}
                        >
                            <NavigateBeforeIcon />
                        </IconButton>
                    )}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    
                    <MenuButton.MenuButton trigger={<MenuIcon />}>
                            {menuItemList.map((val, idx) => (
                                <MenuButton.Item>
                                    {val}
                                </MenuButton.Item>
                            ))} 
                    </MenuButton.MenuButton>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default ChatRoomHeader;