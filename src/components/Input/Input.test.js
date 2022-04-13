import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';
const props = {
  name: 'test',
  label: 'for Test',
  register: () => {},
  type: 'text',
  required: true,
  error: {
    name: {
      type: 'required',
    },
  },
  placeholder: 'test',
  classes: '',
};
describe('Input Component', () => {
  test('Наличие в DOM', () => {
    const { getByPlaceholderText, getByText } = render(<Input {...props} />);
    const input = getByPlaceholderText(props.placeholder);
    const label = getByText(props.label);

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });
});
