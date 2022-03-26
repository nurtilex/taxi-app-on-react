import { createAction } from 'redux-actions';

// actions for reducer
export const setPage = createAction('SET_CURRENT_PAGE');
export const login = createAction('LOGIN');
export const logout = createAction('LOGOUT');
export const paymentUpdate = createAction('PAYMENT_UPDATE');

export const addressesRequestSucceeded = createAction(
  'ADDRESSES_REQUEST_SUCCEEDED'
);
export const routesRequestSucceeded = createAction('ROUTE_REQUEST_SUCCEEDED');

export const authRequestFailed = createAction('AUTH_REQUEST_FAILED');
export const registrationRequestFailed = createAction(
  'REGISTRATION_REQUEST_FAILED'
);
export const paymentRequestFailed = createAction('PAYMENT_REQUEST_FAILED');

// actions for middlewares
export const init = createAction('INIT');
export const auth = createAction('AUTHENTICATE');
export const register = createAction('REGISTRATION');
export const payment = createAction('PAYMENT');
export const addressesList = createAction('ADDRESSES_REQUEST');
export const route = createAction('ROUTE');
export const preLogout = createAction('LOGOUT_PREPARE');
