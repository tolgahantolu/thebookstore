import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  beforeEach(() => {
    render(<Navbar />, { wrapper: MemoryRouterProvider });
  });

  it('should the logo must be display', () => {
    expect(screen.getByTestId('logo')).toHaveTextContent(/the bookstore/i);
  });

  it('should redirect to url and update history', async () => {
    const user = userEvent.setup();
    await user.click(screen.getByText('about', { exact: false }));

    expect(MockRouter.pathname).toEqual('/about');
  });
});
