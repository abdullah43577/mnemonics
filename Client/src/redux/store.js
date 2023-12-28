import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './toggleModal';
import inputSlice from './input';
import mnemoSlice from './selectedMnemo';
import selectedCategorySlice from './selectedCategory';
import generateMnemoSlice from './generateMnemo';
import modalStateSlice from './modalState';

export const store = configureStore({
  reducer: {
    modalWindow: modalSlice,
    input: inputSlice,
    mnemo: mnemoSlice,
    category: selectedCategorySlice,
    generate: generateMnemoSlice,
    modalState: modalStateSlice,
  },
});
