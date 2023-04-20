import { render, screen } from '@testing-library/react';
import { AuthorOTM } from '@/components';

const DUMMY_AUTHORS = [
  {
    id: 'asdads123sfdsdg',
    image:
      'http://localhost:3000/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnextjs-food-app-29e49.appspot.com%2Fo%2Fman-pixabay-elsimage.jpg%3Falt%3Dmedia%26token%3De0a21379-11dc-4c45-8b49-8124130f678c&w=384&q=75',
    name: 'Tolgahan',
    surname: 'Tolu',
    novelPrize: 2017,
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam in nihil, ipsa commodi incidunt ratione sapiente! Quaerat placeat, quas ipsam nihil rerum tempora eos vel facere quisquam nesciunt unde dolor.',
    authorOTM: true,
    books: [
      {
        id: 'gdfgdgvwr12hfj6786',
        title: 'The Silent History',
        price: 32,
        genre: ['History', 'Fantasy'],
        bestSeller: true,
        featuredImage:
          'http://localhost:3000/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fnextjs-food-app-29e49.appspot.com%2Fo%2Fbook-5.jpg%3Falt%3Dmedia%26token%3D02902745-2d6f-4fc0-badb-fbe49205b2e6&w=256&q=75',
        discount: true,
        discountPrice: 27,
      },
    ],
  },
];

describe('Author Of The Month Component', () => {
  beforeEach(() => {
    render(<AuthorOTM authors={DUMMY_AUTHORS} />);
  });

  it('should render title text correctly', () => {
    expect(screen.getByTestId('authorOtmTitle')).toHaveTextContent(/Author Of The Month/i);
  });
});
