import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Box, IconButton, Button, Snackbar, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, ExtendButtonBase, ButtonTypeMap, ButtonProps } from '@mui/material';
import type {SnackbarCloseReason} from "@mui/material/Snackbar"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import * as MenuButton from "./MenuButton"

export default {
    title: 'Components/MenuButton',
    component: MenuButton.MenuButton,
    decorators: [
        (StoryFn) => (
            <Box sx={{ height: '100px', maxWidth: "200px",  display: 'flex', flexDirection: 'column' }}>
                {StoryFn()}
            </Box>
        ),
    ],
} as Meta;


const AlertDialogMenuItem = ({close}: {close?: boolean}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (e: React.MouseEvent) => {
      setOpen(true);
    };
  
    const handleClose = (e: React.MouseEvent) => {
      setOpen(false);
      console.log("Handle alert dialog close", e.currentTarget.getAttributeNames())
      console.log(e.bubbles)
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

const SnackbarMenuItem = () => {
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

const TestTextItem = ({close}: {close?: boolean}) => {
    return (
        <button     >
            Test
        </button>
    )
}

const Template: StoryFn<MenuButton.MenuButtonProps> = (args) => {
    return (
        <MenuButton.MenuButton trigger={<MenuIcon />}>
        {/* @ts-ignore */} 
        {args.children.map((val, idx) => (
            <MenuButton.Item>
                {val}
            </MenuButton.Item>
        ))} 
        </MenuButton.MenuButton>    
    )
}


const TemplateWithClose: StoryFn<MenuButton.MenuButtonProps> = (args) => {
  return (
      <MenuButton.MenuButton trigger={<MenuIcon />}>
      {/* @ts-ignore */} 
      {args.children.map((val, idx) => (
          <MenuButton.ItemWithClose>
              {val}
          </MenuButton.ItemWithClose>
      ))} 
      </MenuButton.MenuButton>    
  )
}

export const Default = Template.bind({})
Default.args = {
    children: [<TestTextItem />]
}

export const WithCloseItem = TemplateWithClose.bind({})
WithCloseItem.args = {
    children: [<TestTextItem />]
}

export const AlartDialog = Template.bind({})
AlartDialog.args = {
  children: [<AlertDialogMenuItem />]
}