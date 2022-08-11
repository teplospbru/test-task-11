import { render, screen } from '@testing-library/react';
import App from './App';

test('рендерит компонент App', () => {
  render(<App />);
  
  const linkElement = screen.getByText(/portfolio/i);
  expect(linkElement).toBeInTheDocument();
});
