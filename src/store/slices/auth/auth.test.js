import * as selectors from './authSelectors';
import initialState from './authState';

describe('Auth Slice and Selectors', () => {
  test('Селекторы', () => {
    const state = { auth: initialState };
    const isAuthenticated = selectors.isAuthenticatedSelector(state);
    const token = selectors.tokenSelector(state);

    expect(isAuthenticated).toBe(initialState.isAuthenticated)
    expect(token).toBe(initialState.token)
  });
});
