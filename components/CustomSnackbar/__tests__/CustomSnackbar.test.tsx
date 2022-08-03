import { render, screen } from '@testing-library/react';
import CustomSnackbar from '../CustomSnackbar';
import '@testing-library/jest-dom';

describe('CustomSnackbar', () => {
  it('renders', () => {
    render(<CustomSnackbar open={true} setOpen={jest.fn()} message='test' />);
    const snackbar = screen.getByText('test');
    expect(snackbar).toBeInTheDocument();
  });
});
