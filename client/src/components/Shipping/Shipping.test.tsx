import { render, screen } from '@testing-library/react';
import { Shipping } from '@/components';

describe('Free Shipping Component', () => {
  beforeEach(() => {
    render(<Shipping />);
  });

  it("should render 'FREE SHIPPING' text correctly", () => {
    expect(screen.getByTestId('freeShipping')).toHaveTextContent(/free shipping/i);
  });

  it("should render 'FREE SHIPPING OVER $59 FOR INTERNATIONAL ORDERS' text correctly", () => {
    expect(screen.getByTestId('subFreeShipping')).toHaveTextContent(
      /FREE SHIPPING OVER $59 FOR INTERNATIONAL ORDERS/i,
    );
  });
});
