import React from 'react';
import styles from './Form.module.css';
import { Stack } from '@mui/material';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';

const Form: React.FC = () => {
  return (
    <Stack spacing={2}>
      <CustomInput label='Card Number' id='card-number' />
      <CustomInput label='Expiration Date' id='expiration-date' />
      <CustomInput label='CVV' id='cvv' />
      <CustomInput label='Amount' id='amount' />
      <CustomButton title='оплатить' />
    </Stack>
  );
};

export default Form;
