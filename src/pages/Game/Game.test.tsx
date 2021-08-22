import { render, screen, waitFor } from '@testing-library/react';
import Home from './index';
 
test('renders title', async() => {
  render(<Home />);
  await waitFor(() => screen.getByRole('heading'))
  expect(screen.getByRole('heading')).toHaveTextContent('¡Guess the TV show name!')
});