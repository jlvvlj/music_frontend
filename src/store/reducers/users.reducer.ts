import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  getUserContracts,
  getUserFriends,
  getUserTracks,
} from "../actions/users.action";
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
export type UserInitialState = {
  user: User;
  tokens: Tokens;
  isLogin: boolean;
  isLoading: boolean;
  error: boolean;
  message: string;
  isToast: boolean;
  userFriends: any;
  userContracts: any;
  userTracks: any;
  status: string;
};

export const userSlice = createSlice({
  name: "users",
  initialState: {
    userFriends: [],
    userContracts: [],
    userTracks: [],
    status: "idle",
    error: false,
    user: {},
    tokens: {},
    isLogin: false,
    isLoading: false,
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
    // register Reducer
    builder.addCase(signUpAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUpAction.fulfilled, (state, { payload }: any) => {
      state.isLoading = false;
      state.isToast = true;
      state.error = false;
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

    // login Reducer
    builder.addCase(loginAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginAction.fulfilled, (state: any, { payload }: any) => {
      state.user = payload.data.user;
      state.tokens = payload.data.tokens;
      state.isLogin = true;
      state.isLoading = false;
      state.isToast = true;
      state.error = false;
      if (payload.message) {
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

    // getUserFriends
    builder.addCase(getUserFriends.pending, (state: any) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(
      getUserFriends.fulfilled,
      (state: any, { payload }: any) => {
        state.userFriends = payload;
        state.isLoading = false;
        state.error = false;
      }
    );
    builder.addCase(getUserFriends.rejected, (state: any, { payload }: any) => {
      state.isLoading = false;
      state.error = true;
      if (payload) state.message = payload?.message;
    });

    // getUserContracts
    builder.addCase(getUserContracts.pending, (state: any) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(
      getUserContracts.fulfilled,
      (state: any, { payload }: any) => {
        state.userContracts = payload;
        state.isLoading = false;
        state.error = false;
      }
    );
    builder.addCase(
      getUserContracts.rejected,
      (state: any, { payload }: any) => {
        state.isLoading = false;
        state.error = true;
        if (payload) state.message = payload?.message;
      }
    );

    // getUserTracks
    builder.addCase(getUserTracks.pending, (state: any) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(getUserTracks.fulfilled, (state: any, { payload }: any) => {
      state.userTracks = payload;
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(getUserTracks.rejected, (state: any, { payload }: any) => {
      state.isLoading = false;
      state.error = true;
      if (payload) state.message = payload?.message;
    });
  },
});

export const { setIsToast }: any = userSlice.actions;
export default userSlice;
