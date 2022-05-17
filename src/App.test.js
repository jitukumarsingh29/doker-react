import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react from Jitu new testing tech/i);
  expect(linkElement).toBeInTheDocument();
});
