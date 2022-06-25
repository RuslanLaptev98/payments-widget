import React from 'react';
import styles from './CustomInput.module.css';
import { TextField, Box } from '@mui/material';

interface CustomInputProps {
  label: string;
  id: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, id }) => {
  return (
    <Box sx={{ width: 300 }}>
      <TextField variant='filled' label={label} id={id} fullWidth />
    </Box>
  );
};

export default CustomInput;
