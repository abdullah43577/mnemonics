import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  generator: '',
};

export const generateMnemoSlice = createSlice({
  name: 'generateMnemo',
  initialState,
  reducers: {
    generateMnemo: (state, action) => {
      console.log('this code ran');
    },
  },
});

// Action creators are generated for each case reducer function
export const { generateMnemo } = generateMnemoSlice.actions;

export default generateMnemoSlice.reducer;
