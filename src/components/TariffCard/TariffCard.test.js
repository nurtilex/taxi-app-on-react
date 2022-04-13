import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TariffCard from './TariffCard';

describe('TariffCard component', () => {
  test('Наличие в DOM', () => {
    const { queryByTestId } = render(
      <TariffCard type="standard" price="500" />
    );
    const div = queryByTestId('tariff card');

    expect(div).toBeInTheDocument();
  });

  test('Правильный переданный тип', () => {
    const { queryByText } = render(<TariffCard type="premium" price="500" />);
    const div = queryByText('Премиум');

    expect(div).toBeInTheDocument();
  });

  test('Правильный переданный price', () => {
    const { queryByText } = render(<TariffCard type="premium" price="500" />);
    const div = queryByText('500');

    expect(div).toBeInTheDocument();
  });

  test('Вызов переданной функции по клику', () => {
    const mock = jest.fn();
    const { queryByTestId } = render(
      <TariffCard type="standard" price="500" onClick={mock} />
    );

    userEvent.click(queryByTestId('tariff card'));
    expect(mock).toBeCalled();
  });
});
