import { render, screen } from '@testing-library/react';
import { Book } from '@/components';

const DUMMY_BOOK_DETAILS = {
  id: '1as3ds21vcd3123dxas',
  title: 'The Silent History',
  genre: ['history, fantasy'],
  price: 32,
  discount: true,
  discountPrice: 27,
  bestSeller: true,
  featuredImage:
    'https://firebasestorage.googleapis.com/v0/b/nextjs-food-app-29e49.appspot.com/o/book-5.jpg?alt=media&token=02902745-2d6f-4fc0-badb-fbe49205b2e6',
};

describe('Book Component', () => {
  beforeEach(() => {
    render(<Book {...DUMMY_BOOK_DETAILS} />);
  });

  it('should book title render correctly', () => {
    expect(screen.getByText(/the silent history/i)).toHaveTextContent(/the silent history/i);
  });

  it('should book genres to be in the document and greater than zero', () => {
    const genres = screen.getAllByRole('genre');

    expect(genres).toBeInTheDocument();
    expect(genres.length).toBeGreaterThan(0);
  });

  it('should book price render correctly', () => {
    expect(screen.getByTestId('price')).toBeInTheDocument();
    expect(screen.getByTestId('price')).toBeGreaterThan(0);
  });
});
