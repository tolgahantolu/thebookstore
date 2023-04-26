import { render, screen } from '@testing-library/react';
import { Testimonials } from '@/components';

const DUMMY_TESTIMONIALS = [
  {
    id: '1as3ds21vcd3123dxas',
    customerName: 'Tolgahan Tolu',
    customerComment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vestibulum tortor eget feugiat aliquet. Mauris ultricies mauris nec justo auctor cursus. Maecenas vel dui non diam maximus laoreet quis et ligula. Integer neque dui, vehicula ornare.',
    customerImage:
      'https://firebasestorage.googleapis.com/v0/b/nextjs-food-app-29e49.appspot.com/o/woman-familyphotostudio-pixabay.jpg?alt=media&token=236bdfbc-a65a-4564-a7bf-c760387f1534',
  },
];

describe('Testimonials Component', () => {
  beforeEach(() => {
    render(<Testimonials testimonials={DUMMY_TESTIMONIALS} />);
  });

  it('should render header text correctly', () => {
    expect(screen.getByTestId('whatPeopleSay')).toHaveTextContent(/what people say?/i);
  });
});
