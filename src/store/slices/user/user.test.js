import * as selectors from './userSelectors';
import initialState from './userState';

describe('User Slice and Selectors', () => {
  test('Селекторы', () => {
    const state = { user: initialState };
    const payment = selectors.paymentSelector(state);
    const email = selectors.emailSelector(state);
    const name = selectors.nameSelector(state);

    expect(payment).toBe(initialState.payment);
    expect(email).toBe(initialState.email);
    expect(name).toBe(initialState.name);
  });
});
