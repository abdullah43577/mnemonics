import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalState: {
    upgradeView: true,
    signupView: false,
    loginView: false,
    paymentView: false,
    tokenView: false,
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
      } else if (payload === 'loginView') {
        return {
          modalState: {
            ...state.modalState,
            loginView: false,
            paymentView: true,
          },
        };
      } else if (payload === 'paymentView') {
        return {
          modalState: {
            ...state.modalState,
            paymentView: false,
            tokenView: true,
          },
        };
      } else {
        return {
          modalState: {
            ...state.modalState,
            tokenView: false,
            upgradeView: true,
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
