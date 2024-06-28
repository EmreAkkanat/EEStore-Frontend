import React from 'react';
import { UseFormReset } from 'react-hook-form';

// ICON
import { IoClose } from "react-icons/io5";

// MUI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';


const Transition = React.forwardRef(function Transition(props: TransitionProps & { children: React.ReactElement; }, ref: React.Ref<unknown>,) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type FullScreenDialogComponentProps = {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formRef: React.MutableRefObject<HTMLFormElement>;
  formReset: UseFormReset<any>;
  title: string;
};

const FullScreenDialogComponent: React.FC<FullScreenDialogComponentProps> = ({ children, open, setOpen, formRef, formReset, title }) => {

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => {
    formReset();
    setOpen(false);
  };

  const formSubmit = () => {
    if (formRef.current)
      formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} sx={{ width: "fit-content", marginBottom: "1rem" }}>ADD</Button>

      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="close" onClick={handleClose}><IoClose /></IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">{title}</Typography>
            <Button autoFocus color="inherit" onClick={formSubmit}>save</Button>
          </Toolbar>
        </AppBar>

        <List>
          {children}
        </List>
      </Dialog>
    </React.Fragment>
  );
};

export default FullScreenDialogComponent;
