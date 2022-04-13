import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button.jsx';

describe('Button Component', () => {
  test('Есть в DOM', () => {
    const { queryByText } = render(<Button text="test" />);
    const button = queryByText('test');

    expect(button).toBeInTheDocument();
  });

  test('Аттрибут type равен button при непереданном значении', () => {
    const { queryByText } = render(<Button text="test" />);
    const button = queryByText('test');

    expect(button).toHaveAttribute('type', 'button');
  });

  test('Аттрибут type равен переданному значению', () => {
    const { queryByText } = render(<Button text="test" type="submit" />);
    const button = queryByText('test');

    expect(button).toHaveAttribute('type', 'submit');
  });

  test('Переданная функция вызывается при клике на кнопку', () => {
    const mock = jest.fn();
    const { queryByText } = render(<Button text="test" onClick={mock} />);
    const button = queryByText('test');
    userEvent.click(button);
    userEvent.click(button);
    expect(mock).toBeCalledTimes(2);
  });
});
