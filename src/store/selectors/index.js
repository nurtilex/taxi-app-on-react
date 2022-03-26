export const currentPageSelector = (state) => state.currentPage;
export const isAuthenticatedSelector = (state) => state.isLoggedIn;
export const paymentSelector = (state) => state.userInfo.payment;
export const authenticationTokenSelector = (state) => state.userInfo.token;
export const addressesListSelector = (state) => state.addressesList;
export const coordinatesSelector = (state) => state.coordinates;
export const errorMessagesSelector = (state) => state.errorMessages;
export const inputsSelector = (state) => state.inputs;
