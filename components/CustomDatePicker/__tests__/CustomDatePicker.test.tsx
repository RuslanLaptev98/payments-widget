import { render, screen } from '@testing-library/react';
import CustomDatePicker from '../CustomDatePicker';
import '@testing-library/jest-dom';
import { Formik } from 'formik';

const MockedCustomDatePicker = () => {
  return (
    <Formik initialValues={{ date: null }} onSubmit={jest.fn()}>
      <CustomDatePicker name='date' label='test' />
    </Formik>
  );
};

describe('CustomDatePicker', () => {
  it('renders', () => {
    render(<MockedCustomDatePicker />);
    const input = screen.getByLabelText('test');
    expect(input).toBeInTheDocument();
  });
});
