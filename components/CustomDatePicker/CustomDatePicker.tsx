import React from 'react';
import styles from './CustomDatePicker.module.css';
import { TextField, Box } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { useField } from 'formik';

interface CustomDatePickerProps {
  name: string;
  label: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ name, label }) => {
  const [field, meta, helpers] = useField(name);

  const [error, setError] = React.useState<boolean>(false);
  const [helperText, setHelperText] = React.useState<string>('');

  React.useEffect(() => {
    if (meta?.error && meta?.touched) {
      console.log(meta.error);
      setError(true);
      setHelperText('Specify date in mm/yyyy format');
    }
    if (!meta?.error) {
      setError(false);
      setHelperText('');
    }
    if ((field?.value as unknown as Date)?.getTime() < new Date().getTime()) {
      setError(true);
      setHelperText('Your card expired');
    }
  }, [meta, field]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        OpenPickerButtonProps={{ color: 'primary' }}
        views={['month', 'year']}
        inputFormat='MM/yyyy'
        disablePast
        label={label}
        value={field.value}
        onChange={(value) => {
          helpers.setTouched(true);
          helpers.setValue(value);
        }}
        renderInput={(params) => (
          <Box className={styles.box}>
            <TextField
              className={styles.input}
              variant='standard'
              fullWidth
              {...params}
              error={error}
              helperText={helperText ? helperText : ' '}
              onBlur={() => helpers.setTouched(true)}
            />
          </Box>
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
