import { createSlice } from '@reduxjs/toolkit';
import initialState from './inputsState';

const inputs = createSlice({
  name: 'inputs',
  initialState,
  reducers: {},
});

export default inputs.reducer;
