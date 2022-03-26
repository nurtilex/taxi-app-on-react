import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { reducer } from '@store';

const renderWithRedux = (component, store = configureStore(reducer)) => {
  return { ...render(<Provider store={store}>{component}</Provider>), store };
};

export default renderWithRedux;
