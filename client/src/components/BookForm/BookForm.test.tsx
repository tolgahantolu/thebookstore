import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BookForm } from '@/components';

describe('Book Form Input', () => {
  it('updates on change', () => {
    render(<BookForm />);

    const searchIcon = screen.getByTestId('bookFormIcon');
    fireEvent.click(searchIcon);

    const input = screen.getByTestId('bookFormInput') as HTMLInputElement;
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 2 } });
    expect(input.value).toBe(2);
  });
});
