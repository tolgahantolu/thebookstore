import { render, screen } from '@testing-library/react';
import { Footer } from '@/components';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('should render copyright text correctly', () => {
    expect(screen.getByTestId('copyright')).toHaveTextContent(
      /Demo 2023 © Tolgahan Tolu. All Rights Reserved/i,
    );
  });
});
