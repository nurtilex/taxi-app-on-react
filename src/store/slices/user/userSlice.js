import { createSlice } from '@reduxjs/toolkit';
import initialState from './userState';

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPayment(state, action) {
      state.payment = action.payload.payment;
    },
    setEmail(state, action) {
      state.email = action.payload.email;
    },
    setName(state, action) {
      state.name = action.payload.name;
    },
  },
});

export const userActions = user.actions;

export default user.reducer;
