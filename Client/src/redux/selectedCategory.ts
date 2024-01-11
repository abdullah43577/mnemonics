import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  selectedCategory: {
    Fun: boolean;
    Educative: boolean;
    Custom: boolean;
  };
}

type CategoryKey = keyof InitialState['selectedCategory'];

const initialState: InitialState = {
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
    toggleSelectedCategory: (state, action: PayloadAction<CategoryKey>) => {
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
