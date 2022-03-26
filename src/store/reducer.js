import initialState from './initialState';
const rootReducer = (state = initialState(), { type, payload }) => {
  switch (type) {
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: payload };
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        currentPage: 'map',
        userInfo: {
          payment: payload.payment,
          token: payload.token,
          email: payload.email,
        },
      };
    case 'LOGOUT':
      return initialState;
    case 'PAYMENT_UPDATE':
      return { ...state, userInfo: { ...state.userInfo, payment: payload } };
    case 'ADDRESSES_REQUEST_SUCCEEDED':
      return { ...state, addressesList: payload };
    case 'ROUTE_REQUEST_SUCCEEDED':
      return { ...state, coordinates: payload };
    case 'AUTH_REQUEST_FAILED':
      return {
        ...state,
        errorMessages: { ...state.errorMessages, authErrorMessage: payload },
      };
    case 'REGISTRATION_REQUEST_FAILED':
      return {
        ...state,
        errorMessages: {
          ...state.errorMessages,
          registrationErrorMessage: payload,
        },
      };
    case 'PAYMENT_REQUEST_FAILED':
      return {
        ...state,
        errorMessages: { ...state.errorMessages, paymentErrorMessage: payload },
      };
    default:
      return state;
  }
};

export default rootReducer