import { render, screen, waitFor } from '@testing-library/react';
import End from './index';

test('renders title', async() => {
  render(<End />);
  await waitFor(() => screen.getByRole('heading'))
  expect(screen.getByRole('heading')).toHaveTextContent('You lost, ¿Do you want to start again?')
});

test("renders restart button", () => {
  const {container} = render(<End />);
  const buttonElement = container.querySelector('button')
  expect(buttonElement).toBeInTheDocument();
});