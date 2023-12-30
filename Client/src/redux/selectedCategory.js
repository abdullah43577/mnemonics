import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategory: {
    Fun: false,
    Educative: false,
    Custom: false,
  },
};

export const selectedCategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    toggleSelectedCategory: (state, action) => {
      const { payload } = action;
      return {
        selectedCategory: {
          Fun: false,
          Educative: false,
          Custom: false,
          [payload]: !state.selectedCategory[payload],
        },
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSelectedCategory } = selectedCategorySlice.actions;

export default selectedCategorySlice.reducer;
