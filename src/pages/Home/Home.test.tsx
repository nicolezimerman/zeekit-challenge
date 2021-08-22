import { render, screen,waitFor } from '@testing-library/react';
import Home from './index';

test('renders logo image', () => {
  render(<Home />);
  const logoElement = screen.getByAltText('Game');
  expect(logoElement).toBeInTheDocument();
});
 
test("renders start button", () => {
  const {container} = render(<Home />);
  const buttonElement = container.querySelector('button')
  expect(buttonElement).toBeInTheDocument();
});

test('renders title', async() => {
  render(<Home />);
  await waitFor(() => screen.getByRole('heading'))
  expect(screen.getByRole('heading')).toHaveTextContent('Guess the TV show name!')
}); 