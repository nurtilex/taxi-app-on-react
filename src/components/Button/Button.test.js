import { render } from '@testing-library/react';
import Button from './Button';
const BUTTON_TEXT = 'button';

describe('Button Component', () => {
  it('should render', () => {
    const { getByText } = render(<Button text={BUTTON_TEXT} />);
    const btn = getByText(BUTTON_TEXT);

    expect(btn).toBeInTheDocument();
  });
  it('has proper text', () => {
    const { getByText } = render(<Button text={BUTTON_TEXT} />);
    const btn = getByText(BUTTON_TEXT);

    expect(btn).toHaveTextContent(BUTTON_TEXT);
  });
  it('has proper type', () => {
    const { getByText } = render(<Button text={BUTTON_TEXT} type="button" />);
    const btn = getByText(BUTTON_TEXT);

    expect(btn).toHaveAttribute('type', 'button');
  });
  it('triggers passed function on click', () => {
    const mock = jest.fn();
    const attr = { text: BUTTON_TEXT, type: 'submit', onClick: mock };
    const { getByText } = render(<Button {...attr} />);
    const btn = getByText(BUTTON_TEXT);

    btn.click();

    expect(mock).toHaveBeenCalled;
  });
});
