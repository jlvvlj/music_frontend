import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { loginAction, signUpAction } from "../actions/auth.action";

export type User = {
  id: number;
  userPaymentId: number;
  contractId: number;
  password: string;
  picture: string;
  firstName: string;
  lastName: string;
  birthday: string;
  nationality: string;
  countryOfResidence: string;
  tag: string;
  email: string;
  termsAndConditionsAccepted: string;
  userCategory: string;
  personType: string;
  isArtist: boolean;
  isMasterOwner: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type UserState = {
  data: {
    user?: User;
    tokens?: Tokens;
  };
  isLogin: boolean;
  isLoading: boolean;
  error: boolean;
  message: string;
  isToast: boolean;
};

export const authSlice = createSlice<
  UserState,
  SliceCaseReducers<UserState>,
  string
>({
  name: "user",
  initialState: {
    data: {
      user: {},
      tokens: localStorage.getItem("tokens") ?? {},
    },
    isLogin: !!localStorage.getItem("tokens"),
    isLoading: false,
    error: false,
    message: "",
    isToast: false,
  },
  reducers: {
    setIsToast(
      state,
      action: PayloadAction<{ isToast: boolean; message?: string }>
    ) {
      const { isToast, message } = action.payload;
      state.isToast = isToast;
      if (message) {
        state.message = message;
      }
    },
  },
  extraReducers: (builder) => {
    // signupAction
    builder.addCase(signUpAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUpAction.fulfilled, (state, { payload }: any) => {
      state.isLoading = false;
      state.isToast = true;
      state.error = false;
      console.log("payload", payload);
      if (payload.message) {
        state.message = payload.message;
      }
    });
    builder.addCase(signUpAction.rejected, (state, { payload }: any) => {
      state.isLoading = false;
      state.isToast = true;
      state.error = true;
      if (payload?.message) {
        state.message = payload?.message;
      }
    });

    // loginAction
    builder.addCase(loginAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.data = payload?.data;
      state.isLogin = true;
      state.isLoading = false;
      state.isToast = true;
      state.error = false;
      if (payload?.message) {
        state.message = payload.message;
      }
    });
    builder.addCase(loginAction.rejected, (state, { payload }: any) => {
      state.isLoading = false;
      state.isToast = true;
      state.error = true;
      if (payload) {
        state.message = payload.message;
      }
    });
  },
});

export const { setIsToast } = authSlice.actions;
export default authSlice.reducer;
