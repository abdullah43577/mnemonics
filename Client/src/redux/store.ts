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

// Infer the 'RootState' and 'AppDispatch' types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
