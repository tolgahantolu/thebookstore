import { render, screen } from '@testing-library/react';
import { BestSeller } from '@/components';
import React from 'react';

const DUMMY_BOOKS = [
  {
    id: '1as3ds21vcd3123dxas',
    title: 'The Silent History',
    genre: ['history, fantasy'],
    price: 32,
    discount: true,
    discountPrice: 27,
    bestSeller: true,
    featuredImage:
      'https://firebasestorage.googleapis.com/v0/b/nextjs-food-app-29e49.appspot.com/o/book-5.jpg?alt=media&token=02902745-2d6f-4fc0-badb-fbe49205b2e6',
  },
];

describe('BestSeller Component', () => {
  beforeEach(() => {
    render(<BestSeller books={DUMMY_BOOKS} />);
  });

  it('should header text render correctly', () => {
    expect(screen.getByTestId('best-seller-title')).toHaveTextContent(/bestsellers/i);
  });
});
