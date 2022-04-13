import * as selectors from './errorsSelectors';
import initialState from './errorsState';

describe('Errors Slice and Selectors', () => {
  test('Селекторы', () => {
    const state = { errors: initialState };
    const login = selectors.loginErrorSelector(state);
    const payment = selectors.paymentErrorSelector(state);
    const registration = selectors.registrationErrorSelector(state);

    expect(login).toBe(initialState.login);
    expect(payment).toBe(initialState.payment);
    expect(registration).toBe(initialState.registration);
  });
});
