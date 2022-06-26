import React from 'react';
import styles from './CardForm.module.css';
import { Container, Typography } from '@mui/material';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../CustomInput';
import CustomDatePicker from '../CustomDatePicker';
import CustomButton from '../CustomButton';
import submitForm from '../../utils/submitForm';
import getMmYyyyDate from '../../utils/getMmYyyyDate';
import FormikValues from '../../types/FormikValues';
import CustomSnackbar from '../CustomSnackbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#85B6BF',
    },
    secondary: {
      main: '#5BC197',
    },
    error: {
      main: '#B91D1D',
    },
    text: {
      primary: '#85B6BF',
      secondary: 'rgba(133, 182, 191, 0.5)',
    },
    action: {
      disabledBackground: 'rgba(133, 182, 191, 0.5)',
    },
  },
  typography: {
    fontFamily: 'Electrolize, sans-serif',
  },
});

const CardForm: React.FC = () => {
  const formikInitialValues: FormikValues = {
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
    date: Yup.date().not([null]),
    cvv: Yup.string()
      .required('Required')
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(3, 'Must be exactly 3 digits')
      .max(3, 'Must be exactly 3 digits'),
    amount: Yup.number().typeError('Must be a number').required('Required'),
  });

  const [toastOpen, setToastOpen] = React.useState<boolean>(false);
  const [successMessage, setSuccessMessage] = React.useState<string>('');
  React.useEffect(() => {
    if (successMessage.length) setToastOpen(true);
  }, [successMessage]);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xs' className={styles.container}>
        <div className={styles.card}>
          <Typography className={styles.title}>Payments App</Typography>
          <Formik
            initialValues={{ ...formikInitialValues }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              const correctDateFormat = getMmYyyyDate(
                values.date as unknown as Date
              );
              submitForm(
                {
                  CardNumber: values.number,
                  ExpDate: correctDateFormat,
                  Cvv: values.cvv,
                  Amount: values.amount,
                },
                setSuccessMessage
              );

              resetForm();
            }}
          >
            {(props: FormikProps<FormikValues>) => {
              return (
                <Form className={styles.form}>
                  <CustomInput name='number' label='Card Number' />
                  <CustomDatePicker name='date' label='Expiration Date' />
                  <CustomInput name='cvv' label='CVV' />
                  <CustomInput name='amount' label='Amount' />

                  <CustomButton
                    title='отправить'
                    disabled={
                      props.dirty &&
                      props.isValid &&
                      props.values.date &&
                      !isNaN(props.values.date?.getTime()) &&
                      props.values.date?.getTime() > new Date().getTime()
                        ? false
                        : true
                    }
                  />
                </Form>
              );
            }}
          </Formik>
        </div>

        <CustomSnackbar
          open={toastOpen}
          setOpen={setToastOpen}
          message={successMessage}
        />
      </Container>
    </ThemeProvider>
  );
};

export default CardForm;
