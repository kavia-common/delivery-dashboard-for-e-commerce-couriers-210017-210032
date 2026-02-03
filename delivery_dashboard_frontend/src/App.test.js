import { render, screen } from '@testing-library/react';
import App from './App';

test('renders delivery dashboard', () => {
  render(<App />);
  const dashboardElement = screen.getByText(/Delivery Dashboard/i);
  expect(dashboardElement).toBeInTheDocument();
});
