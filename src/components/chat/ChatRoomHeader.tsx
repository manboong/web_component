import React, { useState } from 'react';
import { 
    useTheme,     
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Menu,
    MenuItem,
    useMediaQuery
} from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import MenuIcon from "@mui/icons-material/Menu"

export interface ChatRoomHeaderProps {
    title: string;
    menuItemList?: ((closeMenuHandler: ()=>(void))=>JSX.Element)[];
    onBackClick: () => void;
}

const ChatRoomHeader: React.FC<ChatRoomHeaderProps> = ({ title, menuItemList, onBackClick }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

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
                    <IconButton
                        id="chat-header-button"
                        aria-controls={open ? 'chat-header-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        aria-label='menu'
                        onClick={handleClick}
                        color="inherit"
                    >
                            <MenuIcon />
                    </IconButton>
                    <Menu
                        id='chat-header-menu'
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        elevation={0}
                        anchorOrigin={{
                            vertical: "center",
                            horizontal: "left",
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        MenuListProps={{
                            'aria-labelledby': 'chat-header-button',
                        }}
                    >
                        {
                            menuItemList === undefined ?
                                <></>
                            :
                                menuItemList.map((val, idx) => {
                                    return (
                                        <>
                                        <MenuItem
                                        >
                                           {val(handleClose)}
                                        </MenuItem>
                                        {/** Add divider */}
                                        {
                                            idx < menuItemList.length ?
                                                <Divider sx={{ my: 0.5 }} />
                                            :
                                                <></>
                                        }
                                        </>
                                    )
                                })
                        }
                    </Menu>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default ChatRoomHeader;