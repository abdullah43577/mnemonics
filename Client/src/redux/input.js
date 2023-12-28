import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  input: '',
};

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setInput } = inputSlice.actions;

export default inputSlice.reducer;
