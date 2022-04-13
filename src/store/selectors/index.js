export const isAuthenticatedSelector = (state) => state.auth.isAuthenticated;
export const tokenSelector = (state) => state.auth.token;

export const loginErrorSelector = (state) => state.errors.login;
export const registrationErrorSelector = (state) => state.errors.registration;
export const paymentErrorSelector = (state) => state.errors.payment;

export const currentPageSelector = (state) => state.layout.currentPage;
export const addressesSelector = (state) => state.layout.addressesList;
export const coordinatesSelector = (state) => state.layout.coordinates;

export const paymentSelector = (state) => state.user.payment;
export const emailSelector = (state) => state.user.email;
export const nameSelector = (state) => state.user.name;
