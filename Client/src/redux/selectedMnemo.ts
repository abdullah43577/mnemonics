import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  selectedMnemo: string[];
}

const initialState: InitialState = {
  selectedMnemo: [
    'Harry Swiftly Raced The Zebras',
    'Harry Swiftly Raced The Zebras',
    'Harry Swiftly Raced The Zebras',
    'Harry Swiftly Raced The Zebras',
    'Harry Swiftly Raced The Zebras',
    'Harry Swiftly Raced The Zebras',
    'Harry Swiftly Raced The Zebras',
    'Harry Swiftly Raced The Zebras',
  ],
};

export const mnemoSlice = createSlice({
  name: 'mnemo',
  initialState,
  reducers: {
    // more todo here, async function sets selectedMnemo

    handleGeneratedMnemoClick: (_state, action: PayloadAction<string>) => {
      const { payload } = action;
      const el = document.querySelector(`.${payload}`);
      const svg = document.querySelector(`.${payload} > svg.inactiveMnemo`);
      const svg2 = document.querySelector(`.${payload} > svg.activeMnemo`);

      el?.classList.toggle('active');
      svg?.classList.toggle('invisible');
      svg2?.classList.toggle('invisible');
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleGeneratedMnemoClick } = mnemoSlice.actions;

export default mnemoSlice.reducer;
