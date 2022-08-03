import { render, screen } from '@testing-library/react';
import CustomButton from '../CustomButton';
import '@testing-library/jest-dom';

describe('CustomButton', () => {
  it('renders', () => {
    render(<CustomButton title='Button' disabled={false} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('is disabled if disabled prop is true', () => {
    render(<CustomButton title='Button' disabled={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('is enabled if disabled prop is false', () => {
    render(<CustomButton title='Button' disabled={false} />);
    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();
  });

  it('correctly renders title', () => {
    render(<CustomButton title='Test title' disabled={false} />);
    const button = screen.getByRole('button');
    expect(button.innerHTML).toContain('Test title');
  });
});
