import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
  modalState: {
    upgradeView: boolean;
    signupView: boolean;
    loginView: boolean;
    paymentView: boolean;
    tokenView: boolean;
  };
}

const initialState: InitialState = {
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
    toggleModalState: (state, action: PayloadAction<string>) => {
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
          paymentView: false,
          tokenView: false,
        },
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleModalState, resetModalState } = modalStateSlice.actions;

export default modalStateSlice.reducer;
