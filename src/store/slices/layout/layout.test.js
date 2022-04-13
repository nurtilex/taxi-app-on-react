import * as selectors from './layoutSelectors';
import initialState from './layoutState';

describe('Layout Slice and Selectors', () => {
  test('Селекторы', () => {
    const state = { layout: initialState };
    const currentPage = selectors.currentPageSelector(state);
    const addressesList = selectors.addressesSelector(state);
    const coordinates = selectors.coordinatesSelector(state);

    expect(currentPage).toBe(initialState.currentPage);
    expect(addressesList).toBe(initialState.addressesList);
    expect(coordinates).toBe(initialState.coordinates);
  });
});
