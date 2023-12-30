import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalState: {
    upgradeView: true,
    signupView: false,
    loginView: false,
  },
};

export const modalStateSlice = createSlice({
  name: 'modalState',
  initialState,
  reducers: {
    toggleModalState: (state, action) => {
      const { payload } = action;
      console.log(payload);

      if (payload === 'upgradeView') {
        return {
          modalState: {
            ...state.modalState,
            upgradeView: false,
            signupView: true,
          },
        };
      } else if (payload === 'signupView') {
        return {
          modalState: {
            ...state.modalState,
            signupView: false,
            loginView: true,
          },
        };
      } else {
        return {
          modalState: {
            ...state.modalState,
            upgradeView: true,
            loginView: false,
          },
        };
      }
    },

    resetModalState: (state) => {
      return {
        modalState: {
          ...state.modalState,
          upgradeView: true,
          signupView: false,
          loginView: false,
        },
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleModalState, resetModalState } = modalStateSlice.actions;

export default modalStateSlice.reducer;
