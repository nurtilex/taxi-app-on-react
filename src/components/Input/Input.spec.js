import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

const mock = jest.fn();
const attrs = {
  type: 'email',
  name: 'email',
  placeholder: 'placeholder test',
  text: 'input test',
  required: true,
  onChange: mock,
  value: '',
};

describe('Input Component', () => {
  it('should render input', () => {
    const { queryByPlaceholderText } = render(<Input {...attrs} />);
    const inp = queryByPlaceholderText(attrs.placeholder);

    expect(inp).toBeInTheDocument();
  });
  it('should render label', () => {
    const { queryByTestId } = render(<Input {...attrs} testId="label" />);
    const label = queryByTestId('label');

    expect(label).toBeInTheDocument();
  });
  it('label has proper for attribute', () => {
    const { queryByTestId } = render(<Input {...attrs} testId="label" />);
    const label = queryByTestId('label');

    expect(label).toHaveProperty('htmlFor', attrs.name);
  });
  it('has proper type', () => {
    const { queryByPlaceholderText } = render(<Input {...attrs} />);
    const input = queryByPlaceholderText(attrs.placeholder);

    expect(input).toHaveProperty('type', attrs.type);
  });
  it('triggers on change', () => {
    const { queryByPlaceholderText } = render(<Input {...attrs} />);
    const input = queryByPlaceholderText(attrs.placeholder);

    fireEvent.change(input, { target: { value: 'test' } });

    expect(mock).toHaveBeenCalled();
  });
});
