import { createSlice } from '@reduxjs/toolkit';
import initialState from './authState';

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
});

export const authActions = auth.actions;

export default auth.reducer;
