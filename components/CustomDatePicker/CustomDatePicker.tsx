import React from 'react';
import styles from './CustomDatePicker.module.css';
import { TextField, Box } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { useField } from 'formik';
import CustomInput from '../CustomInput';

interface CustomDatePickerProps {
  name: string;
  label: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ name, label }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={['month', 'year']}
        inputFormat='MM/yyyy'
        disablePast
        label={label}
        value={field.value}
        onChange={(value) => helpers.setValue(value)}
        renderInput={(params) => (
          <Box sx={{ width: 300 }}>
            <TextField fullWidth {...params} />
          </Box>
        )}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
