import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('should render header text correctly', () => {
    expect(screen.getByTestId('header-text')).toHaveTextContent(
      /Today a reader, tomorrow a leader./i,
    );
  });
});
