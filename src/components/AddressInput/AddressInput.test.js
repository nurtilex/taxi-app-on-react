import { render, fireEvent } from '@testing-library/react';
import AddressInput from './AddressInput.jsx';
import svgComponent from '@assets/dot.svg';

describe('AddressInput Component', () => {
  it('should render', () => {
    const { queryByTestId } = render(
      <AddressInput svgComponent={svgComponent} name="testName" testId="test" />
    );
    const div = queryByTestId('test');

    expect(div).toBeInTheDocument();
  });

  it('has proper placeholder', () => {
    const { queryByPlaceholderText } = render(
      <AddressInput
        svgComponent={svgComponent}
        name="testName"
        placeholder="test"
      />
    );
    const input = queryByPlaceholderText('test');

    expect(input).toHaveProperty('placeholder', 'test');
  });

  it('triggers passed function on change', () => {
    const handleChange = jest.fn();

    const { queryByPlaceholderText } = render(
      <AddressInput
        svgComponent={svgComponent}
        name="testName"
        placeholder="test"
        onValueChange={handleChange}
      />
    );
    fireEvent.change(queryByPlaceholderText('test'), {
      target: { value: '1' },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
