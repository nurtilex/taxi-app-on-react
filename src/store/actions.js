import { createAction } from 'redux-actions';

// actions for middlewares
export const init = createAction('INIT');
export const auth = createAction('AUTHENTICATE');
export const register = createAction('REGISTRATION');
export const payment = createAction('PAYMENT');
export const addressesList = createAction('ADDRESSES_REQUEST');
export const route = createAction('ROUTE');
export const preLogout = createAction('LOGOUT_PREPARE');
