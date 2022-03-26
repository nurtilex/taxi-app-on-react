import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { reducer } from '@store';

const renderWithRedux = (component, store = createStore(reducer)) => {
  return { ...render(<Provider store={store}>{component}</Provider>), store };
};

export default renderWithRedux;
