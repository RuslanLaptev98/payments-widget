import React from 'react';
import styles from './CustomButton.module.css';
import { Button, Box } from '@mui/material';
import { useFormikContext } from 'formik';

interface CustomButtonProps {
  title: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title }) => {
  const [disabled, setDisabled] = React.useState(false);
  const { submitForm } = useFormikContext();

  return (
    <Box sx={{ width: 300 }}>
      <Button
        variant='contained'
        disabled={disabled}
        onClick={submitForm}
        type='submit'
      >
        {title}
      </Button>
    </Box>
  );
};

export default CustomButton;
