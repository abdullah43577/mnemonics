import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface generatorState {
  generator: string;
}

const initialState: generatorState = {
  generator: '',
};

export const generateMnemoSlice = createSlice({
  name: 'generateMnemo',
  initialState,
  reducers: {
    generateMnemo: (_state, _action: PayloadAction<null>) => {
      console.log('this code ran');
    },
  },
});

// Action creators are generated for each case reducer function
export const { generateMnemo } = generateMnemoSlice.actions;

export default generateMnemoSlice.reducer;
