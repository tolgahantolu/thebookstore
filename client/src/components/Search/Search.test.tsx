import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search';

describe('Search Input', () => {
  it('updates on change', () => {
    render(<Search />);

    const searchIcon = screen.getByTestId('searchIcon');
    fireEvent.click(searchIcon);

    const input = screen.getByTestId('searchInput') as HTMLInputElement;
    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });
});
