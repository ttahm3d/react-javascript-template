import { render, screen } from '@testing-library/react';
import App from './app';

it('should render the app component', () => {
  render(<App />);
  const text = screen.getByText(/React starter/i);
  expect(text).toBeInTheDocument();
});
