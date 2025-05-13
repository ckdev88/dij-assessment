import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PasswordItem from './PasswordItem';

describe('PasswordItem', () => {
  const mockPassword: Password = {
    title: 'Test Password',
    password: 'testpassword',
    customer_name: 'Customer 1',
    customer_color: 'lime',
  };

  it('should display the password as asterisks by default', () => {
    render(<PasswordItem p={mockPassword} />);
    expect(screen.getByText('•••••••')).toBeInTheDocument();
  });

  it('should display the password when the "tonen" link is clicked', () => {
    render(<PasswordItem p={mockPassword} />);
    fireEvent.click(screen.getByText('tonen'));
    expect(screen.getByText('testpassword')).toBeInTheDocument();
  });

  it('should hide the password when the "verbergen" link is clicked', () => {
    render(<PasswordItem p={mockPassword} />);
    fireEvent.click(screen.getByText('tonen'));
    fireEvent.click(screen.getByText('verbergen'));
    expect(screen.getByText('•••••••')).toBeInTheDocument();
  });

  it('should display the correct customer name and color', () => {
    render(<PasswordItem p={mockPassword} />);
    const titleElement = screen.getByText('Test Password');
    expect(titleElement).toHaveAttribute('style', 'background-color: lime;');
    expect(screen.getByText('Customer 1')).toBeInTheDocument();
  });
});
