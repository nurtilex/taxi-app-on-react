import { render } from '@testing-library/react';
import AddressInput from './AddressInput.jsx';
import svg from '@assets/arrow-down.svg';
import renderWithRedux from '@hoc/renderWithRedux';

describe('Address Input', () => {
  test('Наличие в документе', () => {
    const { queryByTestId } = render(
      <AddressInput svgComponent={svg} name="test" isTest />
    );

    const div = queryByTestId('div');
    expect(div).toBeInTheDocument();
  });

 
});
