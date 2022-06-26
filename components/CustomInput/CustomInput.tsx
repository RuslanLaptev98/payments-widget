import React from 'react';
import styles from './CustomInput.module.css';
import { TextField, Box, TextFieldProps } from '@mui/material';
import { useField } from 'formik';

interface CustomInputProps {
  name: string;
  label: string;
  otherProps?: TextFieldProps;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  label,
  otherProps,
}) => {
  const [field, meta] = useField(name);

  const [error, setError] = React.useState<boolean>(false);
  const [helperText, setHelperText] = React.useState<string>('');

  React.useEffect(() => {
    if (meta && meta.touched && meta.error) {
      setError(true);
      setHelperText(meta.error);
    }
    if (meta && !meta.error) {
      setError(false);
      setHelperText('');
    }
  }, [meta]);

  return (
    <Box className={styles.box}>
      <TextField
        className={styles.input}
        variant='standard'
        color='primary'
        fullWidth
        label={label}
        {...field}
        error={error}
        helperText={helperText ? helperText : ' '}
        {...otherProps}
      />
    </Box>
  );
};

export default CustomInput;
