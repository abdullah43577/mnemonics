import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    setSelectedMnemo: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },

    handleGeneratedMnemoClick: (state, action) => {
      const { payload } = action;
      const el = document.querySelector(`.${payload}`);
      const svg = document.querySelector(`.${payload} > svg.inactiveMnemo`);
      const svg2 = document.querySelector(`.${payload} > svg.activeMnemo`);

      el.classList.toggle('active');
      svg.classList.toggle('invisible');
      svg2.classList.toggle('invisible');
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedMnemo, handleGeneratedMnemoClick } = mnemoSlice.actions;

export default mnemoSlice.reducer;
