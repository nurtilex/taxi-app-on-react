import { render } from '@testing-library/react';
import Logo from './Logo';

describe('Logo Component', () => {
  test('Наличие в DOM', () => {
    const { getByTestId } = render(<Logo id="logo" />);
    const div = getByTestId('logo');

    expect(div).toBeInTheDocument();
  });
});
