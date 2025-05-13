import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PasswordList from './PasswordList';
import PasswordItem from './PasswordItem';

describe('PasswordList', () => {
  const mockPasswordList: PasswordList = [
    {
      title: 'Test Password 1',
      password: 'testpassword1',
      customer_name: 'Customer 1',
      customer_color: 'red',
    },
    {
      title: 'Test Password 2',
      password: 'testpassword2',
      customer_name: 'Customer 2',
      customer_color: 'blue',
    },
  ];

  it('should display message when password list is empty', () => {
    render(<PasswordList passwordList={[]} />);
    expect(screen.getByText('Er zijn nog geen wachtwoorden aangemaakt.')).toBeInTheDocument();
  });

  it('should display the password list correctly', () => {
    render(<PasswordList passwordList={mockPasswordList} />);

    // check header
    expect(screen.getByText('Overzicht')).toBeInTheDocument();
    expect(screen.getByText('Titel')).toBeInTheDocument();
    expect(screen.getByText('Wachtwoord')).toBeInTheDocument();
    expect(screen.getByText('Klant')).toBeInTheDocument();

    // check password items
    mockPasswordList.forEach((password, index) => {
      expect(screen.getByText(password.title)).toBeInTheDocument();
      expect(screen.getByText(password.customer_name)).toBeInTheDocument();

      const passwordItemElement = screen.getByTestId(`passwordItem-${index}`);
      expect(passwordItemElement).toBeInTheDocument();
      expect(passwordItemElement).toHaveAttribute('style', `background-color: ${password.customer_color};`);
    });
  });
});
