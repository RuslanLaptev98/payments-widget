import React from 'react';
import styles from './CustomButton.module.css';
import { Button, Box } from '@mui/material';

interface CustomButtonProps {
  title: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title }) => {
  const [disabled, setDisabled] = React.useState(false);

  return (
    <Box sx={{ width: 300 }}>
      <Button variant='contained' type='submit' disabled={disabled}>
        {title}
      </Button>
    </Box>
  );
};

export default CustomButton;
