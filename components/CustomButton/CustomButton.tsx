import React from 'react';
import styles from './CustomButton.module.css';
import { Button, Box } from '@mui/material';

interface CustomButtonProps {
  title: string;
  disabled: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, disabled }) => {
  return (
    <Box sx={{ width: 300 }}>
      <Button variant='contained' type='submit' disabled={disabled}>
        {title}
      </Button>
    </Box>
  );
};

export default CustomButton;
