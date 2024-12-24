import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ChatRoomHeader, { ChatRoomHeaderProps } from './ChatRoomHeader';
import { Box, IconButton, Button, Snackbar, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import type {SnackbarCloseReason} from "@mui/material/Snackbar"
import CloseIcon from "@mui/icons-material/Close"

export default {
    title: 'Components/ChatRoomHeader',
    component: ChatRoomHeader,
    decorators: [
        (StoryFn) => (
            <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
                {StoryFn()}
            </Box>
        ),
    ],
} as Meta;

const Template: StoryFn<ChatRoomHeaderProps> = (args) => <ChatRoomHeader {...args} />;

const AlertDialogMenuItem = (handleCloseMenu: React.MouseEventHandler) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (e: React.MouseEvent) => {
      setOpen(true);
    };
  
    const handleClose = (e: React.MouseEvent) => {
      setOpen(false);
      handleCloseMenu(e);
    };
    return (
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
                고용 완료 후에는 학생을 바꾸기 어렵습니다. 요청을 수락하시겠습니까?
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
}

const SnackbarMenuItem = (handleCloseMenu: React.MouseEventHandler) => {
    const [open, setOpen] = React.useState(false);
  
    const handleClick: React.MouseEventHandler = (e) => {
      setOpen(true);
    };
  
    const handleClose = (
      event: React.SyntheticEvent | Event,
      reason?: SnackbarCloseReason,
    ) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
      setTimeout(() => {
        // @ts-ignore
          handleCloseMenu(undefined);
      }, 200)
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
      <div>
        <Button onClick={handleClick}>Open Snackbar</Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Note archived"
          action={action}
        />
      </div>
    );
  }

const TestText = (onClick: React.MouseEventHandler) => {
    return (
        <button    
            onClick={(e)=>onClick(e)}
        >
            Test
        </button>
    )
}
export const Default = Template.bind({});
Default.args = {
    title: 'Provider',
    menuItemList: [TestText],
    onBackClick: () => alert('Back button clicked'),
};


export const WithTwoItem = Template.bind({});
WithTwoItem.args = {
    title: 'Provider',
    menuItemList: [TestText, TestText],
    onBackClick: () => alert('Back button clicked'),
};

export const WithDialogItem = Template.bind({});
WithDialogItem.args = {
    title: 'Provider',
    menuItemList: [AlertDialogMenuItem],
    onBackClick: () => alert('Back button clicked'),
};


export const WithSnackBarItem = Template.bind({});
WithSnackBarItem.args = {
    title: 'Provider',
    menuItemList: [SnackbarMenuItem],
    onBackClick: () => alert('Back button clicked'),
};

