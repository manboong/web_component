import React, { useState } from 'react';
import { 
    useTheme,     
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    useMediaQuery
} from '@mui/material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export interface ChatRoomHeaderProps {
    title: string;
    role: "provider" | "consumer";
    onBackClick: () => void;
    onHireClick: () => void;
    onEndHireClick: () => void;
}

const ChatRoomHeader: React.FC<ChatRoomHeaderProps> = ({ title, role, onBackClick, onHireClick, onEndHireClick }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleConfirmEndHire = () => {
        setOpenDialog(false);
        onEndHireClick();
    };

    return (
        <>
            <AppBar position="static" sx={{ maxWidth: 1080 }} >
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
                    {role === "provider" && (
                        <>
                            <Button color="inherit" onClick={onHireClick}>
                                채용하기
                            </Button>
                            <Button color="inherit" onClick={handleOpenDialog}>
                                채용종료
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>

            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">채용 종료 확인</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        정말로 채용과정을 종료하시겠습니까?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        뒤로
                    </Button>
                    <Button onClick={handleConfirmEndHire} color="primary" autoFocus>
                        채용종료
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ChatRoomHeader;
