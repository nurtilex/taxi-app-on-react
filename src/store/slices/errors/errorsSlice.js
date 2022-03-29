import { createSlice } from '@reduxjs/toolkit';
import initialState from './errorsState';

const errors = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    setLoginErrorMessage(state, action) {
      state.login = action.payload;
    },
    setRegistrationErrorMessage(state, action) {
      state.registration = action.payload;
    },
    setPaymentErrorMessage(state, action) {
      state.payment = action.payload;
    },
    reset(state) {
      state = initialState;
    },
  },
});

export const errorsActions = errors.actions;

export default errors.reducer;
