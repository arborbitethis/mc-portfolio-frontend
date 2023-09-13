import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn to resume PDF', () => {
  render(<App />);
  const linkElement = screen.getByText(/PDF of my current resume/i);
  expect(linkElement).toBeInTheDocument();
});
