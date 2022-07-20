import React from 'react';
import styles from './PaymentsWidget.module.css';
import { Container, Typography } from '@mui/material';
import { Formik, Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import CustomInput from '../../components/CustomInput';
import CustomDatePicker from '../../components/CustomDatePicker';
import CustomButton from '../../components/CustomButton';
import submitForm from '../../utils/submitForm';
import getMmYyyyDate from '../../utils/getMmYyyyDate';
import FormikValues from '../../types/FormikValues';
import CustomSnackbar from '../../components/CustomSnackbar';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from '../../utils/customTheme';

const PaymentsWidget: React.FC = () => {
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
    date: Yup.date().required('Required'),
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
    <ThemeProvider theme={customTheme}>
      <Container maxWidth='xs'>
        <section className={styles.card}>
          <Typography className={styles.title}>Payments Widget</Typography>
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
                    title='send'
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
        </section>

        <CustomSnackbar
          open={toastOpen}
          setOpen={setToastOpen}
          message={successMessage}
        />
      </Container>
    </ThemeProvider>
  );
};

export default PaymentsWidget;
