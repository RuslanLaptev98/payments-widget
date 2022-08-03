import { render, screen } from '@testing-library/react';
import CustomInput from '../CustomInput';
import '@testing-library/jest-dom';
import { Formik } from 'formik';

const MockedCustomInput = () => {
  return (
    <Formik initialValues={{ test: '' }} onSubmit={jest.fn()}>
      <CustomInput name='test' label='test' />
    </Formik>
  );
};

describe('CustomInput', () => {
  it('renders', () => {
    render(<MockedCustomInput />);
    const input = screen.getByLabelText('test');
    expect(input).toBeInTheDocument();
  });
});
