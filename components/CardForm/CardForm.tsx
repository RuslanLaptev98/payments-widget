import React from 'react';
import styles from './CardForm.module.css';
import { Container } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../CustomInput';
import CustomDatePicker from '../CustomDatePicker';
import CustomButton from '../CustomButton';

const CardForm: React.FC = () => {
  const formikInitialValues = {
    number: '',
    date: null,
    cvv: '',
    amount: '',
  };

  const validationSchema = Yup.object().shape({
    number: Yup.string()
      .required('Required')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(16, 'Must be exactly 16 digits')
      .max(16, 'Must be exactly 16 digits'),
    date: Yup.date(),
    cvv: Yup.string()
      .required('Required')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(3, 'Must be exactly 3 digits')
      .max(3, 'Must be exactly 3 digits'),
    amount: Yup.number().typeError('Must be a number').required('Required'),
  });

  return (
    <Container maxWidth='xs' className={styles.container}>
      <Formik
        initialValues={{ ...formikInitialValues }}
        onSubmit={(values) => {
          const stringDate = (values.date as unknown as Date).toISOString();
          const correctDateFormat = stringDate.split('-').slice(0, 2).join('/');
          console.log(correctDateFormat);
        }}
        validationSchema={validationSchema}
      >
        <Form className={styles.form}>
          <CustomInput name='number' label='Card Number' />
          <CustomDatePicker name='date' label='Expiration Date' />
          <CustomInput name='cvv' label='CVV' />
          <CustomInput name='amount' label='Amount' />
          <CustomButton title='отправить' />
        </Form>
      </Formik>
    </Container>
  );
};

export default CardForm;
