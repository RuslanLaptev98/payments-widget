import React from 'react';
import styles from './CustomSnackbar.module.css';
import { Snackbar, Alert, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CustomSnackbarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  open,
  setOpen,
  message,
}) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} onClose={handleClose} autoHideDuration={5000}>
      <Alert severity='success'>
        <Typography className={styles.text}>{message}</Typography>
        <IconButton
          size='small'
          aria-label='close'
          color='inherit'
          onClick={handleClose}
        >
          <CloseIcon fontSize='small' />
        </IconButton>
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
