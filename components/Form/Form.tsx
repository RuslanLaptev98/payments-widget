import React from 'react';
import styles from './Form.module.css';
import { Container, Stack, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../CustomInput/CustomInput';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import CustomButton from '../CustomButton/CustomButton';

const CardForm: React.FC = () => {
  const [dateValue, setDateValue] = React.useState(null);

  const FORMIK_INITIAL_VALUES = {
    card: '',
    date: dateValue,
    cvv: '',
    amount: '',
  };

  const YUP_VALIDATION = Yup.object().shape({
    card: Yup.string()
      .required('Required')
      .matches(/^\d+$/, 'Must be a number')
      .length(16, 'Must be exactly 16 characters'),
    date: Yup.date().required('Required'),
    cvv: Yup.string()
      .required('Required')
      .matches(/^\d+$/, 'Must be a number')
      .length(3, 'Must be exactly 3 characters'),
    amount: Yup.string()
      .required('Required')
      .matches(/^\d+$/, 'Must be a number'),
  });

  return (
    <Container maxWidth='xs' className={styles.container}>
      <Formik
        initialValues={{ ...FORMIK_INITIAL_VALUES }}
        onSubmit={(values) => console.log(values)}
        validationSchema={YUP_VALIDATION}
      >
        <Form>
          <Stack spacing={2}>
            <CustomInput name='card' label='Card Number' />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                views={['month', 'year']}
                value={dateValue}
                onChange={setDateValue}
                renderInput={(params) => (
                  <TextField name='date' label='Expiration Date' {...params} />
                )}
                inputFormat='MM-yyyy'
              />
            </LocalizationProvider>

            <CustomInput name='cvv' label='CVV' />

            <CustomInput name='amount' label='Amount' />

            <CustomButton title='отправить' />
          </Stack>
        </Form>
      </Formik>
    </Container>
  );
};

export default CardForm;
