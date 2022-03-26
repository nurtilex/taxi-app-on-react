import { createSlice } from '@reduxjs/toolkit';
import initialState from './layoutState';

const layout = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setAddresses(state, action) {
      state.addressesList = action.payload;
    },
    setCoordinates(state, action) {
      state.coordinates = action.payload;
    },
  },
});

export const layoutActions = layout.actions;

export default layout.reducer;
