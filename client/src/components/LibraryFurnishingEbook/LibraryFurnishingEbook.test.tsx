import { screen, render } from '@testing-library/react';
import { LibraryFurnishingEbook } from '@/components';

describe('LibraryFurnishingEbook Component', () => {
  beforeEach(() => {
    render(<LibraryFurnishingEbook />);
  });

  it("should have 'library' text", () => {
    expect(screen.getByTestId('library')).toHaveTextContent(/library/i);
  });

  it("should have 'furnishing' text", () => {
    expect(screen.getByTestId('furnishing')).toHaveTextContent(/furnishing/i);
  });

  it("should have 'ebooks' text", () => {
    expect(screen.getByTestId('ebooks')).toHaveTextContent(/ebooks/i);
  });
});
